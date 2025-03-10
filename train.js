console.log("MIT25 | LEO [Azizbek]");
console.log("Train server run success!");
console.log("");
console.log("~~~ ~~~ ~~~");
console.log("");

// F-Task
/*
Yagona string argumentga ega findDoublers nomli function tuzing.
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa,
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

//Masalani yechimi
function findDoublers(word) {
  if (typeof word !== "string") { //agar argument string bo'lmasa,
    console.log("Please enter only string!"); //function ishga tushmaydi
  }
  else if (typeof word === "string") { //agar string bo'lsa,
    const save = new Set();  //Set built-in JS objecti bo'lib, unda pastdagi logiclarda valuelarni saqlaymiz
    for (let i = 0; i < word.length; i++) { //for loop bilan har bir element ustida loop qilamiz
      if (save.has(word[i])) { //has() - Set documentationidan olindi!!!
        console.log(`${word}`); //kiritilgan so'z
        console.log(`Takroriy qiymat: ${word[i]}`); //takroriy qiymat bergan value
        return true; //bizda takroriy qiymat bor, TRUE !!!
      }
      save.add(word[i]); //add() - Set documentationdan olindi!!! qiymat Setda bo'lmaganda uni Setga qo'shamiz.
    }
  }
  console.log(`${word}`); //kiritilgan so'z (false holatida)
  return false; //agar loopimiz takroriy qiymat qaytarmasa, return FALSE !
};

console.log(findDoublers("test1"));
console.log(findDoublers("sinov2"));




// E-Task
/*
Shunday function tuzing, u bitta string argumentni qabul qilib, o'sha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

//Masalani yechimi
// function getReverse(word) { //getReverse function word parametr bilan
//   if (typeof word !== "string") { //agar argument string bo'lmasa,
//     console.log("Please enter only string!"); //function ishga tushmaydi
//   }
//   else if (typeof word === "string") { //agar string bo'lsa,
//     return word.split("").reverse().join(""); //return qilamiz ---> word: split(arrayga aylantiramiz) -> reverse(teskari taxlaymiz elementlarni) -> join(yana stringga o'tqazamiz)
//   };
// };

// console.log(getReverse("itpayalhsi noitcnuf"));
// console.log(getReverse("agimsiq tnemugra llac ,ikahcnuhs"));
// console.log(getReverse("naglizoy ahcigilappahc ralz'os ubhsu"));
// console.log(getReverse("ahahah"));




// D-Task
/*
Shunday function tuzing, u 2ta string parametrga ega bo'lsin, hamda agar har ikkala string bir xil harflardan iborat bo'lsa, true. Aks holda false qaytarsin.
MASALAN, checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

//Masalani yechimi
// function checkContent(str1, str2) {
//   //ikki parametr
//   if (typeof str1 !== "string" || typeof str2 !== "string") {
//     //error chiqaramiz, agar call qilganda string bo'lmasa
//     console.log("Please enter string only!");
//   } else {
//     //agar ikkala argument ham string bo'lsagina function ishga tushadi
//     const sort1 = str1.split("").sort().join(); //sort1 variableda 1-stringni ushbu built in JS methodlar orqali saqlaymiz
//     const sort2 = str2.split("").sort().join(); //xuddi sort1dagidek qaytaramiz
//     if (sort1 == sort2) {
//       //endi ikkalasini tekshiramiz: bir xil bo'lsa:
//       console.log("true");
//       return true; //true
//     } else {
//       //bo'lmasa, false
//       console.log("false");
//       return false; //false
//     }
//   }
// }

// checkContent("mitgroup", "gmtiprou"); //function call qismi

// C-Task
/*
Shunday classtuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bo'lsin, hamda classning 3ta methodi bo'lsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lag'mon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
*/

//Masalani yechimi
// class Shop {
//     constructor(non, lagmon, cola) {
//       //Dastlabki mahsulotlar
//       this.non = non;
//       this.lagmon = lagmon;
//       this.cola = cola;
//     }

//     //Hozirgi vaqt - HH:MM uchun metod
//     getTime() {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, '0'); // Soatni olamiz> agar 1 xonali bo‘lsa> oldiga 0 qo‘shamiz (ushbu functionlar JSda built in bor ekan!!)
//       const minutes = String(now.getMinutes()).padStart(2, '0'); // Daqiqalarni olamiz> agar 1 xonali bo‘lsa> oldiga 0 qo‘shamiz (bu ham JS da built in bor!!)
//       return `${hours}:${minutes}`;
//     }

