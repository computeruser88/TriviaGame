
var questions = [
    ["What is the large group of leg muscles that helps with knee extension?", "Quadratus lumborum", "Gastrocnemius", "Quadriceps", "Transverse abdominis", "C"],
    ["What is the physiological mechanism through which fat loss happens?", "Perspiration", "Muscle contraction", "Digestion", "Respiration", "D"],
    ["What is the largest muscle in the calf area?", "Gastrocnemius", "Soleus", "Iliotibial band", "Hamstring", "A"],
    ["Which of the following is not a deltoid?", "Anterior", "Transverse", "Posterior", "Medial", "B"],
    ["Which system is the group of glands that secretes hormones?", "Endocrine", "Cardiovascular", "Nervous", "Digestive", "A"],
    ["Which muscle is not involved with elbow flexion?", "Biceps brachii", "Brachioradialis", "Biceps femoris", "Brachialis", "C"],
    ["Which system do the spinal erectors belong to?", "Skeletal", "Muscular", "Nervous", "Integumentary", "B"],
    ["Which muscle is responsible for keeping the arm attached to the trunk of the body?", "Pectoralis Minor", "Biceps brachii", "Pectoralis Major", "Rectus abdominis", "C"],
    ["Which is not a section of the spine?", "Cervical", "Lumbar", "Thoracic", "Sagittal", "D"],
    ["Which of the following is considered a macronutrient?", "Potassium", "Carbohydrate", "Calcium", "Folate", "B"],
    ["Which is not a monosaccharide?", "Glucose", "Galactose", "Lactose", "Fructose", "C"],
    ["What is the immediate reserve of glucose for muscle cells called?", "Glycogen", "Glucagon", "Galactose", "ATP", "A"],
    ["Which is considered the main anabolic hormone of the human body?", "Glucagon", "Insulin", "Estrogen", "Adrenaline", "B"],
    ["Which is not a kind of muscle contraction?", "Isometric", "Concentric", "Eccentric", "Limbic", "D"],
    ["What is not part of a carbohydrate molecule?", "Nitrogen", "Carbon", "Hydrogen", "Oxygen", "A"],
    ["Where are femurs located?", "Upper arms", "Lower legs", "Torso", "Thighs", "D"]
]


$("#start").on("click", function () {
    $("#button").empty();


    var unansweredQuestions = 0;
    var questionsPresented = []; // ensures 5 unique questions per game
    var correctAnswers = 0;
    var wrongAnswers = 0;
    for (var i = 0; i < 5; i++) {
        var randomNumber = Math.floor(Math.random() * questions.length);
        var isQuestionAnswered = false;
        if (randomNumber in questionsPresented) {
            i--;
        } else {
            questionsPresented.push(randomNumber);
        var currentQuestion = questions[randomNumber][0];
        var answerA = questions[randomNumber][1];
        var answerB = questions[randomNumber][2];
        var answerC = questions[randomNumber][3];
        var answerD = questions[randomNumber][4];
        var correctLetter = questions[randomNumber][5];
        $("#question").text(currentQuestion);
        $("#answer").html('<p id="A">' + answerA + "</p>");
        $("#answer").append('<p id="B">' + answerB + "</p>");
        $("#answer").append('<p id="C">' + answerC + "</p>");
        $("#answer").append('<p id="D">' + answerD + "</p>");
        $("#A").on("click", function () {
            isQuestionAnswered = true;
            if (correctLetter === "A") {
                $("#answer").html("Correct! The answer is " + answerA + "!");
                correctAnswers++;
            } else {
                $("#answer").html("Wrong! The answer is not " + answerA + "!");
                wrongAnswers++;
            }
        });
        $("#B").on("click", function () {
            isQuestionAnswered = true;
            if (correctLetter === "B") {
                $("#answer").html("Correct! The answer is " + answerB + "!");
                correctAnswers++;
            } else {
                $("#answer").html("Wrong! The answer is not " + answerB + "!");
                wrongAnswers++;
            }
        });
        $("#C").on("click", function () {
            isQuestionAnswered = true;
            if (correctLetter === "C") {
                $("#answer").html("Correct! The answer is " + answerC + "!");
                correctAnswers++;
            } else {
                $("#answer").html("Wrong! The answer is not " + answerC + "!");
                wrongAnswers++;
            }
        });
        $("#D").on("click", function () {
            isQuestionAnswered = true;
            if (correctLetter === "D") {
                $("#answer").html("Correct! The answer is " + answerD + "!");
                correctAnswers++;
            } else {
                $("#answer").html("Wrong! The answer is not " + answerD + "!");
                wrongAnswers++;
            }
        });
        }
    }
    $("#question").html("<h2>You got " + correctAnswers + "correct.</h2>");
    $("#answer").html("<h2>You got " + wrongAnswers + " wrong.<br>You did not answer " + unansweredQuestions + "questions.</h2>");
    $("#question").empty();
    $("#answer").empty();
    $("#button").html('<button id="start">Start</button>');
});