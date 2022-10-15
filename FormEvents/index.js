const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");


form.addEventListener("submit", function(e) {
    // prevents the default behaviour triggered by an event, default behaviour for a form is you get directed to the (in html) defined action source and can't go back. To do sth on the same page, without reloading.
    e.preventDefault();
    console.log("submitted!");
});


// get the input value and add to ul
form.addEventListener("submit", function(e) {
    // stopping the default behaviour
    e.preventDefault();

    // get the input value with input.value
    const catName = input.value

    // make a new li with that value
    const newLi = document.createElement("LI");

    // add input.value
    newLi.innerText = catName;
    
    // append to the page
    list.append(newLi)

    // reset form input
    input.value = ""
});