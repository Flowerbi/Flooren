$(function(){

  new WOW().init();   

  $('.header__btn-menu').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active')
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() < $('section[data-anchor="header"]').offset().top -150) {
       $('.header__menu-item-link').addClass('header__menu-item-link--active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="header"]').offset().top -150) {
      $('.header__menu-item-link').removeClass('header__menu-item-link--active');
      $('.header__menu-item-link:eq(0)').addClass('header__menu-item-link--active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top -150) {
      $('.header__menu-item-link').removeClass('header__menu-item-link--active');
      $('.header__menu-item-link:eq(1)').addClass('header__menu-item-link--active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="menu"]').offset().top -250) {
      $('.header__menu-item-link').removeClass('header__menu-item-link--active');
      $('.header__menu-item-link:eq(2)').addClass('header__menu-item-link--active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="feature"]').offset().top -250) {
      $('.header__menu-item-link').removeClass('header__menu-item-link--active');
      $('.header__menu-item-link:eq(3)').addClass('header__menu-item-link--active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top -250) {
      $('.header__menu-item-link').removeClass('header__menu-item-link--active');
      $('.header__menu-item-link:eq(4)').addClass('header__menu-item-link--active');
    }

  });

  window.onscroll = function showHeader(){
    let header = $('.header');
    if(window.pageYOffset > 50){
      header.css('box-shadow', '0 0 20px 0 #00000012');
    } else{
      header.css('box-shadow', '0 0 0 0 transparent');
    }
  };

  $('a.header__menu-item-link').on('click', function (event) {
    var $anchor = $(this);
    $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr('href')).offset().top -150,
      },
      {
        duration: 1000,
        specialEasing: {
          width: 'Linear',
          height: 'easeInOutCubic',
        },
      }
    )
    event.preventDefault();
  });

  $('.testimonial__slider-list').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
  });

  $(".star").rateYo({
    rating: 1.5,
    starWidth: "18px",
    readOnly: true,
    ratedFill: "#DC780B",
    normalFill: "#EDEDED"
  });

  $('.header__menu-item-link').on('click', function () {
    $('.header__menu-item-link').removeClass('header__menu-item-link--active');
    $(this).toggleClass('header__menu-item-link--active');
  });
});