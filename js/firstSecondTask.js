'use strict';

let money, time;
// Запрос данных о доходе в месяц
function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == null || money == '') {
    alert('Поле обязательно для заполнения, введите сумму цифрами!');
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  money: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько рублей обойдется?', '');
      if (typeof (a) === 'string' &&
        typeof (a) !== null &&
        typeof (b) !== null &&
        a !== '' &&
        b !== '' &&
        a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.money / 30).toFixed(2);
    alert(`Бюджет на 1 день: ${appData.moneyPerDay} руб.`);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 50) {
      alert('Низкая ЗП!');
      alert(`Ваш Бюджет на 1 день: ${appData.moneyPerDay} руб.`);
    } else if (appData.moneyPerDay > 50 && appData.moneyPerDay < 100) {
      alert('Средняя ЗП!');
      alert(`Ваш Бюджет на 1 день: ${appData.moneyPerDay} руб.`);
    } else if (appData.moneyPerDay > 100) {
      alert('Хорошая ЗП!');
      alert(`Ваш Бюджет на 1 день: ${appData.moneyPerDay} руб.`);
    } else {
      alert('Фигня какая-то!');
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

      appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
      alert(`Доход в месяц с вашего депозита: ${appData.monthIncome} руб.`);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let answer = prompt('Статья необязательных расходов?', '');
      if (typeof (answer) === 'string' &&
        typeof (answer) !== null &&
        answer !== '') {
        console.log('done!');
        appData.optionalExpenses[i] = answer;
      } else {
        i--;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt('Что принесет дополнительный доход (Перечислите через запятую)', '');
    if (typeof (items) === 'string' &&
      typeof (items) !== null &&
      items !== '') {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может еще что-нибудь?', ''));
      appData.income.sort();
    } else {
      console.log('Вы ввели неверные данные!');
    }

    appData.income.forEach(function (element, index) {
      alert(`Способы доп. заработка: ${index + 1} - ${element}`);
    });
  }
};
// Запрос данных о расхдах в месяц
// Расчет о расходах в день
// Определение статуса дохода из суммы расходов в день
// Запрос о накоплениях и расчет месячных доходов с накоплений
// Запрос необязательных статей расходов
// Запрос дополнительных источников дохода

for (const key in appData) {
  console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}

// // Запрос данных о расхдах в месяц
// function chooseExpenses(obj) {
//   for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько рублей обойдется?', '');
//     if (typeof (a) === 'string' &&
//       typeof (a) !== null &&
//       typeof (b) !== null &&
//       a !== "" &&
//       b !== "" &&
//       a.length < 50) {
//       obj.expenses[a] = b;
//     } else {
//       i--;
//     }
//   }
// }
// chooseExpenses(appData);

// // Расчет о расходах в день
// function detectDayBudget(obj, money) {
//   obj.moneyPerDay = (money / 30).toFixed(2);
//   alert(`Бюджет на 1 день: ${obj.moneyPerDay} руб.`);
// }
// detectDayBudget(appData, appData.money);

// // Определение статуса дохода из суммы расходов в день
// function detectLevel(moneyPerDay) {
//   if (moneyPerDay < 50) {
//     alert('Низкая ЗП!');
//     alert(`Ваш Бюджет на 1 день: ${moneyPerDay} руб.`);
//   } else if (moneyPerDay > 50 && moneyPerDay < 100) {
//     alert('Средняя ЗП!');
//     alert(`Ваш Бюджет на 1 день: ${moneyPerDay} руб.`);
//   } else if (moneyPerDay > 100) {
//     alert('Хорошая ЗП!');
//     alert(`Ваш Бюджет на 1 день: ${moneyPerDay} руб.`);
//   } else {
//     alert('Фигня какая-то!');
//   }
// }
// detectLevel(appData.moneyPerDay);

// // Запрос о накоплениях и расчет месячных доходов с накоплений
// function checkSavings(obj, savings) {
//   if (savings == true) {
//     let save = +prompt('Какова сумма накоплений?'),
//       percent = +prompt('Под какой процент?');

//     obj.monthIncome = (save / 100 / 12 * percent).toFixed(2);
//     alert(`Доход в месяц с вашего депозита: ${obj.monthIncome} руб.`);
//   }
// }
// checkSavings(appData, appData.savings);

// // Запрос необязательных статей расходов
// function chooseOptExpenses(obj) {
//   for (let i = 1; i <= 3; i++) {
//     let answer = prompt('Статья необязательных расходов?', '');
//     if (typeof (answer) === 'string' &&
//       typeof (answer) !== null &&
//       answer !== "") {
//       console.log('done!');
//       obj.optionalExpenses[i] = answer;
//     } else {
//       i--;
//     }
//   }
// }
// chooseOptExpenses(appData);
