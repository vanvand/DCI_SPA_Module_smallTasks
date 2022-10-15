// give button a random background color

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})` // rgb(90,177,169)
}

// select elements
const buttons = document.querySelectorAll("button")
const h1s = document.querySelectorAll("h1")

// instead of 

// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor()
//     })
// }

// for (let h1 of h1s) {
//     h1.addEventListener("click", function () {
//         h1.style.backgroundColor = makeRandColor();
//         h1.style.color = makeRandColor()
//     })
// }


// use this keyword > will perform function on the clicked element
for (let button of buttons) {
    button.addEventListener("click",colorize)
}

for (let h1 of h1s) {
    h1.addEventListener("click",colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor()
}