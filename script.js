const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots");
var counter = 0;

//postions the slide to its 100% of the width
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

//previous-btn
const goprev = () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = slides.length - 1;
  }
  slideImage();
  indicators();
};

//forward-btn
const gonext = () => {
  if (counter < slides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slideImage();
  indicators();
};

//function to slide Image
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    slide.style.transition = "transform 1s ease";
  });
};

//function to indicators
function indicators() {
  dots.forEach((dot) => {
    dot.className = dot.className.replace("active", "");
  });
  dots[counter].className += "active";
}

// function to redirect the image on click of indicators.
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    counter = index;
    slideImage();
    indicators();
  });
});
