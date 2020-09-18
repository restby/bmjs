let menuItems = document.querySelectorAll('.menu-item'),
  menu = document.querySelector('.menu'),
  menuItem = document.createElement('li'),
  title = document.querySelector('#title'),
  adv = document.querySelector('.adv'),
  question = prompt('Ваше отношение к технике Apple?'),
  answer = document.querySelector('.prompt');

menu.insertBefore(menuItems[2], menuItems[1]);
menuItem.classList.add('menu-item');
menuItem.textContent = ('Пятый пункт');
menu.appendChild(menuItem);
document.body.style.backgroundImage = ('url(./img/apple_true.jpg)');
title.textContent = ('Мы продаем только подлинную технику Apple');
adv.style.display = 'none';
answer.textContent = (question);