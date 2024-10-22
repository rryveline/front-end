// Rest Parameter & Spread Operator

// 1. Rest Parameter
// Digunakan pada saat kita membuat fungsi
// yang memiliki banyak parameter

// fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};

func1("A", "B", "C", "D", "E");

// fungsi dengan rest parameter
const func2 = (...params) => { // (...var) = tipenya array
    console.log(params);
};

func2("A", "B", "C", "D", "E", "F", "G");


// rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
};

