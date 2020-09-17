'use strict';
const money = prompt('Ваш бюджет на месяц?');
const time = prompt('Введите дату в формате YYYY-MM-DD');
const answer1 = prompt('Введите обязательную статью расходов в этом месяце');
const answer2 = prompt('Во сколько обойдется?');
const answer3 = prompt('Введите обязательную статью расходов в этом месяце');
const answer4 = prompt('Во сколько обойдется?');

const appData = {
  money: money,
  time: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [

  ],
  savings: false
};

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(money / 30);
