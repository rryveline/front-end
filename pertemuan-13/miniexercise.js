// Mini Exercise
// const penjumlahan = (a, b, c, d, e, f) => {
//     let arr = [a, b, c, d, e, f];
//     let hasil = 0;
//     arr.forEach((item) => (hasil += item));
//     return hasil;
// }

// console.log(penjumlahan(1,2,3,4,5,6));

const penjumlahan = (...arr) => {
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
}

console.log(penjumlahan(1,2,3,4,5));

// 2. Spread Operator
// Digunakan pada Array dan Object, untuk memecah array/object
// menjadi elemen elemen kecil pembentuknya

// // Array
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

// // 1. Duplikasi Array
let numbers2 = [...numbers];
console.log(numbers2);

// // 2. Menggabungkan Array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let numbers3 = arr1.concat(arr2, arr3); //ES5
let numbers4 = [...arr1, ...arr2, ...arr3]; //ES6

// // Object
const john = {
    fullName : "John Doe",
    age : 30,
};

// // 1. Duplikasi Object
const john2 = {...john, address: "Manado"};

// // 2. Menggabungkan Object
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

let combinedObj = {...obj1, ...obj2, ...obj3};