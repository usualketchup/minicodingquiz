// var highscores = document.querySelector("#highscore");
// var timer = document.querySelector("#timer");
// var currentquestion = document.querySelector("#question");
// var generalchoice = document.querySelectorAll(".choice");
// var start = document.getElementById("start");
// var choice1 = document.getElementById(1);
// var choice2 = document.getElementById(2);
// var choice3 = document.getElementById(3);
// var choice4 = document.getElementById(4);

var questionsAndOptions = [
  {
    question: "What programming language does not make up the front-end aspect of a typical website?",
    user_options: ["Javascript", "Python", "React", "HTML"],
    correct_option: "Python"
  },
  {
    question: "Which of the following data types is not commonly used?",
    user_options: ["Booleans", "Strings", "Variables", "Alerts"],
    correct_option: "Alerts"
  },
  {
    question: "What does CSS stand for?",
    user_options: ["Constantly Standing Stools", "Changing Stealth Sneakers", "Cascading Style Sheets", "Changing Style Sheets"],
    correct_option: "Cascading Style Sheets"
  },
  {
    question: "In Javscript, what syntax is not within a for loop?",
    user_options: ["Parenthesis", "Curly brackets", "Exclamation marks", "Semicolons"],
    correct_option: "Exclamation marks"
  }
];
// var totalseconds = 60;
// var elapsedseconds = 0;
// var score = totalseconds - elapsedseconds;

// var isRight = false;

// highscores.innerHTML = "View Highscores";
// timer.innerHTML = "Timer: " + totalseconds;
// timer.setAttribute("style", "text-align:right");
// let counter = 0;
// start.addEventListener("click", function () {
//   start.style.visibility = "hidden"
//   choice1.setAttribute("class", "btn btn-secondary choice");
//   choice2.setAttribute("class", "btn btn-secondary choice");
//   choice3.setAttribute("class", "btn btn-secondary choice");
//   choice4.setAttribute("class", "btn btn-secondary choice");
//   currentquestion.innerHTML = questionsAndOptions[0].question;
//   currentquestion.setAttribute("class", "text-center")
//   choice1.innerHTML = questionsAndOptions[0].user_options[0]
//   choice2.innerHTML = questionsAndOptions[0].user_options[1]
//   choice3.innerHTML = questionsAndOptions[0].user_options[2]
//   choice4.innerHTML = questionsAndOptions[0].user_options[3]
//   displayQuestionAndOptions(questionsAndOptions);
//   timercountdown();
// })

// function displayQuestionAndOptions(questionList) {
//   while (counter <= 4) {
//     var choice_options = document.querySelectorAll(".choice");
//     choice_options[counter].addEventListener("click", function () {
//       counter++
//       currentquestion.innerHTML = questionList[counter].question;

//       choice1.innerHTML = questionList[counter].user_options[0]
//       choice2.innerHTML = questionList[counter].user_options[1]
//       choice3.innerHTML = questionList[counter].user_options[2]
//       choice4.innerHTML = questionList[counter].user_options[3]
//       if (questionList[counter].user_options[this] === questionList[counter].correct_option) {
//         score += 25;
//       } else {
//         score -= 25;
//       }
//     })
//   }
   
// }

// function CorrectAnswers() {
//   if (questionsAndOptions.correct_option === user_options) {
//     isRight = true;
//   }
// }


// function timercountdown() {
//   var timerInterval = setInterval(function () {
//     totalseconds--;
//     elapsedseconds++;
//     timer.innerHTML = "Timer: " + totalseconds;

//     if (totalseconds === 0) {
//       clearInterval(timerInterval);
//       alert("Time up! Your score is " + score)
//     }

//   }, 1000);
//   return setInterval();
// }