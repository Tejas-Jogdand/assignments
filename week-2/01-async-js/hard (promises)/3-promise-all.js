function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    let startTime = Date.now(); // Start timer

    return p = Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then(() => {
            let endTime = Date.now(); // End timer
            return endTime - startTime; // Return elapsed time in ms
        });
}

calculateTime(5, 2, 5).then((time) => {
    console.log(`Total time: ${time}ms`);
    console.log(p);
});

module.exports = calculateTime;