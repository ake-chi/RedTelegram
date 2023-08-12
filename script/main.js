
//slide menu
$('.menu-btn').on('click', function () {      
    $('.slide-menu').addClass("open"); 
    $('body').addClass("disable");
  });
  
  $('.close-btn').on('click', function () {      
    $('.slide-menu').removeClass("open"); 
    $('body').removeClass("disable");
  });


 //AOS

AOS.init({ disable: 'mobile' });


//letter animation

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml10 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml10 .letter',
//     rotateY: [-90, 0],
//     duration: 2000,
//     easing: "easeOutExpo",
//     delay: (el, i) => 60 * i
//   })
//   .add({
//     delay: 2000
//   });



  //subscribe modal

function checkForm() {

    var email = document.getElementById('subsEmail');
    var filterE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if ( !filterE.test(email.value)) {         
        alert('Please provide your valid email address');                   
        $("input#subsName").focus();
        return false;                  
    }
    else {         
        $("#subsModal").modal('show');  
        $("input#subsEmail").val("");        
        return false;    
    }
  }
  
