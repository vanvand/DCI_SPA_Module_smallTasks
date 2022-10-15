const button = document.querySelector("button")
const h1 = document.querySelector("h1");

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})` // rgb(90,177,169)
}


button.addEventListener("click", function () {
    // get random color
    const newColor = makeRandColor()
    // apply random color to body background
    document.body.style.backgroundColor = newColor
    // show rgb value as h1
    h1.innerText = newColor


    // change text color for h1 when background color is dark
    function getSumRGB() {
        let sum = 0
        const arrNewColor = newColor.substring(4, newColor.length - 1).split(",").map(Number)
        for (let e of arrNewColor) {
            // e = parseInt(e) // string to num > used map(Number) instead
            sum += e
        }
        return sum
    }
    
    if (getSumRGB() < 400) {
        h1.style.color = "white"
    } else {
        h1.style.color = "black"
    }
    //console.log(sum)
})




// instead of defining this, we can just type document.body directly
const body = document.querySelector("body")