$(document).ready(function() {

    // Set class for active link
    $('.navbar-default a').click(function() {
        $('.navbar-default a').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle class for days of week
    $('.days li').click(function() {
        $(this).toggleClass('active');
    });

    // Ridematch message sent confirmation
    $('#sendMessage').click(function() {
        $('.modal-body h2, .modal-body .form-group, .modal-footer').hide();
        $('.modal-body p').show();
        return;
    });

});
