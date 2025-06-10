// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// let count = 0;
let timer = 15;

let id = setInterval(function () {      //setInterval retruns a id, we can use it to clear the inerval
    console.log(timer);
    timer--;
    if (timer <= 0)
        clearInterval(id);
    // console.clear();
}, 1000);
