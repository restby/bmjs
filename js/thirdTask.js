// function declaration
// console.log(calc(2, 3));
// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(3, 4));

// function expression
// console.log(calc(3, 2));
// let calc = function (a, b) {
//   return a + b;
// }
// console.log(calc(2, 3));

// es6
/*
  не имеет this
*/
let calc = (a, b) => a + b;
// let calc = (a, b) => { a + b } // Тоже самое
console.log(calc(3, 3));


// let i = 0;
// while (i < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');

//   if (typeof (a) !== null &&
//     typeof (b) !== null &&
//     a !== "" &&
//     b !== "" &&
//     a.length < 50) {
//     console.log('done!');
//     appData.expenses[a] = b;
//   } else {
//     i--;
//   }
//   i++;
// }

// let i = 0;
// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');

//   if (typeof (a) !== null &&
//     typeof (b) !== null &&
//     a !== "" &&
//     b !== "" &&
//     a.length < 50) {
//     console.log('done!');
//     appData.expenses[a] = b;
//   } else {
//     i--;
//   }
//   i++;
// } while (i < 2);
