// let fs = require('fs');
// let path = require('path');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// })

// fs.mkdir(path.join(__dirname, 'test01'), (err) => {
//     if (err) { console.log(err); }
// });

// function onSuccess() {
//     console.log('This is success');
// }

// function onFailure() {
//     console.log('This is failure');
// }

// function main(err, onSuccess, onFailure) {
//     if (err) { onFailure(); } else { onSuccess(); }
// }

// main(false, onSuccess, onFailure);

async function main() {
    return await Promise.resolve('I am starting')
}

const data = main();
data.then(d => console.log(d))