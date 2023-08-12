$('.banner-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000, 
    easing: 'easeOutElastic',
    // centerMode: true,    
    // centerPadding: '60px',
    variableWidth: true,
    customPaging : function(slider, i) {
        var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
        return '<a class="dot">'+title+'</a>';
                }, 
    responsive:[
        {
            breakpoint: 767,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        },
    ]
  });

  $('.banner-slider-m').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    easing: 'easeOutElastic',
    // centerMode: true,    
    // centerPadding: '60px',
    variableWidth: true,
    customPaging : function(slider, i) {
        var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
        return '<a class="dot">'+title+'</a>';
                }, 
    responsive:[
        {
            breakpoint: 767,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        },
    ]
  });



  $('.reviews').slick({    
    infinite: true,    
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,   
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        },
        {
            breakpoint: 425,
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        },
        {
            breakpoint: 375,
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        },
        {
            breakpoint: 320,
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    ]
  
  });

  
$('.coll-slider').slick({
  infinite: true,    
  autoplay: true,
  speed:2000,    
  easing: 'easeOutElastic',
  arrows: true,  
  slidesToShow: 3,
  slidesToScroll: 1,
  // fade: true,    
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow:2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1              
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              autoplay: true,
          }
      },
      {
          breakpoint: 425,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 375,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 320,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]

});

