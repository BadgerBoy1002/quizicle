ui.ask({
    "question": "Enter a question!",
    "answer": "Enter an answer!"
}, function (response) {
    var question = response.question, answer = response.answer;
    ui.ask({
        "answer": question
    }, function (response) {
        ui.reset(response.answer == answer ? "Correct!" : "WRONG!");
    }, "The test has begun!");
}, "WELCOME to Quizicle!");
