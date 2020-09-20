'use strict';
const startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  buttons = document.querySelectorAll('button');
let money, time, daysInMonth;

buttons.forEach(element => {
  if (!element.classList.contains('start')) {
    element.setAttribute('disabled', true);
  }
});

/**
 * По клику :
 * Запрос данных о доходе в месяц и даты
 * Проверка данных о доходе на не пустое значение, на отмену ответа, на "число"
 * Внесение данных о доходах в свойство объекта
 * Внесение даты в свойство объекта
 * Запись в поле "Доход" с последующим округлением до целого числа
 * Запись в поле "Год" введенной информации
 * Запись в поле "Месяц" введенной информации
 * Запись в поле "День" введенной информации
 */
startBtn.addEventListener('click', function () {
  buttons.forEach(element => {
    element.removeAttribute('disabled');
  });

  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == null || money == '') {
    alert('Поле обязательно для заполнения, введите сумму цифрами!');
    money = +prompt('Ваш бюджет на месяц?', '');
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
  Date.prototype.daysInMonth = function (yearValue, monthValue) {
    return 33 - new Date(yearValue, monthValue - 1, 33).getDate();
  };
  appData.daysInMonth = new Date().daysInMonth(yearValue.value, monthValue.value);
});

/**
 * По клику :
 * Создание счетчика
 * Запуск цикла для перебора всех полей ввода обязательных расходов
 * Получение введенной информации в поле ввода 1 и поле ввода 2(приведение к числу)
 * Проверка на "строку" 1е поле ввода, на кол-во символов, и на не пустое значение обоих полей ввода
 * Если проверка не проходит то возврат к предыдущей итерации цикла
 * Внесение данных о расходах в свойство объекта свойство = поле 1, значение = поле 2
 * Увеличение счетчика на поле 2
 * Внесение данных о расходах в свойство объекта
 */
expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = +expensesItem[++i].value;
    if (typeof (a) === 'string' &&
      a.length < 50 &&
      a !== '' &&
      b !== '') {
      appData.expenses[a] = b;
      sum += b;
    }
  }
  expensesValue.textContent = sum;
});

/**
 * По клику :
 * Запуск цикла для перебора всех полей ввода необязательных расходов
 * Получение введенной информации в поле ввода
 * Проверка на "строку"и на не пустое значение
 * Внесение данных о расходах в свойство объекта
 * Запись в поле "Возможные траты:" из свойства объекта
 */
optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i <= optionalExpensesItem.length; i++) {
    let answer = optionalExpensesItem[i].value;
    if (typeof (answer) === 'string' &&
      answer !== '') {
      console.log('done!');
      appData.optionalExpenses[i] = answer;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
  }
});

/**
 * По клику :
 * Проверка на существующее значение
 * Если проверка не проходит то Запись в поле "Бюджет на 1 день:" и "Уровень дохода" сообщения об ошибке
 * Вычисление дохода на 1 день с округлением до 2 знаков после запятой
 * Запись в поле "Бюджет на 1 день:" из свойства объекта
 * Проверка уровня дохода по критериям * 
 */
countBtn.addEventListener('click', function () {
  if (appData.budget !== undefined) {
    appData.moneyPerDay = ((appData.budget - (+expensesValue.textContent)) / appData.daysInMonth).toFixed(2);
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 50) {
      levelValue.textContent = 'Низкая ЗП!';
    } else if (appData.moneyPerDay > 50 && appData.moneyPerDay < 100) {
      levelValue.textContent = 'Средняя ЗП!';
    } else if (appData.moneyPerDay > 100) {
      levelValue.textContent = 'Хорошая ЗП!';
    } else {
      levelValue.textContent = 'Фигня какая-то!';
    }
  } else {
    dayBudgetValue.textContent = 'Не ввели данные!';
    levelValue.textContent = 'Фигня какая-то!';
  }
});

/**
 * По вводу данных в поле ввода:
 * Создание временной переменной получающих вводимые данные
 * Проверка на строку и на не пустое значение
 * Перевод строки в массив разделяя элементы через запятую
 * Внесение данных о дополнительных доходах в свойство объекта
 */
incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  if (typeof (items) === 'string' &&
    items !== '') {
    appData.income = items.split(', ');
  } else {
    console.log('Вы ввели неверные данные!');
  }
  incomeValue.textContent = appData.income;
});

/**
 * По клику:
 * Изменение статуса свойства объекта "о накоплениях" сравнивая с предыдущим значением
 */
checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

/**
 * Проверка если накопления есть то
 * Создание технической переменной равной значению введенных данных в поле ввода "сумма" и "процент"
 * 
 * Расчет и занесение в объект дохода от накоплений за месяц и за год с округлением до 2 знаков после запятой
 * Запись в поле "Накопления за 1 месяц:" и "Накопления за 1 год:" из свойств объекта
 */
function calcSavings() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
    appData.yearIncome = (sum / 100 * percent).toFixed(2);
    monthSavingsValue.textContent = appData.monthIncome;
    yearSavingsValue.textContent = appData.yearIncome;
  }
}

/**
 * По вводу данных:
 * запуск функции calcSavings
 */
sumValue.addEventListener('input', calcSavings);
percentValue.addEventListener('input', calcSavings);

let appData = {
  budget: money,
  timeData: time,
  daysInMonth: daysInMonth,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};