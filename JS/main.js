let slider = document.querySelector(".cafe__slider_list");
let sliderItems = document.querySelectorAll(".cafe__slider_item");

function nextSlide() {
  let firstSlide = sliderItems[0];
  slider.appendChild(firstSlide);
  updateSlider();
}

function prevSlide() {
  let lastSlide = sliderItems[sliderItems.length - 1];
  slider.prepend(lastSlide);
  updateSlider();
}

function updateSlider() {
  sliderItems = document.querySelectorAll(".cafe__slider_item");
  sliderItems[0].classList.add("big");
  for (let i = 1; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove("big");
  }
}

updateSlider();

