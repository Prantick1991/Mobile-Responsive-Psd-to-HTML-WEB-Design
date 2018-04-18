$(function(){
    //counter js
     $('.counter').counterUp({
                delay: 10,
                time: 10000
            });
    
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Preloader js    
    $(window).on('load', function(){
        $('.preloader').delay(1500).fadeOut(500);

    })
    //veno box gly js
    $('.venobox').venobox(); 
    
    // service slider js
    $('.ser_slider').slick({
       slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
        arrows:false,
        dots:false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    // service slider js
    $('.team_slider').slick({
       slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
        arrows:false,
        dots:false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});