const spans = document.querySelectorAll("span");
const colourBtn = document.querySelector("button");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function randomRGB() {
return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function luminance(htmlElement){
    const colour = htmlElement.style.backgroundColor;
    const rgbValues = colour.match(/\d+/g);

    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);

    r = r/255;
    g = g/255;
    b = b/255;
    
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luminance > 0.5){
        htmlElement.style.color = "#213555"; 
    }
    else{
        htmlElement.style.color = "#F8FAFC";
    }

}

function changeColour(){
    for (let span of spans){
        span.style.color = randomRGB();
    }
    colourBtn.style.backgroundColor = randomRGB();
    luminance(colourBtn);
}

colourBtn.addEventListener('click', changeColour);

