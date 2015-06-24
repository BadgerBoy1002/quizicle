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

        alert: function (c, title, button, callback) {
            setText(content, c);
            this.setTitle(title);

            if (button) {
                var ok = document.createElement("input");
                ok.type = "button";
                ok.value = button;
                ok.onclick = function () {
                    callback();
                };
                var row = document.createElement("div");
                row.className = "row";
                row.appendChild(ok);
                content.appendChild(row);
            } else {
                callback();
            }
        },

        ask: function (questions, callback, title, button) {
            var that = this;
            this.reset(title);

            var form = document.createElement("form");
            for (question in questions) {
                var row = document.createElement("div");
                row.className = "row";
                
                var text = document.createElement("input");
                text.type = "text";
                text.name = question;
                row.appendChild(text);

                var label = document.createElement("label");
                label.for = question;
                setText(label, questions[question] || "" + "\u00a0");
                row.appendChild(label);

                form.appendChild(row);
            }

            var submit = document.createElement("input");
            var row = document.createElement("div");
            row.className = "row";
            submit.type = "submit";
            submit.value = button || "Submit";
            row.appendChild(submit);
            form.appendChild(row);;

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
        },

        confirm: function (title, c, callback) {
            var that = this;
            this.setTitle(title);
            setText(content, c);

            var yes = document.createElement("input"), no = document.createElement("input");
            yes.value = "Yes";
            no.value = "No";
            yes.type = no.type = "button";
            
            yes.onclick = no.onclick = function () {
                that.reset();
                callback(this == yes);
                return false;
            };

            var row = document.createElement("div");
            row.className = "row";
            row.appendChild(no);
            row.appendChild(yes);
            content.appendChild(row);
        }
    };
})();
