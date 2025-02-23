console.log("Jack Ma maslahatlari");

const list = [
    "be a good student", //0-20
    "choose a right teacher and make more mistakes", //20-30
    "start working for yourself", //30-40
    "do what you are good at", //40-50
    "invest in the youth", //50-60
    "rest now!", //60~
];

function advice(a, callback) {
    if(typeof a !== 'number') callback("Please insert number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);
    }
};

console.log('passed here 0');
advice(67, (err, data) => {
    if(err) console.log('ERROR:', err);
    console.log('javob:', data);
});
console.log('passed here 1');

















// async function advice(a) {
//     if(typeof a !== 'number') throw new Error("Please insert number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//     })
// }};

//then/catch
// console.log('passed here 0');
// advice(67)
//     .then((data) => {
//       console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// console.log("passed here 1");

//async/await
// async function run() {
//     let javob = await advice(24);
//     console.log(javob);
//     javob = await advice(88);
//     console.log(javob);
//     javob = await advice(41);
//     console.log(javob);
// };
// run();