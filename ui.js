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

        alert: function (c, title) {
            setText(content, c);
            this.setTitle(title);
        }
    };
})();
