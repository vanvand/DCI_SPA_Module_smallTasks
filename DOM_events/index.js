// * THE EVENT OBJECT

// When an event listener is triggered and calls its associated function, it automatically passes a single ARGUMENT to the function
// This argument is a reference to the event object
// The event object contains a number of properties that describe the event which occurred

// ================================================================

//####### select the elements ##########
const green = document.querySelector(".green");
console.log(green)
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const login = document.querySelector('.login')


// ########################################################
// addEventListener click event
// Listener is the callback function

const onGreenHandler = (event) => {
    // defining the event as a parameter is optional. It shows event object > contain information about the action that just happened (coordinates of the click,...) and let you do sth. with its properties.
    console.log(event);
    console.log(event.target.style.backgroundColor);

    if (event.target.style.backgroundColor === "pink") {
        alert("Fight back! Remove Blue! \n I'll change my color to black!");
        blue.remove();
        event.target.style.backgroundColor = "black"
        alert("Black")
    } else {
        alert("Green");
    }
}
// In order to do something about this event you bind an event handler to the button you are interested in.
// The handler is simply a function which does something (it's executed) when the event happens.
// SYNTAX: element.addEventListener(eventName, handler);
// green.addEventListener("click", onGreenHandler);
    // one line
    // green.addEventListener("click", () => alert("Green"));



// different syntax > no separate function
green.addEventListener("click", e => {
    if (e.target.style.backgroundColor === "pink") {
        // (1) show alert message
        alert("Fight back! Remove Blue! \n I'll change my color to black!");
        // (2) remove blue div
        blue.remove();
        // (3) change background color to black
        e.target.style.backgroundColor = "black"
    // if background color is changes to black, then alert black instead of green 
    } else if (e.target.style.backgroundColor === "black") {
        alert("Black")
    } else {
        alert("Green");
    }
}
)


// ########################################################
// adding an options object (call the event one time)
const onRedHandler = () => alert("red");
red.addEventListener("click", onRedHandler, { once: true });


// ########################################################
// check out https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions
const onBlueHandler = (event) => {
    // event not needed in this case - will give us object
    console.log(event);
    alert("blue: I am going to change green's background to pink");
    green.innerText = "😡 Elements battle start";
    green.style.backgroundColor = "pink";
    green.style.color = "red"
}
blue.addEventListener("click", onBlueHandler);


// ########################################################
const onYellowHandler = () => alert("yellow");
yellow.addEventListener("mouseover", onYellowHandler);


// ########################################################
// ########################################################
// addEventListener (keydown event)
const keys = [
    {
        keyCode: 65,
        value: "A"
    },
    {
        keyCode: 13,
        value: "Enter"
    }
]

window.addEventListener("keydown", (e) => {
    // console.log(e.keyCode);
    

    const keyCode = e.keyCode // from the user action
    console.log(keyCode);

    for (let key of keys) {
        if (key.keyCode === keyCode) {
            alert(key.value)
        }
    }
})


// ########################################################
// ########################################################
function onLogin(e) {
    e.preventDefault();
    // get complete form
    console.log(e.target);
    // get email input element
    console.log(e.target.email);
    // get value of email
    console.log(e.target.email.value);

    
    let email = e.target.email.value;
    let password = e.target.password.value;
    alert(`The email ${email} and password ${password} submitted successfully!`)

    const data = {email,password}
    console.log("Send the data to the backend ", data);
}

// send when press enter works automatically
login.addEventListener("submit", onLogin)