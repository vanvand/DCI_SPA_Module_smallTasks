/* Carousel 

1- Create a carousel of up to 6 images.

2- Add arrows for navigation.

3- Write a function that handles each of the navigation behaviors.

4- Optional: Style to your pleasing.
*/

const images = document.querySelectorAll("img");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentIndex = 0


function onRightArrow() {
    currentIndex++

    // set back after last image to jump to first image again
    if (currentIndex === images.length) {
        currentIndex = 0
    }

    for (let i=0; i<images.length; i++) {
        images[i].style.transform = `translate(${currentIndex * -50}vw, 0)`
        // iteration (1) > 1*-50 > -50     // show second one
        // iteration (2) > 2*-50 > -100    // show third one
        // iteration (3) > 3*-50 > -150    // ...
        // iteration (4) > 4*-50 > -200
        // iteration (5) > 5*-50 > -250
        // >> then jump back to 0
        console.log(currentIndex)
    }
   
}

function onLeftArrow() {
    // -1
    currentIndex--;

    console.log(currentIndex);
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // 6-1 = 5
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translate(${currentIndex * -50}vw, 0)`;
      
    }
  }


rightArrow.addEventListener("click", onRightArrow)
leftArrow.addEventListener("click", onLeftArrow);
  