const spans = document.querySelectorAll("span");
const colorBtn = document.querySelector("button");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function randomRGB() {
return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function changeColor(){
    for (let span of spans){
        span.style.color = randomRGB();
    }
    colorBtn.style.backgroundColor = randomRGB();
}

colorBtn.addEventListener('click', changeColor);

