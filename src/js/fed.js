$(document).ready(function() {

    // Set class for active link
    $('.navbar-default a').click(function() {
        $('.navbar-default a').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle clas for days of week
    $('.days li').click(function() {
        $(this).toggleClass('active');
    });

});
