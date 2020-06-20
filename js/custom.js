"use strict";

//login-registration slide

$('.login-reg-slide').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 1000,
  autoplaySpeed: 3000,
}); 

// side nav 
function openNav() {
  $(".side-nav").toggleClass("show");
  $("body").toggleClass("overlay");
}

function closeNav() {
  $(".side-nav").removeClass("show");
  $("body").removeClass("overlay");
}

//side nave collapsed icon rotate
$(".static-btn").click(function(){
  $(".static-btn i").toggleClass("rotate");
});