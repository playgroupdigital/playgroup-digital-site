$(document).ready(function() {

    //Hide stuff
       $('.contact').hide();



    // Contact expando/collapso

    $('.contact-toggle').click(function() {
        $('.contact').slideToggle(500);
        return false;
    });



    // Contact close
    $('a.contact-close').click(function() {
        $('.contact').slideUp(500);
        return false;
    });




  $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
  });



});
