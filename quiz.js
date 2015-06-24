ui.ask({
    "question": "Enter a question!",
    "answer": "Enter an answer!"
}, function (response) {
    var question = response.question, answer = response.answer;
    ui.ask({
        "answer": question
    }, function (response) {
        ui.confirm(response.answer == answer ? "Correct!" : "WRONG!", "Would you like to give feedback?", function (give) {
            if (give) {
                ui.ask([null], function (response) {
                    var feedback = response[0];
                    if (isNaN(feedback) || feedback < 0 || feedback > 10) {
                        ui.alert("You what mate?");
                    } else if (feedback <= 6) {
                        ui.ask([null], function (response) {
                            ui.alert("Your feedback is much appreciated!", "", "OK", function () {
                                ui.alert("Thank you for using this program!");
                            });
                        }, "Why so...");
                    } else {
                        ui.alert("Thank you for using this program!");
                    }
                }, "How would you rate this out of 10?");
            } else {
                ui.alert("...well it's your loss");
            }
        });
    }, "The test has begun!");
}, "WELCOME to Quizicle!");

