"use strict";



// tol tip activation
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//======== scroll off when side menu open


//========= end of scroll off when side menu open




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


//live-streaming-slide of home
$('.streaming-slide').slick({
  dots: false,
  arrows: true,
  prevArrow: '<span class="prev-arrow"><i class="far fa-chevron-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="far fa-chevron-right"></i></span>',
  autoplay: false,
  slidesToShow: 10,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
}); 


//suggestion-slide of home
$('.suggestion-slide').slick({
  dots: false,
  arrows: true,
  prevArrow: '<span class="prev-arrow"><i class="far fa-chevron-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="far fa-chevron-right"></i></span>',
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
}); 



// grid view div 
function gridView(){
  $(".grid-list-col").removeClass("col-md-12");
  $(".grid-list-col").addClass("col-md-6");
  $(".grid-btn").addClass("active");
  $(".list-btn").removeClass("active");
  return false;
}

// list view div 
function listView(){
  $(".grid-list-col").removeClass("col-md-6");
  $(".grid-list-col").addClass("col-md-12");
  $(".list-btn").addClass("active");
  $(".grid-btn").removeClass("active");
  return false;
}

// venobox pop up image
$('.venobox').venobox({
  infinigall: false,
  spinner: "rotating-plane",
  spinColor: "#bd1b4a",
  arrowsColor: "white"

}); 
