const $timer = $("#timer");
const $time = $("#time");
const $highscores = $("#highscore");
const $startertemplate = $("#startertemplate");
const $start = $("#start");
const $title = $("#title");
const $questions = $("#question-screen");
const $questionbody = $("#question-card");
const $end = $("#endscreen");
const $endbody = $("#endscreen-card");
const $leaderboards = $("#leaderboards");
const $leaderheader = $("#leaderboards-header");
const $leaderbody = $("#leaderboards-body");;
const $restart = $("#again");
const $clear = $("#clear");
let time = 60;
let right = 0;
let wrong = 0;

function quizGame() {

    function initialScreen() {
        $(document).ready(function () {
            $start.on("click", startquiz);
            $highscores.on("click", viewRankings);
            $restart.on("click", reStart);
            $clear.on("click", clearScores);
            $leaderboards.hide();
        });
    };

    function startquiz() {
        $startertemplate.hide();
        $start.hide();
        $timer.show();
        $questions.show();
        showQuestions();
        $time.text(time);
        timerInterval();
    }

    function showQuestions() {
        const question = questionsAndOptions.shift();
        console.log(question.question);
        const questionTitle = $(`<div class="card-header">
                                        <h2>${question.question}</h2>
                                    </div>`)
        const choicesList = $(`<div class="card-body" id="question-choices>
                                   <ul class="list-group">
                                   </ul>
                                   </div>`);
        choicesList.on("click", (event) => { manageAnswerClick(event, question.correct_option) });
        question["user_options"].forEach(option => {
            choicesList.append(`<button type="button" class="button-choices btn btn-primary">${option}</button>
                                    <br>`);
        });
        $questionbody.prepend(questionTitle);
        $questionbody.append(choicesList);
    };

    function timerInterval() {
        if (time === 0) {
            endQuiz();
            $time.text(time);
        }
        else if (time > 0) {
            $time.text(time--);
            setTimeout(timerInterval, 1000);
        }
    };
    function manageAnswerClick(event, answer) {
        event.preventDefault();

        if ($(event.target).html() === answer) {
            // event.target.style.backgroundColor = '#164032';
            right++;
            setTimeout(function () {
                $questionbody.empty();
                if (questionsAndOptions.length != 0) {
                    showQuestions();
                }
                else {
                    endQuiz();
                    $time.text(time);
                }
            }, 500);
        }
        else {
            event.target.style.borderColor = '#e53935';
            event.target.style.backgroundColor = '#661917';
            wrong++;
            setTimeout(function () {
                time -= 15;
                $questionbody.empty();
                if (questionsAndOptions.length != 0) {
                    showQuestions();
                } else {
                    endQuiz();
                    $time.text(time);
                }
                
            }, 500);
        }
    };
    function endQuiz() {
        $leaderboards.show();
        showEndScore();
        const $submitBtn = $("#end-screen-submit");
        $submitBtn.on("click", manageInputSubmit);
    };
    function showEndScore() {
        $questions.hide();
        $timer.hide();
        $end.show();

        var endScoreCard = $endbody.html(
            `<div class="card-header" id="end-screen-header">
                    <h2 id="end-screen-title">Game Over!</h2>
                 </div>
                 <div class="card-body" id="end-screen-body">
                   <h3 id="final-score">Final Score: ${time + ((right / "4") * 100)}</h3>
                   <p>Correct Answers: ${right}</p>
                   <p>Wrong Answers: ${wrong}</p>
                   <p>Overall Percent: ${((right / "4") * 100).toFixed(0)}%</p>  
                   Enter Username/Initials:
                   <div class="input-group mb-3">
                     <input type="text" class="form-control player" id="end-screen-input" placeholder="Username/Initials" aria-label="Recipient's username" aria-describedby="basic-addon2">
                     <div class="input-group-append">
                       <button class="btn btn-primary" id="end-screen-submit" type="button">Submit</button>
                     </div>
                   </div>
                 </div>`);

        $endbody.prepend(endScoreCard);
    }
    function manageInputSubmit(event) {
        event.preventDefault();

        $end.hide();
        $highscores.show();
        $leaderbody.show();

        const playerName = $(".player").val();
        const player = {
            name: playerName,
            score: time
        }

        localStorageSave(player);
        showRankings(player);
    };
    function showRankings(currentPlayer = {}) {
        const playersArr = JSON.parse(localStorage.getItem("playersArr"));

        const playerList = $('<ul class="list-group list-group-flush"></ul>');

        if (playersArr !== null) {
            sortArray(playersArr);
            playersArr.forEach((player, index) => {
                if (currentPlayer.name === player.name && currentPlayer !== {}) {
                    playerList.append(`<li class="list-group-item font-weight-bold mt-1">${index + 1}. ${player.name} <span class="player-score">${player.score}</span></li>`);
                }
                else {
                    playerList.append(`<li class="list-group-item mt-1">${index + 1}. ${player.name} <span class="player-score">${player.score}</span></li>`);
                }
            });
        }
        $leaderbody.prepend(playerList);
    };

    function viewRankings() {
        $title.hide();
        $startertemplate.hide();
        $questions.hide()
        $end.hide();
        $timer.hide();
        $leaderbody.empty();
        $leaderboards.show();
        showRankings();
    };
    function sortArray(arr) {
        arr.sort((a, b) => {
            const scoreA = a.score;
            const scoreB = b.score;
            if (scoreA < scoreB) {
                return 1
            }
            else if (scoreA > scoreB) {
                return -1
            }
            else {
                return 0
            }
        });
    };
    function localStorageSave(player) {
        if (localStorage.getItem("playersArr") === null) {
            const playersArr = [];
            playersArr.push(player);
            localStorage.setItem("playersArr", JSON.stringify(playersArr));
        }
        else {
            const playersArr = JSON.parse(localStorage.getItem("playersArr"));
            playersArr.push(player);
            localStorage.setItem("playersArr", JSON.stringify(playersArr));
        }
    };
    function reStart() {
        window.location.href = "../minicodingquiz/";
    };
    function clearScores() {
        localStorage.clear();
        $leaderbody.empty();
    }
    initialScreen();
};

quizGame();
