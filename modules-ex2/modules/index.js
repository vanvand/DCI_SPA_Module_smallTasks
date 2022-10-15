// Your code goes here!
import {
    calculateAspectRatio
} from "./aspect-ratio.js"
import {
    modulo,
    percentage,
    percentageOf,
    difference
} from "./percentage.js"


const operations = ["modulo", "percentage", "percentageOf", "difference"];

const init = () => {
    operations.forEach(operation => {
        const input = [
            // target id="modulo_1" of each div
            document.querySelector(`#${operation}_1`),
            document.querySelector(`#${operation}_2`)
        ];
        console.log(input)

        const result = document.querySelector(`#${operation}_result`);



        input.forEach(field => {
            field.addEventListener('focus', e => {
                e.target.value = ""
            });
            field.addEventListener('keyup', e => {
                result.value = calculate(
                    operation,
                    Number(input[0].value),
                    Number(input[1].value)
                );
            });
        });
    });
}


/**
 * Returns the result of a mathematical calculation, based on the given
 * operation (add, subtract, multiply, divide, modulo).
 *
 * Examples:
 * calculate("add", 5, 10)       =>  5 + 10 = 15
 * calculate("divide", 100, 20)  =>  100 / 20 = 5
 *
 * @param  {string} operation
 * @param  {number} first       The left value of the operation
 * @param  {number} second      The right value of the operation
 * @return {number}
 */

const calculate = (operation, first, second) => {

    switch (operation) {
        case 'modulo':
            return modulo(first, second)

        case 'percentage':
            return percentage(first, second)

        case 'percentageOf':
            return percentageOf(first, second)

        case 'difference':
            return difference(first, second)

        default:
            return 0;
    }
}
// the load function is fired when the entire page loads, including its content (images, CSS, scripts, etc.).
window.addEventListener("load", init)



// ratio
const aspectForm = document.querySelector("#aspect-form")
aspectForm.addEventListener("keyup", init2)

const newWidth = document.querySelector("#ratio_result-width")
const newHeight = document.querySelector("#ratio_result-height")

function init2() {
    const originalWidth = ratio_1.value
    const originalHeight = ratio_2.value

let result = 0
    if (newHeight.value != 0) {
        result = calculateAspectRatio(originalWidth, originalHeight, newHeight.value, "h")
        newWidth.value = result
    } else if (newWidth.value != 0) {
        result = calculateAspectRatio(originalWidth, originalHeight, newWidth.value, "w")
        newHeight.value = result
    }
}

const inputs = [
    document.querySelector("#ratio_1"),
    document.querySelector("#ratio_2"),
    newWidth,
    newHeight
]
inputs.forEach(field => {
    field.addEventListener("focus", e => {
        
        if(field == newWidth || field == newHeight) {
            newWidth.value = ""
            newHeight.value = ""
        } else {
            e.target.value = ""
        }
    })
})