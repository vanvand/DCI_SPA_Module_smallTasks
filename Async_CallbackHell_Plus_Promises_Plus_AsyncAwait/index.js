// make background rainbow colors > so switching background color after defined time


// ########################################################################
// separate functions
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
    }, 1000)

    setTimeout(() => {
        document.body.style.backgroundColor = "orange";
    }, 2000)

    setTimeout(() => {
        document.body.style.backgroundColor = "yellow";
    }, 3000)

    setTimeout(() => {
        document.body.style.backgroundColor = "green";
    }, 4000)

    setTimeout(() => {
        document.body.style.backgroundColor = "blue";
    }, 5000)



// ########################################################################
// you can nest this:
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "orange";
            setTimeout(() => {
                document.body.style.backgroundColor = "yellow";
                setTimeout(() => {
                    document.body.style.backgroundColor = "green";
                    setTimeout(() => {
                        document.body.style.backgroundColor = "blue";
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)



// ########################################################################
// you can also write a function
// STILL A LOT OF NESTING!!!

    const delayedColorChange = (newColor, delay, doNext) => {
        setTimeout( () => {
            document.body.style.backgroundColor = newColor;
            doNext && doNext();
        }, delay)
    }

    delayedColorChange("red", 1000, () => {
        delayedColorChange("orange", 1000, () => {
            delayedColorChange("yellow", 1000, () => {
                delayedColorChange("green", 1000, () => {
                    delayedColorChange("blue", 1000, () => {
                
                    })
                })
            })
        })
    });



// ########################################################################
// rewrite the nested function syntax from above with a promise
const delayedColorChange2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

delayedColorChange2("red", 1000)
.then( () => delayedColorChange2("orange", 1000) )
.then( () => delayedColorChange2("yellow", 1000) )
.then( () => delayedColorChange2("green", 1000) )
.then( () => delayedColorChange2("blue", 1000) )


// ########################################################################
// rewrite to use async/await instead of promise

async function rainbow() {
    await delayedColorChange2('red', 1000) // further will pause, until the promise is resolved
    await delayedColorChange2('orange', 1000) // will wait until the first promise is resolved, then run ...
    await delayedColorChange2('yellow', 1000)
    await delayedColorChange2('green', 1000)
    await delayedColorChange2('blue', 1000)
    await delayedColorChange2('indigo', 1000)
    await delayedColorChange2('violet', 1000)
    return "ALL DONE!"
}

// if I want to print something as soon as rainbow function is done
async function printRainbow() {
    // wait for rainbow function to be finished
    await rainbow();
    // then print
    console.log("END OF RAINBOW!")
}
printRainbow();

// you can also use .then (can be mixed)
// rainbow().then(() => console.log("END OF RAINBOW")







// ########################################################################
// searchMovieAPI("amadeus", () => {
//     saveToMyDB(movies, () => {
//         // if it works, run this:
//     }, () => {
//         // if it doesn't work, run this:
//     })
// }, () => {
//     // if API is down, or request failed
// })