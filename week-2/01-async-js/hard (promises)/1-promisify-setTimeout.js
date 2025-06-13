/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    console.log("Creating promise");
    return new Promise(function(resolve){
        console.log("wait ",n," seconds");
        setTimeout(()=>{
            resolve();
        },n*1000)
    });
}
wait(4).then(()=>console.log("Resolved promise"));
// console.log("h");
module.exports = wait;
