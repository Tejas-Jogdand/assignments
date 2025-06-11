// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs');

fs.writeFile("test.txt","Hey, I am good",function(err) {
    if(err)
        console.log(err);
    else
    console.log("added the data to file");
});

let sum = 0;

for (let i = 0; i  < 1000000000; i++) {
    sum++;
}

console.log("wolla");