//     //Omborda qancha mahsulot borligini aytuvchi metod
//     qoldiq() {
//       const time = this.getTime(); //Hozirgi vaqt
//       return `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
//     }

//     //Mahsulot sotish uchun function
//     sotish(mahsulot, soni) {
//       //Agar mahsulot mavjud bo'lsa va yetarli soni bo‘lsa sotamiz
//       if (this[mahsulot] !== undefined) {
//         if (this[mahsulot] >= soni) {
//           this[mahsulot] -= soni; //Ombordan remove qilamiz, chunki sotildi
//           console.log(`Hozir ${this.getTime()}da ${soni}ta ${mahsulot} sotildi.`);
//         } else {
//           console.log(`Hozir ${this.getTime()}da yetarli ${mahsulot} yo‘q!`); //Mahsulot yetmasa
//         }
//       } else {
//         console.log(`Hozir ${this.getTime()}da bunday mahsulot mavjud emas!`); //Nomi noto'g'ri kiritilsa
//       }
//     }

//     //Omborga yangi mahsulot olish uchun function
//     qabul(mahsulot, soni) {
//       //Agar mahsulot ro‘yxatda bo‘lsa, unga sonini qo'shamiz
//       if (this[mahsulot] !== undefined) {
//         this[mahsulot] += soni; //Omborga add qilamiz bu safar
//         console.log(`Hozir ${this.getTime()}da ${soni}ta ${mahsulot} qabul qilindi.`);
//       } else {
//         console.log(`Hozir ${this.getTime()}da bunday mahsulot mavjud emas!`); //Nomi noto'g'ri kiritilsa
//       }
//     }
//   }

//   //Masala yechimini ishlatish
//   const shop = new Shop(4, 5, 2); //4ta non, 5ta lag'mon, 2ta cola
//   console.log(shop.qoldiq()); //Omborda qancha mahsulot borligini ko'ramiz

//   shop.sotish('non', 3); //3ta non sotish
//   shop.qabul('cola', 4); //4ta cola qabul

//   console.log(shop.qoldiq()); //Yana qoldiqni tekshiramiz

// B-Task
/* Shunday function tuzing, u 1 ta string parametrga ega bo'lsin, hamda o'sha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN, countDigits("ad2a54y79wet0sfgb9") 7 ni return qiladi.
*/

//Masalani yechimi
// function countDigits(word) {
//     let count = 0;
//     let digits = [];
//     if (typeof word !== "string") {
//         console.log("Only strings are supported in this 'Masala'");
//         return null;
//     }
//     else if (typeof word === "string") {
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] >= '0' && word[i] <= '9') {
//                 count++;
//                 digits.push(word[i]);
//             };
//         };
//         console.log(`Number of digits in '${word}' - ${count}`);
//         console.log("~ ~ ~ | ~ ~ ~");
//         console.log("Digits extracted from the list below:");
//         console.log(digits);
//         console.log("~ ~ ~ | ~ ~ ~");
//         console.log("MASALA (Task-B) solved success!!!!!");
//         return count;
//     };
// };

// countDigits("ad2a54y79wet0sfgb9");

//A-Task
/* 2 parametrli function tuzing: 1- parametrdagi letterlarni 2 parametrdagi so'zda qatnashgan sonini return qilsin.
Masalan, countLetter("e", "engineer") 3 ni return qiladi.
*/

//Masalani yechimi
// function countLetter(letter, word) {
//     let count = 0;
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === letter) {
//             count++;
//         };
//     };
//     console.log(`"${letter}" appears ${count} times in "${word}"`);
//     console.log("Easy-peasy! haha •̀ᴗ•́");
//     return count;
// };

// countLetter("a", "internatsionalizatsiyalashtirolmayotganliklaringizdandirmikina");

// console.log("Jack Ma maslahatlari");

// const list = [
//     "be a good student", //0-20
//     "choose a right teacher and make more mistakes", //20-30
//     "start working for yourself", //30-40
//     "do what you are good at", //40-50
//     "invest in the youth", //50-60
//     "rest now!", //60~
// ];

// // CALLBACK function
// function advice(a, callback) {
//     if(typeof a !== 'number') callback("Please insert number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// };

// console.log('passed here 0');
// advice(67, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });
// console.log('passed here 1');

// ASYNC fuction
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

// call via then/catch
// console.log('passed here 0');
// advice(67)
//     .then((data) => {
//       console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// console.log("passed here 1");

// call via async/await
// async function run() {
//     let javob = await advice(24);
//     console.log(javob);
//     javob = await advice(88);
//     console.log(javob);
//     javob = await advice(41);
//     console.log(javob);
// };
// run();
