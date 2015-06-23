(function () {
    var ui = document.getElementById("ui");
    var title = ui.getElementsByClassName("title")[0];
    var content = ui.getElementsByClassName("content")[0];

    function setText(el, value) {
        if ("textContent" in el) {
            el.textContent = value;
        } else {
            el.innerText = value;
        }
    }

    window.ui = {
        setTitle: function (t) {
            setText(title, t);
        },

        reset: function (title) {
            this.setTitle(title);
            while (content.hasChildNodes()) {
                content.removeChild(content.lastChild);
            }
        },

        alert: function (c, title) {
            setText(content, c);
            this.setTitle(title);
        },

        ask: function (questions, callback, title, button) {
            var that = this;
            this.reset(title);

            var form = document.createElement("form");
            for (question in questions) {
                var text = document.createElement("input");
                text.type = "text";
                text.name = question;
                var label = document.createElement("label");
                label.for = question;
                setText(label, questions[question] + " ");
                form.appendChild(label);
                form.appendChild(text);
                form.appendChild(document.createElement("br"));
            }

            var submit = document.createElement("input");
            submit.type = "submit";
            submit.value = button || "Submit";
            form.appendChild(submit);
            form.onsubmit = function () {
                var inputs = form.getElementsByTagName("input"), answers = {};
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.type != "text") continue;
                    answers[input.name] = input.value;
                }

                that.reset();
                callback(answers);
                return false;
            };
            content.appendChild(form);
        }
    };
})();
