$(document).ready(function() {

    // Set class for active link
    $('.navbar-default a').click(function() {
        $('.navbar-default a').removeClass('active');
        console.log("done!");
        $(this).addClass('active');
    });

});
