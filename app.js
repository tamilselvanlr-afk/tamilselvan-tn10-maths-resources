(() => {
"use strict";
const $ = s => document.querySelector(s);
const state = { lang:"en", chapter:null, chapterTab:"examples", quiz:[], quizIndex:0, answers:[], quizMode:"quick", quizStart:0, optionSets:[] };
const store = {
 get(){try{return JSON.parse(localStorage.getItem("tn10maths-v2")||'{"seen":[],"best":0,"tests":0}')}catch(e){return {seen:[],best:0,tests:0}}},
 set(v){try{localStorage.setItem("tn10maths-v2",JSON.stringify(v))}catch(e){}}
};
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const t = (en,ta) => state.lang==="ta" ? ta : en;
function renderCards(filter=""){
 const term=filter.toLowerCase().trim();
 const list=MATHS_CONTENT.filter(c=>(c.title+" "+c.tamil+" "+c.description+" "+c.descriptionTa).toLowerCase().includes(term));
 const seen=store.get().seen;
 $("#chapterGrid").innerHTML=list.map(c=>`<article class="chapter-card" role="button" tabindex="0" data-id="${c.id}">
 <div class="card-head"><span class="chapter-no">${String(c.id).padStart(2,"0")}</span><span class="chapter-emoji">${c.icon}</span></div>
 <h3>${esc(t(c.title,c.tamil))}</h3><p>${esc(t(c.description,c.descriptionTa))}</p>
 <div class="card-foot"><span>${seen.includes(c.id)?'✓ '+t("Visited","பார்த்தது"):t("Open chapter","பாடத்தைத் திறக்கவும்")}</span><span>→</span></div></article>`).join("");
 $("#emptySearch").classList.toggle("hidden",list.length>0);
 $("#chapterGrid").querySelectorAll(".chapter-card").forEach(el=>{
  const go=()=>openChapter(+el.dataset.id);
  el.addEventListener("click",go);el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}});
 });
}
function updateProgress(){
 const d=store.get(),seen=d.seen||[],pct=Math.round(seen.length/8*100);
 $("#progressPercent").textContent=pct+"%";$("#progressLabel").textContent=seen.length+" / 8";$("#progressBar").style.width=pct+"%";
 $("#bestScore").textContent=d.tests?d.best+"%":"—";
 $("#progressChips").innerHTML=MATHS_CONTENT.map(c=>`<span class="progress-chip ${seen.includes(c.id)?"done":""}">${String(c.id).padStart(2,"0")}</span>`).join("");
}
function openChapter(id){
 state.chapter=MATHS_CONTENT.find(c=>c.id===id);state.chapterTab="examples";
 const d=store.get();if(!d.seen.includes(id)){d.seen.push(id);store.set(d)}
 $("#chapterNumber").textContent=t("CHAPTER ","பாடம் ")+String(id).padStart(2,"0");
 $("#chapterTitle").textContent=t(state.chapter.title,state.chapter.tamil);
 $("#chapterDesc").textContent=t(state.chapter.description,state.chapter.descriptionTa);
 document.querySelectorAll("[data-chapter-tab]").forEach(b=>b.classList.toggle("active",b.dataset.chapterTab==="examples"));
 renderChapterItems();$("#chapterDialog").showModal();renderCards($("#chapterSearch").value);updateProgress();
}
function renderChapterItems(){
 const items=state.chapter[state.chapterTab];
 $("#chapterItems").innerHTML=items.map((q,i)=>`<article class="study-item"><div class="item-index">${String(i+1).padStart(2,"0")}</div><div class="item-main"><span class="item-label">${state.chapterTab==="examples"?t("WORKED EXAMPLE","தீர்க்கப்பட்ட எடுத்துக்காட்டு"):t("PRACTICE QUESTION","பயிற்சி வினா")}</span><h3>${esc(t(q.question,q.questionTa))}</h3><button class="reveal-btn" data-reveal="${i}">＋ ${t("Show answer & steps","விடை மற்றும் படிகளைக் காண்க")}</button><div class="answer-box hidden" id="answer-${i}"><b>${t("Answer","விடை")}</b><p>${esc(t(q.answer,q.answerTa))}</p><b>${t("Method","தீர்வு முறை")}</b><p>${esc(t(q.hint,q.hintTa))}</p></div></div></article>`).join("");
 $("#chapterItems").querySelectorAll("[data-reveal]").forEach(b=>b.addEventListener("click",()=>{const a=$("#answer-"+b.dataset.reveal);a.classList.toggle("hidden");b.textContent=a.classList.contains("hidden")?"＋ "+t("Show answer & steps","விடை மற்றும் படிகளைக் காண்க"):"− "+t("Hide answer","மறைக்கவும்")}));
}
function allQuestions(){return MATHS_CONTENT.flatMap(c=>c.practice.map(q=>({...q,chapter:c.id,chapterTitle:c.title})))}
function startQuiz(mode){
 const pool=allQuestions();
 // Spread questions across chapters for a balanced mixed test.
 const qs=mode==="mock"?pool.filter((q,i)=>i%5===0||i%5===2).slice(0,16):pool.slice(0,10);
 state.quiz=qs;state.quizIndex=0;state.answers=Array(qs.length).fill(null);state.quizMode=mode;state.quizStart=Date.now();state.optionSets=qs.map(q=>makeOptions(q));
 $("#quizTitle").textContent=mode==="mock"?t("Full-length mock test","முழு மாதிரித் தேர்வு"):t("Quick MCQ practice","விரைவு பல்விடை வினா பயிற்சி");
 $("#quizSub").textContent=mode==="mock"?t("Mixed chapters · 16 questions","கலப்பு பாடங்கள் · 16 வினாக்கள்"):t("Practice set · 10 questions","பயிற்சித் தொகுப்பு · 10 வினாக்கள்");
 renderQuizQuestion();$("#quizDialog").showModal();
}
function renderQuizQuestion(){
 const q=state.quiz[state.quizIndex];
 if(!q){finishQuiz();return}
 const i=state.quizIndex,selected=state.answers[i];
 const options=state.optionSets[i];
 $("#quizBody").innerHTML=`<div class="quiz-progress-row"><span>${t("QUESTION","வினா")} ${i+1} / ${state.quiz.length}</span><span>${Math.round(i/state.quiz.length*100)}% ${t("completed","முடிந்தது")}</span></div><div class="quiz-track"><span style="width:${i/state.quiz.length*100}%"></span></div><div class="quiz-question"><span class="item-label">${t("CHAPTER","பாடம்")} ${q.chapter}</span><h3>${esc(t(q.question,q.questionTa))}</h3><div class="option-list">${options.map((o,n)=>`<button class="option ${selected===n?"selected":""}" data-option="${n}"><span>${String.fromCharCode(65+n)}</span>${esc(o.label)}</button>`).join("")}</div></div><div class="quiz-controls"><button class="subtle-btn" id="quizPrev" ${i===0?"disabled":""}>← ${t("Previous","முந்தையது")}</button><button class="btn primary" id="quizNext">${i===state.quiz.length-1?t("Submit test","தேர்வைச் சமர்ப்பி"):t("Next question →","அடுத்த வினா →")}</button></div>`;
 $("#quizBody").querySelectorAll("[data-option]").forEach(b=>b.addEventListener("click",()=>{state.answers[i]=+b.dataset.option;renderQuizQuestion()}));
 $("#quizPrev").addEventListener("click",()=>{state.quizIndex--;renderQuizQuestion()});
 $("#quizNext").addEventListener("click",()=>{if(state.answers[i]===null){alert(t("Please select an answer first.","முதலில் ஒரு விடையைத் தேர்ந்தெடுக்கவும்."));return}state.quizIndex++;renderQuizQuestion()});
}
function makeOptions(q){
 // Correct answer is always option A in this starter bank; distractors are generated as clearly distinct choices.
 const correct=q.answer;
 const distractors=[t("None of these","இவற்றில் எதுவுமில்லை"),t("Cannot be determined","கண்டறிய இயலாது"),t("All of these","இவை அனைத்தும்")].filter(x=>x!==correct);
 return [correct,...distractors.slice(0,3)].map((label,i)=>({label,correct:i===0}));
}
function finishQuiz(){
 const correct=state.answers.filter((a,i)=>a!==null && state.optionSets[i][a]?.correct).length;
 const score=Math.round(correct/state.quiz.length*100),d=store.get();d.best=Math.max(d.best||0,score);d.tests=(d.tests||0)+1;store.set(d);updateProgress();
 $("#quizBody").innerHTML=`<div class="result-panel"><div class="result-medal">${score>=70?"★":"✓"}</div><span class="kicker dark-kicker">${t("TEST COMPLETED","தேர்வு நிறைவு")}</span><h2>${score}%</h2><p>${correct} / ${state.quiz.length} ${t("correct answers","சரியான விடைகள்")}</p><div class="result-track"><span style="width:${score}%"></span></div><p>${score>=80?t("Excellent work! Keep practising.","மிகச் சிறப்பு! தொடர்ந்து பயிற்சி செய்யுங்கள்."):score>=50?t("Good effort. Review the solutions and try again.","நல்ல முயற்சி. தீர்வுகளைப் பார்த்து மீண்டும் முயற்சிக்கவும்."):t("Keep learning. Review the chapter examples and retry.","தொடர்ந்து கற்கவும். எடுத்துக்காட்டுகளைப் பார்த்து மீண்டும் முயற்சிக்கவும்.")}</p><button class="btn primary" id="reviewQuiz">Review answers</button> <button class="btn ghost-dark" id="closeResult">Close</button></div>`;
 $("#reviewQuiz").addEventListener("click",showReview);$("#closeResult").addEventListener("click",()=>$("#quizDialog").close());
}
function showReview(){
 const rows=state.quiz.map((q,i)=>`<article class="review-item"><b>${i+1}. ${esc(t(q.question,q.questionTa))}</b><p>${t("Your answer:","உங்கள் விடை:")} ${state.answers[i]!==null && state.optionSets[i][state.answers[i]]?.correct?esc(t(q.answer,q.answerTa)):t("Incorrect / not answered","தவறு / விடையளிக்கவில்லை")}</p><small>${t("Correct answer:","சரியான விடை:")} ${esc(t(q.answer,q.answerTa))}</small></article>`).join("");
 $("#quizBody").innerHTML=`<h3>${t("Answer review","விடை மதிப்பாய்வு")}</h3><div class="review-list">${rows}</div><button class="btn primary" id="finishReview">${t("Done","முடிந்தது")}</button>`;
 $("#finishReview").addEventListener("click",()=>$("#quizDialog").close());
}
function worksheet(chapter=null){
 const list=chapter?[chapter]:MATHS_CONTENT;
 const title=chapter?t(chapter.title,chapter.tamil):t("Class 10 Mathematics – Practice Worksheet","பத்தாம் வகுப்பு கணிதம் – பயிற்சித்தாள்");
 let html=`<div class="print-header"><h1>${esc(title)}</h1><p>${t("Tamil Nadu Samacheer Kalvi · Class 10","தமிழ்நாடு சமச்சீர் கல்வி · பத்தாம் வகுப்பு")}</p><p>${t("Name: _____________________  Date: ______________","பெயர்: _____________________  தேதி: ______________")}</p></div>`;
 list.forEach(c=>{html+=`<h2>${c.id}. ${esc(t(c.title,c.tamil))}</h2>`;c.practice.forEach((q,i)=>{html+=`<div class="print-question"><b>${i+1}. ${esc(t(q.question,q.questionTa))}</b><div class="write-lines"></div></div>`})});
 html+=`<p class="print-foot">${t("Original practice worksheet. Verify all topics with the current prescribed textbook.","சுயமாகத் தயாரிக்கப்பட்ட பயிற்சித்தாள். பாடங்களை நடப்பு பாடநூலுடன் சரிபார்க்கவும்.")}</p>`;
 $("#printArea").innerHTML=html;window.print();
}
function setLanguage(){
 state.lang=state.lang==="en"?"ta":"en";document.documentElement.lang=state.lang;
 $("#languageBtn").textContent=state.lang==="en"?"தமிழ்":"English";
 document.querySelectorAll("[data-en]").forEach(el=>{el.innerHTML=state.lang==="en"?el.dataset.en:el.dataset.ta});
 $("#chapterSearch").placeholder=t("Search chapters...","பாடங்களைத் தேடுங்கள்...");
 renderCards($("#chapterSearch").value);
 if(state.chapter){$("#chapterTitle").textContent=t(state.chapter.title,state.chapter.tamil);$("#chapterDesc").textContent=t(state.chapter.description,state.chapter.descriptionTa);renderChapterItems()}
}
$("#chapterSearch").addEventListener("input",e=>renderCards(e.target.value));
document.querySelectorAll("[data-chapter-tab]").forEach(b=>b.addEventListener("click",()=>{state.chapterTab=b.dataset.chapterTab;document.querySelectorAll("[data-chapter-tab]").forEach(x=>x.classList.toggle("active",x===b));renderChapterItems()}));
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>$("#"+b.dataset.close).close()));
$("#worksheetFromChapter").addEventListener("click",()=>worksheet(state.chapter));
$("#makeWorksheet").addEventListener("click",()=>worksheet());
$("#startQuickQuiz").addEventListener("click",()=>startQuiz("quick"));
$("#startMock").addEventListener("click",()=>startQuiz("mock"));
$("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");$("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾"});
$("#languageBtn").addEventListener("click",setLanguage);
$("#menuBtn").addEventListener("click",()=>$("#mobileNav").classList.toggle("hidden"));
$("#mobileNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#mobileNav").classList.add("hidden")));
$("#resetProgress").addEventListener("click",()=>{if(confirm(t("Reset all saved chapter progress and test scores on this device?","இந்தச் சாதனத்தில் சேமித்த பாட முன்னேற்றத்தையும் தேர்வு மதிப்பெண்களையும் மீட்டமைக்கவா?"))){store.set({seen:[],best:0,tests:0});updateProgress();renderCards($("#chapterSearch").value)}});
$("#questionTotal").textContent=MATHS_CONTENT.reduce((n,c)=>n+c.examples.length+c.practice.length,0);
renderCards();updateProgress();
})();