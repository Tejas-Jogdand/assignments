function sum(a,b){
    return new Promise(function (resolve,reject){
        resolve(a+b);
    });
}

sum(2,4).then(function (ans){
    console.log(ans);
})