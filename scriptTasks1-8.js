//ВСЕ ЗАДАНИЯ В ОДНОМ ФАЙЛЕ

// Задание 1
/*
let userValue = prompt();

if (userValue % 2 === 0) {
  userValue = +userValue;
  console.log(alert("Четное число"));
} else if (userValue % 2 > 0) {
  userValue = +userValue;
  console.log(alert("Нечетное число"));
} else if (userValue === NaN || typeof userValue !== "number") {
  console.log(alert("Упс, кажется, вы ошиблись"));
}
*/

// Задание 2

/*
let x = 22;
if (typeof x === "number" || typeof x === "string" || typeof x === "boolean") {
  console.log(`${x} = ${typeof x}`);
} else {
  console.log("Тип x не определён");
}
*/

//Задание 3
/*
greeting = "Hello";
console.log(greeting.split("").reverse().join(" "));
*/

//Задание 4
/*
let randomNum = Math.trunc(Math.random() * 100) + 1;
console.log(randomNum);
*/

//Задание 5
/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//forEach()
// console.log(
//   arr.forEach(function (el, i, arr) {
//     console.log(el);
//   })
// );

//for of
for (let el of arr) {
  console.log(el);
}

*/

//Задание 6
/*

let arr = [1, 1, 3, 1, 1];

const allEqual = (arr) => arr.every((val) => val === val[0]);

console.log(allEqual(arr));
*/

//Задание 7
/*

let arr = [1, 3, 4, 7, 8, 11, 2, null, "hello", 0];

const arrNumbers = function (arr) {
  let arrEvenNum = arr
    .filter((el) => el % 2 === 0 && el !== null && el !== 0)
    .reduce((acc, el) => acc + el, 0);
  console.log(arrEvenNum);

  let arrOddNum = arr
    .filter((el) => el % 2 > 0 && el !== null && el !== 0)
    .reduce((acc, el) => acc + el, 0);
  console.log(arrOddNum);

  let arrZero = arr.filter((el) => el === 0);
  console.log(+arrZero);
};

console.log(arrNumbers(arr));

*/

//Задание 8

const map = new Map([
  [1, "Hello"],
  ["Second", false],
  [true, "third"],
]);

map.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});
