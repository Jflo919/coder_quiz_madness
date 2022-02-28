//get elements for quiz app

var beginBtn = document.querySelector(".begin-button button");
var quiz = document.querySelector(".quiz");
var answerBtn = document.querySelector(".choice");

// array and passing the quiz questions, answers/options, etc...
var questions = [
    {
        number: 1,
        question: "Which of the following is a correct way to link a stylesheet to an HTML doucment?",
        answer: "&lt;link rel='stylesheet' href='assets/css/style.css' /&gt;",
        options: [
            "&lt;link rel='stylesheet' href='assets/css/style.css' /&gt;",
            "link rel='stylesheet' href='assets/css/style.css",
            "&lt;link mel=somethingoranother hef='assets/css/style.css' /&gt;",
            "&lt;link rel='stylesheet' href=assets/css/style/&gt;"
        ]
    },
    {
        number: 2,
        question: "What is the purpose of Git?",
        answer: "It is used to track changes in files and to facilitate collaboration among coders working on code.",
        options: [
            "It helps you go on and git?",
            "It helps you style your HTML",
            "It is a web-based calendar application",
            "It is used to track changes in files and to facilitate collaboration among coders working on code."
        ]
    },
    {
        number: 3,
        question: "What is JQuery?",
        answer: "It is a JavaScript library that helps simplify HTML DOM manipulation",
        options: [
            "A CDN that helps you with layout and styling, created by team Twitter",
            "It is a JavaScript library that helps simplify HTML DOM manipulation",
            "It's a type of HTTP parameter?",
            "HEY PAL, what's with all these questions? I'm no web developer, I'm here by some dreadful mistake!"

        ]
    },    
    {
        number: 4,
        question: "What is a psuedoclass in CSS?",
        answer: "A keyword added to a selector that specifies a special state of the selected element",
        options: [
            "A keyword added to a selector that lets you style a specific part of the selected element",
            "It's a fake class",
            "A keyword added to a selector that specifies a special state of the selected element",
            "I don't know"
        ]

    },
    {
        number: 5,
        question: "What is JavaScript used for?",
        answer: "It is a programming language that is used to dictate web page behavior, among other things, and is the primary client-side scripting language",
        options: [
            "It is a programming language that is used to dictate web page behavior, among other things, and is the primary client-side scripting language",
            "I don't know, is it the same thing as Java?",
            "It is the basic markup language of the web",
            "It is used to style HTML elements"
        ]
    }
];

// conditional for if begin quiz button is selected

beginBtn.onclick = ()=>{
    // Displays hiddent quiz on click
    quiz.classList.add("active");
    displayQuestions(3);
}

var questionNumber = 0;

// when an answer option is clicked on
var next = quiz.querySelector(".answer");

// obtaining questions and options from the above array?

function displayQuestions(index) {
    var questionText = document.querySelector(".q-text");
    var answerList = document.querySelector(".answer-list");
    var questionQuestion =  "<span>" + questions[index].question + "</span>";
    var answerOptions = '<div class="answer">' + questions[index].options[0] +'<span></span></div>' 
        + '<div class="answer">' + questions[index].options[1] +'<span></span></div>' 
        + '<div class="answer">' + questions[index].options[2] +'<span></span></div>' 
        + '<div class="answer">' + questions[index].options[3] +'<span></span></div>';
    
    questionText.innerHTML = questionQuestion;
    answerList.innerHTML = answerOptions;
}