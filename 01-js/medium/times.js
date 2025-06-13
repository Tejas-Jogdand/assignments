/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 => 0 ms
2. Sum from 1-100000 => 2 ms
3. Sum from 1-1000000000 => 670 ms
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    let now = new Date();
    let beforeRun = now.getTime();
    for (let i = 0; i < n; i++) {
        sum++;
    }
    let after = new Date();
    let afterRun = after.getTime();
    console.log(beforeRun,afterRun);
    return afterRun-beforeRun;
}

console.log(calculateTime(100));