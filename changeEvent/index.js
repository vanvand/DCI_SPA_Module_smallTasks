// do sth every time this input is updated - life instead of waiting for a submit

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// only fires when blured out > when element is left and input changed
input.addEventListener("change", function(e) {
    console.log("change")
})

// input always fires, so whenever something is typed
input.addEventListener("input", function(e) {
    // console.log("input")
    // console.log(e) 
    // update h1 to the text which was entered >> like live preview of input
    h1.innerText = input.value
})