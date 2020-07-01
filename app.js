$(document).ready(function() {
    $('#foo').submit(function() {
        window.open("thank.html");
        this.target = 'formpopup';
    });
});