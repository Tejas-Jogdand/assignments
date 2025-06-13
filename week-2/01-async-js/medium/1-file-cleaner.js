// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function readMyFile() {
    return new Promise(function (resolve,reject) {
        fs.readFile("test.txt", "utf-8", function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

function writeMyFile(data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("test.txt", data, "utf-8", function (err) {
            if (err)
                reject(err);
            else
                resolve("data added");
        });
    })
}

function printMyData(data) {
    console.log(data);
}

let value = readMyFile().then(printMyData).then(()=>writeMyFile("data"));

// console.log(value);