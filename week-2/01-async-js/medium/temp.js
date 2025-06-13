const fs = require('fs');
// let data = fs.readFileSync("test.txt","utf-8");
let data = fs.readFile("test.txt","utf-8",function(err,data){
    console.log(data);
});   
console.log(data);
console.log("Hetr");
