const tweetForm = document.querySelector("#tweetForm")
const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const usernameInput = tweetForm.elements.username
    const tweetsInput = tweetForm.elements.tweet

    addTweet(usernameInput.value, tweetsInput.value)

    usernameInput.value = ""
    tweetsInput.value = ""
})


const addTweet = (username, tweets) => {
    const newTweet = document.createElement("LI");
    const bTag = document.createElement("b");
    bTag.append(username) // <b>Vanessa</b>
    newTweet.append(bTag); // <li><b>Vanessa</b></li>
    newTweet.append(` - ${tweets}`) // <li><b>Vanessa</b>- tweetText example</li> 
    tweetsContainer.append(newTweet)
}


// ############### EVENT DELEGATION EXAMPLE ######################

// we can successfully remove li's which were already there from html
// new li which were added newly can't be removed, because the event listener is not bind to li's added in the future 
// >> move addEventListener to parent of our li's 

    //const lis = document.querySelectorAll("li")
    // for(let li of lis) {
    //     li.addEventListener("click", function() {
    //         li.remove()
    //     })
    // }


// bind event listener on ul
tweetsContainer.addEventListener("click", function(e) {
    console.log("click on ul!")
    console.log(e) // target in the event information is set to target: li
    console.dir(e.target) // contain nodeName = "LI"
    
    e.target.nodeName === "LI" && e.target.remove();
})


// optimise - depending on where I click (e.g. <br> tag) it is not removed
