// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// let count = 0;
let timer = 15;

// function counter(){
// }

//need fixes

for (let i = 0; i < timer; i++) {
    let id = setTimeout(function(){
        console.log(timer);
        timer--;
        if(timer<0)
            clearTimeout(id);
    },1000);
}




// (Hint: setTimeout)