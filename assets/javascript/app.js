
var questions = [
    ["What is the large group of upper leg muscles that helps with knee extension?", "Quadratus lumborum", "Gastrocnemius", "Quadriceps", "Transverse abdominis", 2],
    ["What is the physiological mechanism through which fat loss happens?", "Perspiration", "Muscle contraction", "Digestion", "Respiration", 3],
    ["What is the largest muscle in the calf area?", "Gastrocnemius", "Soleus", "Iliotibial band", "Hamstring", 0],
    ["Which of the following is not a deltoid?", "Anterior", "Transverse", "Posterior", "Medial", 1],
    ["Which system is the group of glands that secretes hormones?", "Endocrine", "Cardiovascular", "Nervous", "Digestive", 0],
    ["Which muscle is not involved with elbow flexion?", "Biceps brachii", "Brachioradialis", "Biceps femoris", "Brachialis", 2],
    ["Which system do the spinal erectors belong to?", "Skeletal", "Muscular", "Nervous", "Integumentary", 1],
    ["Which muscle is responsible for keeping the arm attached to the trunk of the body?", "Pectoralis Minor", "Biceps brachii", "Pectoralis Major", "Rectus abdominis", 2],
    ["Which is not a section of the spine?", "Cervical", "Lumbar", "Thoracic", "Sagittal", 3],
    ["Which of the following is considered a macronutrient?", "Potassium", "Carbohydrate", "Calcium", "Folate", 1],
    ["Which is not a monosaccharide?", "Glucose", "Galactose", "Lactose", "Fructose", 2],
    ["What is the immediate reserve of glucose for muscle cells called?", "Glycogen", "Glucagon", "Galactose", "Maltose", 0],
    ["Which is considered the main anabolic hormone of the human body?", "Glucagon", "Insulin", "Estrogen", "Adrenaline", 1],
    ["Which is not a kind of muscle contraction?", "Isometric", "Concentric", "Eccentric", "Limbic", 3],
    ["What is not part of a carbohydrate molecule?", "Nitrogen", "Carbon", "Hydrogen", "Oxygen", 0],
    ["Where are femurs located?", "Upper arms", "Lower legs", "Torso", "Thighs", 3]
]

var unansweredQuestions = 0;
var questionsPresented = []; // ensures 6 unique questions per game
var correctAnswers = 0;
var wrongAnswers = 0;
var answer = [];
var correctIndex = [];
var currentQuestion;
var randomNumber;
var questionNumber = 0;
var answerSubmitted;
var intervalId;
var displaySeconds = "";
var timerRunning = false;

var questionTimer = {
    time: 15,
    count: function () {
        questionTimer.time--;
        if (questionTimer.time < 10) {
            displaySeconds = "0" + questionTimer.time;
        } else {
            displaySeconds = questionTimer.time;
        }
        if (questionTimer.time >= 0) {
            $("#timer").html("0:" + displaySeconds);
            console.log("displaySeconds: " + displaySeconds);
        } else {
            questionNumber++;
            $("#timer").hide();
            $("#question").html("");
            $("#answer0").html("You ran out of time.");
            $("#answer1").html("");
            $("#answer2").html("");
            $("#answer3").html("");
            unansweredQuestions++;
            questionTimer.time = 18;
            console.log("unansweredQuestions: " + unansweredQuestions);
            setTimeout(function () {
                if (questionNumber < questionsPresented.length) {
                    questionTimer.start;
                    $("#timer").show();
                    console.log(questionsPresented[questionNumber]);
                    updateQuestion(questionsPresented[questionNumber]);
                } else if (questionNumber === questionsPresented.length) {
                    displayTotalsAndRestart();
                }
            }, 3000);
        }
    },
    start: function () {
        if (timerRunning === false) {
            timerRunning = true;
            intervalId = setInterval(this.count, 1000);
            console.log(this.time);
        }
        console.log(this.time);
    },
    stop: function () {
        clearInterval(intervalId);
        $("#timer").html("");
        timerRunning = false;
    },
    reset: function () {
        this.time = 15;
    }
};

