let progressSpans = document.querySelectorAll(".progress-bar span");
let section = document.querySelector(".skills-bar");

window.onload = (event) => {
    if (window.onload) {
        progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
}


$(function () {

    'use strict';

   var    nameError = true;
   var    emailError = true;
   var    bodyError = true;

    function checkErrors() {
      if (nameError === true || emailError === true || bodyError === true) {

        console.log ("Error");

      } else {
      console.log("Done");
    }

  }


      $('.mail-name').blur(function () {

        if ($(this).val().length <= 3) {

            $(".mail-email").css("margin-top" , "-10px");

            $(this).parent().find(".validate-field").fadeIn(200);

            nameError = true;

        } else {

            $(".mail-email").css("margin-top" , "10px");

            $(this).parent().find(".validate-field").fadeOut(200);

            nameError = false;

        }
        });


      $('.mail-email').blur(function () {

        if ($(this).val() === "" ) {

            $(this).css("margin-top" , "0px");

            $(".mail-body").css("margin-top" , "0px");

            $(this).parent().find(".validate-field").fadeIn(200);

            emailError = true;

        } else {

            $(this).parent().find(".validate-field").fadeOut(200);

            $(this).css("margin-top" , "10px");

            $(".mail-body").css("margin-top" , "10px");

            emailError = false;

        }
        });


      $('.mail-body').blur(function () {

        if ($(this).val().length < 10 ) {

            $(this).parent().find(".validate-field").fadeIn(200);

            $(".mail-send").css("margin-top" , "8px");

            bodyError = true;
                    
        } else {

            $(this).parent().find(".validate-field").fadeOut(200);

            $(".mail-send").css("margin-top" , "15px");

            bodyError = false;

        }
        });


  $(".contact-form").submit(function (e) {

    if (nameError === true || emailError === true || bodyError === true) {

    e.preventDefault();

    $(".mail-name, .mail-email, .mail-body").blur();

    } else {


    }
  
  });


});