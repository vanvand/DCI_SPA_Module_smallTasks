// show random color to guess
// show New Colors button to reset
// show mode switch "Easy" > display 3 tiles & "Hard > display 6 tiles"
// show six tiles > one tile = pickedColor, other random but not pickedColor
// click event on tiles 
    // guess correct 
        // > show message "Correct" in span
        // > change h1 & tiles background color to pickedColor
        // > resetButton change text to PlayAgain > functionality stay reset
    // guess not correct > show message "Try again" in span and make clicked tile display: none


let numSquares = 6;
let colors = [];
let pickedColor;

let h1 = document.querySelector("h1");
let colorDisplay = document.querySelector("#color-display");
let resetButton = document.querySelector("#reset");
let messageDisplay = document.querySelector("#message");
let modeButtons = document.querySelectorAll(".mode");
let easyButton = document.querySelector(".mode");
let squares = document.querySelectorAll(".square");


init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

// click event on "New Colors / Play Again" button to reset
resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
                // set tile color to background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function setupMode() {
	for(let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (let i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

// change h1 & all tiles background color to pickedColor
function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

// get one color to choose pickedColor
function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// genrate array with num x random color > easy 3x / hard 6x
function genRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}


// genrate random rgb color string
function makeColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}



