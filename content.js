window.MATHS_DATA = {
  "chapters": [
    {
      "id": 1,
      "title": "Relations and Functions",
      "ta": "உறவுகளும் சார்புகளும்",
      "range": "1–35",
      "intro_en": "A relation connects elements of two sets. A function is a special relation in which every input has exactly one output.",
      "intro_ta": "ஒரு உறவு என்பது இரண்டு கணங்களின் உறுப்புகளைத் தொடர்புபடுத்துகிறது. ஒவ்வொரு உள்ளீட்டிற்கும் ஒரே ஒரு வெளியீடு மட்டுமே பொருந்தினால் அது சார்பு எனப்படும்.",
      "topics": [
        [
          "Ordered pairs & Cartesian product",
          "வரிசைச் சோடிகள் மற்றும் கார்டீசியன் பெருக்கல்",
          "An ordered pair (a,b) records a first and second element. A × B contains every pair (a,b) with a ∈ A and b ∈ B.",
          "(a,b) என்ற வரிசைச் சோடியில் a முதல் உறுப்பும் b இரண்டாம் உறுப்பும் ஆகும். A × B-இல் a ∈ A, b ∈ B எனும் அனைத்து சோடிகளும் அடங்கும்."
        ],
        [
          "Relations",
          "உறவுகள்",
          "A relation from A to B is any subset of A × B. Its domain is the set of first components and its range is the set of second components used.",
          "A-லிருந்து B-க்கு வரையறுக்கப்படும் உறவு என்பது A × B-இன் ஏதேனும் ஒரு உட்கணம். முதல் உறுப்புகளின் தொகுதி ஆட்களம்; பயன்படுத்தப்படும் இரண்டாம் உறுப்புகளின் தொகுதி வீச்சகம்."
        ],
        [
          "Functions",
          "சார்புகள்",
          "A function f:A→B assigns exactly one value in B to each element of A. Different inputs may share an output.",
          "f:A→B என்ற சார்பு, A-விலுள்ள ஒவ்வொரு உறுப்பிற்கும் B-இல் சரியாக ஒரு மதிப்பை ஒதுக்குகிறது. வெவ்வேறு உள்ளீடுகளுக்கு ஒரே வெளியீடு இருக்கலாம்."
        ],
        [
          "Types & composition",
          "சார்புகளின் வகைகள் மற்றும் சேர்ப்பு",
          "One-one functions give distinct outputs for distinct inputs. Onto functions cover the codomain. Composition is (g∘f)(x)=g(f(x)).",
          "ஒன்றுக்கு ஒன்று சார்பில் வெவ்வேறு உள்ளீடுகளுக்கு வெவ்வேறு வெளியீடுகள் கிடைக்கும். மேற்கோள் சார்பு வீச்சகத்தின் எல்லா உறுப்புகளையும் அடையும். சேர்ப்புச் சார்பு (g∘f)(x)=g(f(x))."
        ]
      ],
      "examples": [
        [
          "If A={1,2}, B={a,b}, list A×B.",
          "A={1,2}, B={a,b} எனில் A×B-ஐ எழுதுக.",
          "A×B={(1,a),(1,b),(2,a),(2,b)}.",
          "A×B={(1,a),(1,b),(2,a),(2,b)}."
        ],
        [
          "For f(x)=2x+1, find f(3).",
          "f(x)=2x+1 எனில் f(3)-ஐ காண்க.",
          "Substitute x=3: f(3)=2(3)+1=7.",
          "x=3 எனப் பிரதியிடுக: f(3)=2(3)+1=7."
        ]
      ],
      "practice": [
        [
          "For A={0,1}, B={2,3}, write A×B.",
          "A={0,1}, B={2,3} எனில் A×B எழுதுக.",
          "{(0,2),(0,3),(1,2),(1,3)}",
          "ஒவ்வொரு A உறுப்பையும் B உறுப்புகளுடன் இணைக்கவும்."
        ],
        [
          "If f(x)=x²−4, find f(3).",
          "f(x)=x²−4 எனில் f(3) காண்க.",
          "5",
          "f(3)=3²−4=9−4=5."
        ],
        [
          "Is {(1,2),(2,3),(1,4)} a function?",
          "{(1,2),(2,3),(1,4)} ஒரு சார்பா?",
          "No / இல்லை",
          "உள்ளீடு 1-க்கு இரண்டு வெளியீடுகள் உள்ளன."
        ]
      ]
    },
    {
      "id": 2,
      "title": "Numbers and Sequences",
      "ta": "எண்களும் தொடர்வரிசைகளும்",
      "range": "36–84",
      "intro_en": "This chapter studies divisibility, prime factorisation, modular arithmetic, sequences, arithmetic progressions and geometric progressions.",
      "intro_ta": "இந்த அத்தியாயத்தில் வகுபடும் தன்மை, பகா எண் காரணிப்படுத்தல், மட்டு கணிதம், தொடர்வரிசைகள், கூட்டுத் தொடர்வரிசை மற்றும் பெருக்குத் தொடர்வரிசை ஆகியவை பயிலப்படுகின்றன.",
      "topics": [
        [
          "Euclid’s division lemma & algorithm",
          "யூக்ளிடின் வகுத்தல் துணை விதி மற்றும் படிமுறை",
          "For positive integers a and b, a=bq+r, where 0≤r<b. Repeated division helps find the GCD.",
          "நேர்ம முழுக்கள் a,b எனில் a=bq+r; இங்கு 0≤r<b. தொடர்ச்சியான வகுத்தல் மூலம் மீப்பெரு பொதுவகுத்தியைக் காணலாம்."
        ],
        [
          "Fundamental theorem & modular arithmetic",
          "அடிப்படை எண்கணிதத் தேற்றம் மற்றும் மட்டு கணிதம்",
          "Every integer greater than 1 has a unique prime factorisation, apart from order. Congruence modulo m compares remainders after division by m.",
          "1-ஐ விடப் பெரிய ஒவ்வொரு முழுவெண்ணும் வரிசையைத் தவிர தனித்துவமான பகா எண் காரணிப்படுத்தலைக் கொண்டுள்ளது. m-ஆல் வகுத்த மீதிகளை ஒப்பிடுவது மட்டு கணிதம்."
        ],
        [
          "Sequences & A.P.",
          "தொடர்வரிசைகள் மற்றும் கூட்டுத் தொடர்வரிசை",
          "An arithmetic progression has a constant common difference d. Its nth term is aₙ=a+(n−1)d.",
          "கூட்டுத் தொடர்வரிசையில் பொது வித்தியாசம் d மாறிலியாகும். n-வது உறுப்பு aₙ=a+(n−1)d."
        ],
        [
          "G.P. & special series",
          "பெருக்குத் தொடர்வரிசை மற்றும் சிறப்புத் தொடர்கள்",
          "A geometric progression has a constant common ratio r. For r≠1, Sₙ=a(rⁿ−1)/(r−1).",
          "பெருக்குத் தொடர்வரிசையில் பொது விகிதம் r மாறிலி. r≠1 எனில் Sₙ=a(rⁿ−1)/(r−1)."
        ]
      ],
      "examples": [
        [
          "Find the 8th term of 5, 9, 13, …",
          "5, 9, 13, … என்ற தொடரின் 8-வது உறுப்பைக் காண்க.",
          "a=5, d=4. a₈=5+(8−1)4=33.",
          "a=5, d=4. a₈=5+(8−1)4=33."
        ],
        [
          "Find the sum of first 5 terms of 2, 6, 18, …",
          "2, 6, 18, … தொடரின் முதல் 5 உறுப்புகளின் கூடுதலைக் காண்க.",
          "a=2, r=3. S₅=2(3⁵−1)/(3−1)=242.",
          "a=2, r=3. S₅=2(3⁵−1)/(3−1)=242."
        ]
      ],
      "practice": [
        [
          "Find the common difference of 12,17,22,…",
          "12,17,22,… பொது வித்தியாசம் காண்க.",
          "5",
          "d=17−12=5."
        ],
        [
          "Find the 10th term when a=3 and d=2.",
          "a=3, d=2 எனில் 10-வது உறுப்பைக் காண்க.",
          "21",
          "a₁₀=3+9×2=21."
        ],
        [
          "Find the GCD of 48 and 18.",
          "48 மற்றும் 18-ன் மீ.பொ.வ. காண்க.",
          "6",
          "48=2×18+12; 18=1×12+6; 12=2×6."
        ]
      ]
    },
    {
      "id": 3,
      "title": "Algebra",
      "ta": "இயற்கணிதம்",
      "range": "85–160",
      "intro_en": "Algebra develops methods for solving simultaneous equations, polynomial problems, rational expressions, quadratic equations, graphs and matrices.",
      "intro_ta": "ஒருங்கமை நேரிய சமன்பாடுகள், பல்லுறுப்புக்கோவை, விகிதமுறு கோவைகள், இருபடிச் சமன்பாடுகள், வரைபடங்கள் மற்றும் அணிகள் ஆகியவற்றை இயற்கணிதம் ஆராய்கிறது.",
      "topics": [
        [
          "Simultaneous linear equations in three variables",
          "மூன்று மாறிகளில் அமைந்த நேரிய சமன்பாடுகள்",
          "A system of three linear equations can be solved by elimination or substitution, while checking consistency.",
          "மூன்று நேரிய சமன்பாடுகளை நீக்கல் அல்லது பதிலிடல் முறையில் தீர்க்கலாம். தீர்வுகளின் பொருத்தத்தையும் சரிபார்க்க வேண்டும்."
        ],
        [
          "Polynomials, GCD and rational expressions",
          "பல்லுறுப்புக்கோவைகள், மீ.பொ.வ. மற்றும் விகிதமுறு கோவைகள்",
          "Factorisation helps identify polynomial GCDs and simplify rational expressions. Denominators must not be zero.",
          "காரணிப்படுத்தல் மூலம் பல்லுறுப்புக்கோவைகளின் மீ.பொ.வ. காணவும் விகிதமுறு கோவைகளைச் சுருக்கவும் முடியும். பகுதி பூச்சியமாக இருக்கக்கூடாது."
        ],
        [
          "Quadratic equations & graphs",
          "இருபடிச் சமன்பாடுகள் மற்றும் வரைபடங்கள்",
          "For ax²+bx+c=0, a≠0, the roots are x=[−b±√(b²−4ac)]/(2a). The discriminant determines the nature of roots.",
          "ax²+bx+c=0, a≠0 எனில் மூலங்கள் x=[−b±√(b²−4ac)]/(2a). பகுபாடு மூலங்களின் தன்மையைத் தீர்மானிக்கிறது."
        ],
        [
          "Matrices",
          "அணிகள்",
          "Matrices of the same order can be added or subtracted entry by entry. Scalar multiplication multiplies every entry by the scalar.",
          "ஒரே வரிசையுடைய அணிகளை ஒத்த இட உறுப்புகளைச் சேர்த்தோ கழித்தோ கணக்கிடலாம். ஸ்கேலர் பெருக்கலில் ஒவ்வொரு உறுப்பும் அந்த எண்ணால் பெருக்கப்படும்."
        ]
      ],
      "examples": [
        [
          "Solve x²−5x+6=0.",
          "x²−5x+6=0-ஐத் தீர்க்கவும்.",
          "(x−2)(x−3)=0, so x=2 or x=3.",
          "(x−2)(x−3)=0; எனவே x=2 அல்லது x=3."
        ],
        [
          "Add [[1,2],[3,4]] and [[2,0],[1,5]].",
          "கொடுக்கப்பட்ட இரு அணிகளைக் கூட்டுக.",
          "[[1+2,2+0],[3+1,4+5]]=[[3,2],[4,9]].",
          "ஒத்த இட உறுப்புகளைக் கூட்டுக: [[3,2],[4,9]]."
        ]
      ],
      "practice": [
        [
          "Solve x²−7x+12=0.",
          "x²−7x+12=0-ஐத் தீர்க்கவும்.",
          "x=3,4",
          "(x−3)(x−4)=0."
        ],
        [
          "Find the discriminant of 2x²−3x+1=0.",
          "2x²−3x+1=0-ன் பகுபாடு காண்க.",
          "1",
          "D=b²−4ac=9−8=1."
        ],
        [
          "Simplify (x²−9)/(x−3), x≠3.",
          "(x²−9)/(x−3), x≠3 சுருக்குக.",
          "x+3",
          "x²−9=(x−3)(x+3)."
        ]
      ]
    },
    {
      "id": 4,
      "title": "Geometry",
      "ta": "வடிவியல்",
      "range": "161–202",
      "intro_en": "Geometry explores similarity, proportionality theorems, Pythagoras theorem, circles, tangents and concurrency.",
      "intro_ta": "வடிவியலில் ஒத்த முக்கோணங்கள், விகிதத் தேற்றங்கள், பிதாகரஸ் தேற்றம், வட்டங்கள், தொடுகோடுகள் மற்றும் ஒருங்கமைவு ஆகியவை பயிலப்படுகின்றன.",
      "topics": [
        [
          "Similarity",
          "ஒத்த முக்கோணங்கள்",
          "Similar triangles have equal corresponding angles and proportional corresponding sides.",
          "ஒத்த முக்கோணங்களில் ஒத்த கோணங்கள் சமம்; ஒத்த பக்கங்கள் ஒரே விகிதத்தில் இருக்கும்."
        ],
        [
          "Thales & angle bisector theorems",
          "தேல்ஸ் மற்றும் கோண இருசமவெட்டித் தேற்றங்கள்",
          "A line parallel to one side of a triangle divides the other two sides proportionally. An angle bisector divides the opposite side in the ratio of adjacent sides.",
          "முக்கோணத்தின் ஒரு பக்கத்திற்கு இணையான கோடு மற்ற இரு பக்கங்களையும் ஒரே விகிதத்தில் பிரிக்கும். கோண இருசமவெட்டி எதிர்ப்பக்கத்தை அடுத்துள்ள பக்கங்களின் விகிதத்தில் பிரிக்கும்."
        ],
        [
          "Pythagoras theorem",
          "பிதாகரஸ் தேற்றம்",
          "In a right triangle, hypotenuse² = base² + perpendicular².",
          "செங்கோண முக்கோணத்தில் கர்ணத்தின் வர்க்கம் = அடிப்பக்கத்தின் வர்க்கம் + செங்குத்துப் பக்கத்தின் வர்க்கம்."
        ],
        [
          "Circles, tangents & concurrency",
          "வட்டங்கள், தொடுகோடுகள் மற்றும் ஒருங்கமைவு",
          "A tangent is perpendicular to the radius at the point of contact. Tangents from the same external point are equal.",
          "தொடுபுள்ளியில் தொடுகோடு ஆரத்திற்கு செங்குத்தாக இருக்கும். ஒரே வெளிப்புள்ளியிலிருந்து வரையப்படும் தொடுகோடுகள் சமம்."
        ]
      ],
      "examples": [
        [
          "A right triangle has legs 6 cm and 8 cm. Find the hypotenuse.",
          "செங்கோண முக்கோணத்தின் பக்கங்கள் 6 செ.மீ., 8 செ.மீ. கர்ணம் காண்க.",
          "c=√(6²+8²)=√100=10 cm.",
          "c=√(6²+8²)=√100=10 செ.மீ."
        ]
      ],
      "practice": [
        [
          "Find the hypotenuse when legs are 5 and 12.",
          "பக்கங்கள் 5,12 எனில் கர்ணம் காண்க.",
          "13",
          "√(25+144)=13."
        ],
        [
          "Two tangents from P have lengths 7 cm and x cm. Find x.",
          "P-இலிருந்து வரையப்பட்ட இரு தொடுகோடுகள் 7 செ.மீ., x செ.மீ. எனில் x காண்க.",
          "7 cm",
          "ஒரே வெளிப்புள்ளியிலிருந்து தொடுகோடுகள் சமம்."
        ]
      ]
    },
    {
      "id": 5,
      "title": "Coordinate Geometry",
      "ta": "ஆயத்தொலை வடிவியல்",
      "range": "203–238",
      "intro_en": "Coordinate geometry uses ordered pairs and algebra to study areas, slopes and equations of straight lines.",
      "intro_ta": "ஆயத்தொலை வடிவியல் வரிசைச் சோடிகளையும் இயற்கணிதத்தையும் பயன்படுத்தி பரப்பளவு, சாய்வு மற்றும் நேர்கோட்டுச் சமன்பாடுகளை ஆராய்கிறது.",
      "topics": [
        [
          "Area of a triangle",
          "முக்கோணத்தின் பரப்பளவு",
          "For vertices (x₁,y₁),(x₂,y₂),(x₃,y₃), area is ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|.",
          "முனைகள் (x₁,y₁),(x₂,y₂),(x₃,y₃) எனில் பரப்பளவு = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|."
        ],
        [
          "Slope & inclination",
          "சாய்வு மற்றும் சாய்வுக் கோணம்",
          "Slope m=(y₂−y₁)/(x₂−x₁), when x₂≠x₁. Also m=tan θ.",
          "x₂≠x₁ எனில் சாய்வு m=(y₂−y₁)/(x₂−x₁). மேலும் m=tan θ."
        ],
        [
          "Straight-line equations",
          "நேர்கோட்டுச் சமன்பாடுகள்",
          "Common forms include y=mx+c and ax+by+c=0. Parallel lines have equal slopes.",
          "y=mx+c, ax+by+c=0 ஆகியவை நேர்கோட்டின் பொதுவான வடிவங்கள். இணைகோடுகளின் சாய்வுகள் சமம்."
        ],
        [
          "Parallel & perpendicular lines",
          "இணை மற்றும் செங்குத்துக் கோடுகள்",
          "For non-vertical lines, parallel slopes are equal; perpendicular slopes satisfy m₁m₂=−1.",
          "செங்குத்தல்லாத இணைகோடுகளின் சாய்வுகள் சமம்; செங்குத்துக் கோடுகளுக்கு m₁m₂=−1."
        ]
      ],
      "examples": [
        [
          "Find the slope through (2,3) and (4,7).",
          "(2,3), (4,7) வழிச் செல்லும் கோட்டின் சாய்வு காண்க.",
          "m=(7−3)/(4−2)=4/2=2.",
          "m=(7−3)/(4−2)=2."
        ]
      ],
      "practice": [
        [
          "Find slope through (1,2) and (3,6).",
          "(1,2), (3,6) வழிச் செல்லும் கோட்டின் சாய்வு காண்க.",
          "2",
          "m=(6−2)/(3−1)=2."
        ],
        [
          "Find area of triangle (0,0),(4,0),(0,3).",
          "(0,0),(4,0),(0,3) முக்கோணத்தின் பரப்பளவு காண்க.",
          "6 square units",
          "½×4×3=6."
        ]
      ]
    },
    {
      "id": 6,
      "title": "Trigonometry",
      "ta": "முக்கோணவியல்",
      "range": "239–268",
      "intro_en": "Trigonometry relates angles and side ratios in right triangles and applies identities to heights and distances.",
      "intro_ta": "செங்கோண முக்கோணத்தில் கோணங்களுக்கும் பக்க விகிதங்களுக்கும் உள்ள தொடர்பையும், உயரங்கள் மற்றும் தொலைவுகளையும் முக்கோணவியல் ஆராய்கிறது.",
      "topics": [
        [
          "Trigonometric ratios",
          "முக்கோணவியல் விகிதங்கள்",
          "sin θ=opposite/hypotenuse, cos θ=adjacent/hypotenuse, tan θ=opposite/adjacent.",
          "sin θ=எதிர்ப்பக்கம்/கர்ணம்; cos θ=அடுத்த பக்கம்/கர்ணம்; tan θ=எதிர்ப்பக்கம்/அடுத்த பக்கம்."
        ],
        [
          "Standard angles",
          "சிறப்புக் கோணங்கள்",
          "Know the exact values of sin, cos and tan at 0°, 30°, 45°, 60° and 90°; tan 90° is undefined.",
          "0°,30°,45°,60°,90° ஆகிய கோணங்களுக்கான sin, cos, tan மதிப்புகளை அறிக. tan 90° வரையறுக்கப்படவில்லை."
        ],
        [
          "Identities",
          "முற்றொருமைகள்",
          "The fundamental identity is sin²θ+cos²θ=1. Also 1+tan²θ=sec²θ and 1+cot²θ=cosec²θ.",
          "அடிப்படை முற்றொருமை sin²θ+cos²θ=1. மேலும் 1+tan²θ=sec²θ; 1+cot²θ=cosec²θ."
        ],
        [
          "Heights & distances",
          "உயரங்களும் தொலைவுகளும்",
          "Draw a right-triangle model, mark the angle of elevation/depression, then select the suitable ratio.",
          "செங்கோண முக்கோணத்தை வரைந்து ஏற்ற/இறக்கக் கோணத்தைக் குறித்த பின் பொருத்தமான விகிதத்தைத் தேர்ந்தெடுக்கவும்."
        ]
      ],
      "examples": [
        [
          "If tan θ=3/4, find sin θ for an acute θ.",
          "tan θ=3/4 எனில் குறுங்கோண θ-க்கு sin θ காண்க.",
          "Opposite=3, adjacent=4, hypotenuse=5. Hence sin θ=3/5.",
          "எதிர்ப்பக்கம்=3, அடுத்த பக்கம்=4, கர்ணம்=5. எனவே sin θ=3/5."
        ]
      ],
      "practice": [
        [
          "Find tan θ if opposite=5 and adjacent=12.",
          "எதிர்ப்பக்கம் 5, அடுத்த பக்கம் 12 எனில் tan θ காண்க.",
          "5/12",
          "tan θ=எதிர்ப்பக்கம்/அடுத்த பக்கம்."
        ],
        [
          "Evaluate sin 30°.",
          "sin 30° மதிப்பு காண்க.",
          "1/2",
          "சிறப்புக் கோண மதிப்பு."
        ]
      ]
    },
    {
      "id": 7,
      "title": "Mensuration",
      "ta": "அளவியல்",
      "range": "269–300",
      "intro_en": "Mensuration calculates surface areas and volumes of solids, combined solids and conversions without volume change.",
      "intro_ta": "திண்மங்களின் புறப்பரப்பு, கனஅளவு, சேர்க்கப்பட்ட திண்மங்கள் மற்றும் கனஅளவு மாறாமல் வடிவமாற்றம் ஆகியவற்றைக் கணக்கிடுவது அளவியல்.",
      "topics": [
        [
          "Cylinder",
          "உருளை",
          "Curved surface area=2πrh; total surface area=2πr(r+h); volume=πr²h.",
          "வளைபரப்பு=2πrh; முழுப் புறப்பரப்பு=2πr(r+h); கனஅளவு=πr²h."
        ],
        [
          "Cone",
          "கூம்பு",
          "Slant height l=√(r²+h²); curved surface area=πrl; volume=⅓πr²h.",
          "சாயுயரம் l=√(r²+h²); வளைபரப்பு=πrl; கனஅளவு=⅓πr²h."
        ],
        [
          "Sphere & hemisphere",
          "கோளம் மற்றும் அரைக்கோளம்",
          "Sphere surface area=4πr² and volume=4/3πr³. Hemisphere volume=2/3πr³.",
          "கோளத்தின் புறப்பரப்பு=4πr²; கனஅளவு=4/3πr³. அரைக்கோளத்தின் கனஅளவு=2/3πr³."
        ],
        [
          "Combined solids & conversion",
          "சேர்த்த திண்மங்கள் மற்றும் வடிவமாற்றம்",
          "For combined solids, add or subtract component volumes as appropriate. In reshaping without loss, total volume remains constant.",
          "சேர்த்த திண்மங்களில் தேவைக்கேற்ப கனஅளவுகளைக் கூட்டவும் அல்லது கழிக்கவும். இழப்பில்லா வடிவமாற்றத்தில் மொத்த கனஅளவு மாறாது."
        ]
      ],
      "examples": [
        [
          "Find the volume of a cylinder with r=3 cm, h=5 cm.",
          "ஆரம் 3 செ.மீ., உயரம் 5 செ.மீ. கொண்ட உருளையின் கனஅளவு காண்க.",
          "V=πr²h=π×9×5=45π cm³.",
          "V=πr²h=45π கன செ.மீ."
        ]
      ],
      "practice": [
        [
          "Find volume of a cylinder r=2 cm, h=7 cm.",
          "r=2 செ.மீ., h=7 செ.மீ. உருளையின் கனஅளவு காண்க.",
          "28π cm³",
          "V=π×2²×7=28π."
        ],
        [
          "Find sphere volume for r=3 cm.",
          "r=3 செ.மீ. கோளத்தின் கனஅளவு காண்க.",
          "36π cm³",
          "V=4/3π×27=36π."
        ]
      ]
    },
    {
      "id": 8,
      "title": "Statistics and Probability",
      "ta": "புள்ளியியல் மற்றும் நிகழ்தகவு",
      "range": "301–333",
      "intro_en": "Statistics summarises data using measures of dispersion and coefficient of variation. Probability measures the likelihood of events.",
      "intro_ta": "புள்ளியியல் பரவல் அளவைகள் மற்றும் மாறுபாட்டுக் குணகம் மூலம் தரவுகளைச் சுருக்குகிறது. நிகழ்தகவு நிகழ்வுகள் நடைபெறும் வாய்ப்பை அளவிடுகிறது.",
      "topics": [
        [
          "Measures of dispersion",
          "பரவல் அளவைகள்",
          "Range=maximum−minimum. Variance and standard deviation describe spread around the mean.",
          "வீச்சு=மீப்பெரு மதிப்பு−மீச்சிறு மதிப்பு. மாறுபாடு மற்றும் திட்ட விலக்கம் சராசரியைச் சுற்றிய பரவலைக் காட்டும்."
        ],
        [
          "Coefficient of variation",
          "மாறுபாட்டுக் குணகம்",
          "CV=(standard deviation/mean)×100%. Lower CV indicates less relative variation.",
          "CV=(திட்ட விலக்கம்/சராசரி)×100%. குறைந்த CV குறைந்த சார்பு மாறுபாட்டைக் குறிக்கும்."
        ],
        [
          "Probability",
          "நிகழ்தகவு",
          "For equally likely outcomes, P(A)=number of favourable outcomes/total outcomes. 0≤P(A)≤1.",
          "சமவாய்ப்பு முடிவுகளில் P(A)=சாதக முடிவுகளின் எண்ணிக்கை/மொத்த முடிவுகள். 0≤P(A)≤1."
        ],
        [
          "Algebra of events & addition theorem",
          "நிகழ்வுகளின் இயற்கணிதம் மற்றும் கூட்டல் தேற்றம்",
          "P(A∪B)=P(A)+P(B)−P(A∩B). For mutually exclusive events, P(A∩B)=0.",
          "P(A∪B)=P(A)+P(B)−P(A∩B). ஒன்றையொன்று விலக்கும் நிகழ்வுகளுக்கு P(A∩B)=0."
        ]
      ],
      "examples": [
        [
          "A fair die is rolled. Find P(getting an even number).",
          "ஒரு சமநிலை பகடையை உருட்டும்போது இரட்டை எண் கிடைக்கும் நிகழ்தகவு காண்க.",
          "Favourable outcomes={2,4,6}; P=3/6=1/2.",
          "சாதக முடிவுகள் {2,4,6}; P=3/6=1/2."
        ]
      ],
      "practice": [
        [
          "A coin is tossed. Find P(head).",
          "ஒரு நாணயம் சுண்டப்படுகிறது. தலை கிடைக்கும் நிகழ்தகவு காண்க.",
          "1/2",
          "ஒரு சாதக முடிவு; மொத்தம் இரண்டு முடிவுகள்."
        ],
        [
          "Find the range of 4, 7, 9, 12.",
          "4,7,9,12 தரவுகளின் வீச்சு காண்க.",
          "8",
          "12−4=8."
        ],
        [
          "If P(A)=0.4 and P(B)=0.3 and they are mutually exclusive, find P(A∪B).",
          "P(A)=0.4, P(B)=0.3; அவை ஒன்றையொன்று விலக்கினால் P(A∪B) காண்க.",
          "0.7",
          "0.4+0.3=0.7."
        ]
      ]
    }
  ]
};