function displayTotalsAndRestart() {
    questionTimer.stop();
    $(".timer").hide();
    $("#answer0").html("You got " + correctAnswers + " correct.");
    $("#answer1").html("You got " + wrongAnswers + " wrong.");
    $("#answer2").html("You did not answer " + unansweredQuestions + " questions.");
    setTimeout(function () {
        $("#start").show();
        $("#question").html("");
        $("#answer0").html("");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
    }, 6000);
}
function updateQuestion(randomNumber) {
    questionTimer.start();
    console.log(questionTimer.time);
    currentQuestion = questions[randomNumber][0];
    answer[0] = questions[randomNumber][1];
    answer[1] = questions[randomNumber][2];
    answer[2] = questions[randomNumber][3];
    answer[3] = questions[randomNumber][4];
    // console.log("currentQuestion: " + currentQuestion);
    // console.log("answer[0]: " + answer[0]);
    // console.log("answer[1]: " + answer[1]);
    // console.log("answer[2]: " + answer[2]);
    // console.log("answer[3]: " + answer[3]);
    $("#question").text(currentQuestion);
    $("#answer0").html(answer[0]);
    $("#answer1").html(answer[1]);
    $("#answer2").html(answer[2]);
    $("#answer3").html(answer[3]);
}

function initializeQuestions() { // ensures each of 5 questions in a trivia quiz is unique
    questionsPresented = [];
    for (var i = 0; i < 6; i++) { // 6 questions per game
        randomNumber = Math.floor(Math.random() * questions.length);
        if (questionsPresented.indexOf(randomNumber) !== -1) {
            --i;
        } else {
            questionsPresented[i] = randomNumber;
        }
    }
    console.log("questionsPresented = " + questionsPresented);
    return questionsPresented;
}

function initialize() {
    unansweredQuestions = 0;
    questionNumber = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    return initializeQuestions();
}

$("#start").on("click", function () {
    $(this).hide();
    $("#timer").show();
    questionsPresented = initialize();
    for (var i = 0; i < questionsPresented.length; i++) {
        correctIndex[i] = questions[questionsPresented[i]][5];
    }
    questionTimer.reset();
    updateQuestion(questionsPresented[questionNumber]);
});

$(".answer").on("click", function () {
    if (this.id === "answer0") {
        answerSubmitted = 0;
    } else if (this.id === "answer1") {
        answerSubmitted = 1;
    } else if (this.id === "answer2") {
        answerSubmitted = 2;
    } else if (this.id === "answer3") {
        answerSubmitted = 3;
    }

    if (answerSubmitted === 0 && correctIndex[questionNumber] === 0) {
        questionTimer.stop();
        $("#question").html("");
        $("#answer0").html("Correct!");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        correctAnswers++;
    } else if (answerSubmitted === 1 && correctIndex[questionNumber] === 1) {
        questionTimer.stop();
        $("#question").html("");
        $("#answer0").html("Correct!");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        correctAnswers++;
    } else if (answerSubmitted === 2 && correctIndex[questionNumber] === 2) {
        questionTimer.stop();
        $("#question").html("");
        $("#answer0").html("Correct!");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        correctAnswers++;
    } else if (answerSubmitted === 3 && correctIndex[questionNumber] === 3) {
        questionTimer.stop();
        $("#question").html("");
        $("#answer0").html("Correct!");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        correctAnswers++;
    } else {
        questionTimer.stop();
        $("#question").html("");
        $("#answer0").html("Wrong!");
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        wrongAnswers++;
    }
    console.log(questionTimer.time);
    questionNumber++;
    if (questionNumber < questionsPresented.length) {
        setTimeout(function () {
            questionTimer.reset();
            updateQuestion(questionsPresented[questionNumber]);
        }, 3000);
    } else {
        setTimeout(function () {
            displayTotalsAndRestart();
        }, 3000);
    }
});

