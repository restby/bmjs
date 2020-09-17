// ________________________Функции
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
// let calc = (a, b) => a + b;
// // let calc = (a, b) => { a + b } // Тоже самое
// console.log(calc(3, 3));

// ___________________Циклы
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

// ______________Объекты
// let options = {
//   name: 'Anton',
//   surname: 'Tolstenko',
//   age: 33,
//   skills: {
//     mark: 'HTML',
//     style: 'CSS',
//     lang: 'JS',
//   },
//   living: 'Minsk',
// };
// // console.log(options);

// options.lastname = 'Gennadievich';
// // console.log(options);

// delete options.living;
// // console.log(options);

// // Перебор объекта
// for (const key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// // Получение кол-ва элементов объекта
// console.log(Object.keys(options).length);


// ______________Массивы
// let array = [1, 2, 3, 4, 5];
// console.log(array);
// // удаления с конца
// array.pop();
// console.log(array);
// // добавление в конец
// array.push('5');
// console.log(array);
// // удаление с начала
// array.shift();
// console.log(array);
// // добавление с начала
// array.unshift('1');
// console.log(array);

// // перебор массива через for
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// };
// // перебор массива через forEach
// let arr = ['first', 'second', 'third', 'fourth', 'fivth'];
// arr.forEach(function (item, index, arr) {
//   console.log(`${index} : ${item} (массив: ${arr})`);
// });
// // перебор массива через for in для получения всех индексов
// let arr = ['first', 'second', 'third', 'fourth', 'fivth'];
// for (const key in arr) {
//   console.log(key);
// };
// // перебор массива через for of для получения всех значений элементов
// let arr = ['first', 'second', 'third', 'fourth', 'fivth'];
// for (const key of arr) {
//   console.log(key);
// };

// // перевод строки в массив разделяя элементы через запятую
// let ans = prompt('', ''),
//   arr = [];
// arr = ans.split(',');
// console.log(arr);

// // перевод массива в строку разделяя элементы через запятую
// let arr = ['first', 'second', 'third', 'fourth', 'fivth'],
//   arrToString = arr.join(', ');
// console.log(arr);
// console.log(arrToString);

// // сортировка по алфавиту
// let arr = ['first', 'second', 'third', 'fourth', 'fivth'],
//   sortArr = arr.sort();
// console.log(arr);

// // сортировка как строку
// let arr = [1, 2, 3, 11, 122, 23, 31, 29, 37],
//   sortArr = arr.sort();
// console.log(arr);

// // сортировка по возрастанию
// let arr = [1, 2, 3, 11, 122, 23, 31, 29, 37],
//   sortArr = arr.sort(compareNum);
// function compareNum(a, b) {
//   return a - b;
// }
// console.log(arr);

// // ООП
// let solder = {
//   health: 500,
//   armor: 100,
//   power: 50,
//   skills: 'sniper',
// };

// let johnSolder = {
//   health: 300,
//   power: 30,
// };

// johnSolder.__proto__ = solder;

// console.log(johnSolder);
// console.log(johnSolder.power);
// console.log(johnSolder.health);
// console.log(johnSolder.armor);
// console.log(johnSolder.skills);