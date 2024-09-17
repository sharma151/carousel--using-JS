const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goprev = () => {
  counter--;
  slideImage();
  indicators();
};
const gonext = () => {
  counter++;
  slideImage();
  indicators();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function indicators() {
  dots.forEach((dot) => {
    dot.className = dot.className.replace("active", "");
  });
  dots[counter].className += "active";
}
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    counter = index;
    slideImage();
    indicators();
  });
});
