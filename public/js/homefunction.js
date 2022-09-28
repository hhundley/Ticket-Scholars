var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

//put images into array
var images = [];


carousel.style.backgroundImage = //image goes here;

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }
    currentImage = images[index];

    carousel.style.backgroundImage = currentImage;
}

carousel.addEventListener("click", function () {
   //route to info page 
  });

  next.addEventListener("click", function (event) {
    event.stopPropagation();
  
    navigate(1);
  });

  prev.addEventListener("click", function (event) {
    event.stopPropagation();
  
    navigate(-1);
  });

  navigate(0);