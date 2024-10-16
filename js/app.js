// 1. **Massiv ichidagi raqamlar yig'indisi**

// function num() {
//   let sum = 0;
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   alert(sum)
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num();

// 2. **Massivdagi minimal qiymatni topish**

// function minNum() {
//   let min = numbers[0];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   console.log(min);
//   alert(min);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// minNum();

// 3. **Massiv elementlarining uzunligini o'lchash**

// function strLen() {
//   let massiv = [1, 2, "Salom", 8, "Dunyo"];
//   let sum = 0;
//   for (let i = 0; i <= massiv.length - 1; i++) {
//     if (typeof massiv[i] === "string") {
//       sum += massiv[i].length;
//     }
//   }
//   console.log(sum);
// }
// strLen();

// 4. **Raqamli massivni tartiblash**

// function sorting() {
//   let numbers = [4, 6, 2, 3, 8, 7, 4, 5, 1, 9, 10];
//   numbers.sort(function (a, b) {
//     return b - a;
//   });
//   console.log(numbers);
// }
// sorting();

// 5. **Ikkita massivni birlashtirish**

// function addMassiv() {
//   let massiv1 = [1, 2, 3, 4, 5];
//   let massiv2 = [6, 7, 8, 9, 10];
//   let res = massiv1.concat(massiv2);
//   console.log(res);
// }
// addMassiv();

// 6. **Massiv ichidagi elementlarni teskari o'girish**

// function reverse() {
//   console.log(massiv.reverse());
// }
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reverse();

// 7. **Massivdagi musbat sonlarni topish**

// function toqSon() {
//   let res = [];
//   for (let i = 0; i <= massiv.length; i++) {
//     if (massiv[i] % 2 == 1) {
//       res.push(massiv[i]);
//     }
//   }
//   console.log(res);
//   alert(res);
// }
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// toqSon();

// 8. **Massiv elementlarini qo'shish**

// function plusElement() {
//   let res = [];
//   for (let i = 0; i <= massiv.length - 1; i++) {
//     res.push(massiv[i] + 1);
//   }
//   console.log(res);
//   alert(res);
// }
// let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// plusElement();

// 9. **Massiv ichidagi musbat va manfiy sonlarni ajratish**

// function sortMassiv() {
//   let juftSon = [];
//   let toqSon = [];
//   for (let i = 0; i <= massiv.length - 1; i++) {
//     if (massiv[i] % 2 == 0) {
//       juftSon.push(massiv[i]);
//     } else {
//       toqSon.push(massiv[i]);
//     }
//   }
//   console.log(juftSon);
//   console.log(toqSon);
// }
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sortMassiv();

// 10. **Stringlarni raqamlarga aylantirish**

// function strToNum() {
//     let res = [];
//     for (let i = 0; i <= numbers.length - 1; i++) {
//         res.push(Number(numbers[i]));
//     }
//     console.log(res);
// }
// let numbers = ["1", "2", "3", "4", "5", "6"];
// strToNum();

// 11. **Massiv elementlarining o'rtacha qiymatini hisoblash**

// function avarage() {
//   let sum = 0;
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     sum += numbers[i];
//   }
//   let res = sum / numbers.length;
//   console.log(res);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// avarage();

// 12. **Massiv ichidagi toq va juft sonlarni topish**

// function num() {
//   let juft = [];
//   let toq = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] % 2 == 0) {
//       console.log(numbers[i] + " Juft son");
//     } else {
//       console.log(numbers[i] + " Toq son");
//     }
//   }
// }
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50,
// ];
// num();

// 13. **Massivdan ma'lum qiymatlarni olib tashlash**

