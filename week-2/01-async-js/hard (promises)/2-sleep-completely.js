/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve,reject)=>{
        let startTime = Date.now();
        while(Date.now() - startTime < milliseconds){
            //chill
        }
        resolve();
    });
}

sleep(5000).then(()=>console.log("It's over"));

module.exports = sleep;
