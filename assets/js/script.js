//Carousel
const myCarouselElement = document.querySelector("#carouselExample");
const carousel = new bootstrap.Carousel(myCarouselElement,{
  interval: 2000,
  touch: true,
  keyboard: false,  
  ride: true,
});

//Smooth Scroll
$(document).ready(function(){
  $("a").on('click', function(event){
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },1000,function(){
        window.location.hash = hash;
      });
    }
  });
});