// function deleteElement() {
//   let res = [];
//   let element = 1;
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] === element) {
//       numbers.splice(element, 1);
//     }
//   }
//   console.log(numbers);
// }
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// deleteElement();

// 14. **Massiv elementlarining kvadratini olish**

// function square() {
//   let res = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     res.push(numbers[i] ** 2);
//   }
//   console.log(res);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// square();

// 15. **Massivdagi har bir elementni ikki barobar oshirish**

// function double() {
//   let res = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     res.push(numbers[i] * 2);
//   }
//   console.log(res);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// double();

// 16. **Massivdan undefined va null qiymatlarni olib tashlash**

// function deleteUndefinedAndNull() {
//   let res = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] != null || numbers[i] != undefined) {
//       res.push(numbers[i]);
//     }
//   }
//   console.log(res);
// }
// let numbers = [1, 2, 3, 4, 5, 6, null, undefined, true, false, 20, 40, 101];
// deleteUndefinedAndNull();

// 17. **Massivdagi stringlarni bosh harfga o'girish**

// function bigFirstWord() {
//   let res = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === "string") {
//       let firstString = numbers[i][0].toUpperCase() + numbers[i].slice(1);
//       res.push(firstString);
//     }
//   }
//   console.log(res);
// }
// let numbers = ["hello", "world", "salom"];
// bigFirstWord();

// 18. **Massiv ichidagi aniq qiymatlarning sonini hisoblash**

// function countNumber() {
//     let counter = 0;
//     let element = 1;
//     for (let i = 0; i <= numbers.length; i++) {
//         if (element == numbers[i]) {
//             counter++;
//         }
//     }
//     console.log(counter);
// }
// let numbers = [
//     1, 1, 1, 1, 2, 3, 5, 6, 6, 3, 3, 5, 5, 7, 7, 3, 4, 3, 6, 5, 7, 9, 9, 9, 7, 5,
//     6, 8, 9, 0, 9, 7, 8, 7, 5, 4, 4, 6, 7, 8, 9, 7, 3,
// ];
// countNumber();

// 19. **Massivni qo'shib, elementlarni kiritish**

// function addElement() {
//     numbers.splice(4, 0, 5, 6);
//     console.log(numbers);
// }
// let numbers = [1, 2, 3, 4, 7, 8, 9, 10];
// addElement();

// 20. **Massiv ichidagi barcha stringlarni uzunliklari bo'yicha tartiblash**

// function lengthOfString() {
//     let numbers = [
//         "IT",
//         "hello",
//         "world",

//         "javascript",
//         "react",
//         "angular",
//         "vue",
//         "typescript",
//         "nodejs",
//         "express",
//     ];
//     let res = numbers.sort((a, b) => a.length - b.length);
//     console.log(res);
// }
// lengthOfString();

// 21. **Massivdagi eng uzun stringni topish**

// function longestStr() {
//     let str1 = str[0].length;
//     let str2 = str[1].length;
//     let str3 = str[2].length;
//     let max = Math.max(str1, str2, str3);
//     if (max == str1) {
//         console.log("Antistoflokokoviygammoglabulin");
//     } else if (max == str2) {
//         console.log("pneumonoultramicroscopicsilicovolcanoconiosis");
//     } else {
//         console.log("Gidroelektromehanizatsiyalashtirmaganliklaridanmikan");
//     }
// }
// let str = [
//     "Antistoflokokoviygammoglabulin",
//     "pneumonoultramicroscopicsilicovolcanoconiosis",
//     "Gidroelektromehanizatsiyalashtirmaganliklaridanmikan",
// ];
// longestStr();

// 22. **Massiv elementlarini vergul bilan birlashtirish**

// function workWithJoin() {
//     cars.join(",");
//     console.log(cars);
// }
// let cars = ["Mersedes-benz", "Toyota", "Subaru"];
// workWithJoin();

// 23. **Massiv ichida faqat raqamlar qoldirish**

// function justNumber() {
//     let res = [];
//     for (let i = 0; i <= numbers.length - 1; i++) {
//         if (typeof numbers[i] != "string") {
//             res.push(numbers[i]);
//         }
//     }
//     console.log(res);
// }
// let numbers = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     "Mersedes-benz",
//     "Toyota",
//     "Bolshoye Musrnoye Wedro",
// ];
// justNumber();

// 24. **Massivning oxirgi n elementlarini olish**

// function lastElement() {
//   let res = numbers.lastIndexOf(element);
//   console.log(res);
// }
// let element = 7;
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,
//   7, 8, 9, 0,
// ];
// lastElement();
