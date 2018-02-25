
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
    ["What is the immediate reserve of glucose for muscle cells called?", "Glycogen", "Glucagon", "Galactose", "ATP", 0],
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
var correctIndex;
var currentQuestion;
var randomNumber;
var isQuestionAnswered = false;
var questionNumber = 0;

function updateQuestion(randomNumber) {
    currentQuestion = questions[randomNumber][0];
    answer[0] = questions[randomNumber][1];
    answer[1] = questions[randomNumber][2];
    answer[2] = questions[randomNumber][3];
    answer[3] = questions[randomNumber][4];
    correctIndex = questions[randomNumber][5];
    console.log("currentQuestion: " + currentQuestion);
    console.log("answer[0]: " + answer[0]);
    console.log("answer[1]: " + answer[1]);
    console.log("answer[2]: " + answer[2]);
    console.log("answer[3]: " + answer[3]);
    $("#question").text(currentQuestion);
    $("#answer").html('<p id="answer0">' + answer[0] + "</p>");
    $("#answer").append('<p id="answer1">' + answer[1] + "</p>");
    $("#answer").append('<p id="answer2">' + answer[2] + "</p>");
    $("#answer").append('<p id="answer3">' + answer[3] + "</p>");
}
function initializeQuestions() {
    questionsPresented = [];
    for (var i = 0; i < 5; i++) {
        randomNumber = Math.floor(Math.random() * questions.length);
        isQuestionAnswered = false;
        if (randomNumber in questionsPresented) {
            i--;
        } else {
            questionsPresented.push(randomNumber);
        }
    }
    return questionsPresented;
}

$("#start").on("click", function () {
    $("#button").empty();
    questionsPresented = initializeQuestions();
    questionNumber = 0;
    updateQuestion(questionsPresented[questionNumber]);
    correctIndex = questions[questionsPresented[questionNumber]][5];
    $("#answer0").on("click", function () {
        if (correctIndex === 0) {
            $("#answer").html("<br>Correct! The answer is " + answer[0].toLowerCase() + "!");
        } else {
            $("#answer").html("<br>Wrong! The answer is not " + answer[0].toLowerCase() + "!");
        }
        isQuestionAnswered = true;
        questionNumber++;
        console.log("question number: " + questionNumber);
    });
    $("#answer1").on("click", function () {
        if (correctIndex === 1) {
            $("#answer").html("<br>Correct! The answer is " + answer[1].toLowerCase() + "!");
        } else {
            $("#answer").html("<br>Wrong! The answer is not " + answer[1].toLowerCase() + "!");
        }
        isQuestionAnswered = true;
        questionNumber++;
        console.log("question number: " + questionNumber);
    });
    $("#answer2").on("click", function () {
        if (correctIndex === 2) {
            $("#answer").html("<br>Correct! The answer is " + answer[2].toLowerCase() + "!");
        } else {
            $("#answer").html("<br>Wrong! The answer is not " + answer[2].toLowerCase() + "!");
        }
        isQuestionAnswered = true;
        questionNumber++;
        console.log("question number: " + questionNumber);
    });
    $("#answer3").on("click", function () {
        if (correctIndex === 3) {
            $("#answer").html("<br>Correct! The answer is " + answer[3].toLowerCase() + "!");
        } else {
            $("#answer").html("<br>Wrong! The answer is not " + answer[3].toLowerCase() + "!");
        }
        isQuestionAnswered = true;
    });
    if (questionNumber === questionsPresented.length) {
        $("#question").html("<h2>You got " + correctAnswers + "correct.</h2>");
        $("#answer").html("<h2>You got " + wrongAnswers + " wrong.<br>You did not answer " + unansweredQuestions + "questions.</h2>");
        $("#question").empty();
        $("#answer").empty();
        $("#button").html('<button id="start">Start</button>');
    }
});

