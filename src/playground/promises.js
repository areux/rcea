const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('good')
    }, 1000);
});


// async function ff() {
//     const data = await promise;
//     return data;
// }

console.log('before');
// (async () => {
//     const data = await promise;
//     console.log(data);
// })();
// ff.then((data) => {
//     console.log(data);
// });
promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('good')
        }, 1000);
    });
}).then((data) => {
    console.log('does this run?', data);
}).catch((error) => {
    console.log('error:', error)
});
console.log('after');