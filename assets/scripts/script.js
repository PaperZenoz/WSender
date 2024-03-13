document.addEventListener('DOMContentLoaded', function () {
    function open_modal() {
        var element = document.querySelector('.js--open-modal'),
            modal = document.querySelector('.modal')
        element.onclick = function (event) {
            event.preventDefault();
            modal.classList.add('open')
        };
    }
    function close_modal() {
        var elements = document.querySelectorAll('.js--close-modal'),
            modal = document.querySelector('.modal')
        for (let elem of elements) {
            elem.onclick = function () {
                modal.classList.remove('open')
            };
        };
    }
    open_modal()
    close_modal()
});