# TN 10th Maths Resources – Version 2

A modern bilingual (English/Tamil) Class 10 Mathematics learning portal built with plain HTML, CSS and JavaScript.

## Included
- Eight chapter pages based on the commonly used Class 10 Samacheer Kalvi Maths chapter structure
- Bilingual chapter titles, descriptions, starter questions and explanations
- Worked examples with revealable answers and method hints
- Practice questions
- Quick MCQ practice and mixed mock test
- Score summary and answer review
- Chapter completion tracking and best mock score saved in browser localStorage
- Printable worksheets; choose **Save as PDF** in the browser print dialog
- Search, dark mode and responsive mobile layout

## Files
- `index.html` – page structure and dialogs
- `styles.css` – responsive modern design and print styling
- `content.js` – bilingual chapter content and question bank
- `app.js` – interactions, tests, progress, worksheet printing

## Preview locally
Extract the ZIP and open `index.html` in Chrome, Firefox or Edge. If your browser blocks local scripts, use Visual Studio Code with the Live Server extension, or upload to GitHub Pages.

## Publish on GitHub Pages
1. Sign in at https://github.com.
2. Create a new **Public** repository, e.g. `tn10-maths-resources`.
3. Upload the four website files (`index.html`, `styles.css`, `content.js`, `app.js`) to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then Save.
7. Wait for the deployment to complete. The URL will look like:
   `https://YOUR-USERNAME.github.io/tn10-maths-resources/`

## Updating content
Edit `content.js`. Each chapter contains:
- `examples`: `question`, `questionTa`, `answer`, `answerTa`, `hint`, `hintTa`
- `practice`: the same six fields

Add or edit entries following the existing JSON structure. Keep commas, quotes and brackets valid. Then upload the updated file to GitHub and commit the change.

## How the quiz works
This is a front-end demonstration quiz. The included starter questions use a simple generated-choice interface and currently treat the stored answer as the correct choice. For a production assessment system, add an explicit `options` array and `correctIndex` to each question and update `app.js` accordingly. Do not use these starter tests as official examination papers.

## Progress and privacy
Progress is stored locally in each visitor's browser using localStorage. It is not synchronized between devices and there is no teacher/admin dashboard or student account system.

## PDF worksheets
The worksheet feature opens the browser print dialog. Choose **Save as PDF** (or the equivalent on your device). It does not download pre-made textbook PDFs.

## Copyright and syllabus note
This is an independent resource, not an official government website. The included questions are original short starter questions and are not a complete reproduction of textbook examples or exercises. Confirm the chapter list against the current prescribed textbook/edition. Add original teaching notes and solutions, or link to official sources. Do not upload copyrighted scans or copy complete exercise sets without permission.
