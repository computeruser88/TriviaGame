var questions = [
    ["What is the large group of leg muscles that helps with knee extension?", "Quadratus lumborum", "Gastrocnemius", "Quadriceps", "Transverse abdominis", 2],
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
var questionsPresented = []; // ensures 5 unique questions per game
var correctAnswers = 0;
var wrongAnswers = 0;
var answer = [];
var correctIndex = [];
var currentQuestion;
var randomNumber;
var isQuestionAnswered = false;
var questionNumber = 0;
var answerSubmitted;
var counter;

var timer = {
    time: 20,
    start: function () {
        counter = setInterval(timer.count, 1000);
    },
    stop: function () {
        clearInterval(counter);
        $("#timer").html("");
    },
    reset: function () {
        timer.time = 20;
    },
    count: function () {
        timer.time--;
        console.log("timer.time: " + timer.time);
        if (timer.time < 6) {
            $("#timer").css("color", "#ff0000");
        } else {
            $("#timer").css("color", "#ffff00");
        }
        if (timer.time >= 0) {
            $("#timer").html(timer.time + " seconds left");
        } else {
            questionNumber++;
            timer.reset;
            alert("Sorry, you ran out of time.");
            unansweredQuestions++;
            if (questionNumber === questionsPresented.length) {
                displayTotals();
                initialize();
            } else if (questionNumber < questionsPresented.length) {
                updateQuestion(questionsPresented[questionNumber]);
            }
        }
    },
};
function displayTotals() {
    timer.stop;
    alert("You got " + correctAnswers + " correct.");
    alert("You got " + wrongAnswers + " wrong.");
    alert("You did not answer " + unansweredQuestions + " questions.");
    $("#start").show();
    $("#question").html("");
    $("#answer0").html("");
    $("#answer1").html("");
    $("#answer2").html("");
    $("#answer3").html("");
}
function updateQuestion(randomNumber) {
    currentQuestion = questions[randomNumber][0];
    answer[0] = questions[randomNumber][1];
    answer[1] = questions[randomNumber][2];
    answer[2] = questions[randomNumber][3];
    answer[3] = questions[randomNumber][4];
    console.log("currentQuestion: " + currentQuestion);
    console.log("answer[0]: " + answer[0]);
    console.log("answer[1]: " + answer[1]);
    console.log("answer[2]: " + answer[2]);
    console.log("answer[3]: " + answer[3]);
    $("#question").text(currentQuestion);
    $("#answer0").html(answer[0]);
    $("#answer1").html(answer[1]);
    $("#answer2").html(answer[2]);
    $("#answer3").html(answer[3]);
}

function initializeQuestions() {
    questionsPresented = [];
    for (var i = 0; i < 5; i++) {
        randomNumber = Math.floor(Math.random() * questions.length);
        isQuestionAnswered = false;
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
    questionNumber = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    $("#start").on("click", function () {
        $(this).hide();
        questionNumber = 0;
        questionsPresented = initializeQuestions();
        for (var i = 0; i < questionsPresented.length; i++) {
            correctIndex[i] = questions[questionsPresented[i]][5];
        }
        updateQuestion(questionsPresented[questionNumber]);
        timer.reset;
        timer.start;
    });
}

initialize();

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
        alert("Correct!");
        correctAnswers++;
    } else if (answerSubmitted === 1 && correctIndex[questionNumber] === 1) {
        alert("Correct!");
        correctAnswers++;
    } else if (answerSubmitted === 2 && correctIndex[questionNumber] === 2) {
        alert("Correct!");
        correctAnswers++;
    } else if (answerSubmitted === 3 && correctIndex[questionNumber] === 3) {
        alert("Correct!");
        correctAnswers++;
    } else {
        alert("Wrong!");
        wrongAnswers++;
    }
    $("#question").html("");
    $("#answer0").html("");
    $("#answer1").html("");
    $("#answer2").html("");
    $("#answer3").html("");
    questionNumber++;
    if (questionNumber < questionsPresented.length) {
        updateQuestion(questionsPresented[questionNumber]);
        timer.reset;
    } else {
        displayTotals();
        initialize();
    }
});


