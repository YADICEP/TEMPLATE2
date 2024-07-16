//Carousel
const myCarouselElement = document.querySelector("#carouselExample");
const carousel = new bootstrap.Carousel(myCarouselElement,{
  interval: 2000,
  touch: true,
  keyboard: false,  
  ride: true,
});

