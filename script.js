const colourBtn = document.querySelector("button");
const content = document.querySelector(".copy");
const paragraphs = document.querySelectorAll(".text");
let index = 0;

function changeColour() {

    for(let para of paragraphs){
        let text = para.textContent;
        let words = text.split(/\s+/).map(word => `<span>${word}</span>`).join(" ");
        para.innerHTML = words;
    }

    const rawSpans = [...content.querySelectorAll('span')];

    const spans = rawSpans.filter(function(span) { return span.textContent.length >= 1;});

    if (index >= spans.length){
        index = 0;
    }

    const currentColor = randomRGB();
    spans[index].style.color = currentColor;
    colourBtn.style.boxShadow = `5px 5px ${currentColor}`
    

    index++;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

colourBtn.addEventListener('click', changeColour);

