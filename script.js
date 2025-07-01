$(document).ready(function() {
    $('.trigger').hover(
        function() {
            $(this).siblings('.target').css('opacity', 1);
        },
        function() {
            $(this).siblings('.target').css('opacity', 0);
        }
    );
});