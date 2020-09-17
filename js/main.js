'use strict';
let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  money: money,
  time: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце'),
    b = prompt('Во сколько обойдется?');
  if (typeof (a) !== null &&
    typeof (b) !== null &&
    a !== "" &&
    b !== "" &&
    a.length < 50) {
    console.log('done!');
    appData.expenses[a] = b;
  } else {
    i--;
  }
}

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

appData.moneyPerDay = appData.money / 30;

if (appData.moneyPerDay < 400) {
  console.log('Низкая ЗП!');
  console.log('Бюджет на 1 день: ' + appData.moneyPerDay);
} else if (appData.moneyPerDay > 400 && appData.moneyPerDay < 1000) {
  console.log('Средняя ЗП!');
  console.log('Бюджет на 1 день: ' + appData.moneyPerDay);
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
  console.log('Хорошая ЗП!');
  console.log('Бюджет на 1 день: ' + appData.moneyPerDay);
} else {
  console.log('Фигня какая-то!');
}
