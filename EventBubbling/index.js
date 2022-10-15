const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

// when I click the button to "Change Color" the event in div is also triggered, due to the event bubbling and will be hidden
// on the event object there is a method called stopPropagation > prevent event from bubbling up any further
button.addEventListener("click", function(e) {
    container.style.backgroundColor = makeRandColor()
    e.stopPropagation();
})

// click to hide div element including button
container.addEventListener("click", function() {
    container.classList.toggle("hide")
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})` // rgb(90,177,169)
}