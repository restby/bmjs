'use strict';

const box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  heart = document.querySelector('#heart'),
  wrapper = document.querySelector('.wrapper');
// console.log(box);
// console.log(btn); //получает HTML коллекцию, которую можно пеербрать циклом "for"
// console.log(circle);
// console.log(hearts); //получает NodeList, который можно пеербрать циклом "forEach"
// console.log(heart);


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '50%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'purple';
// }

// hearts.forEach(element => {
//   element.style.backgroundColor = 'yellow';
// });

let div = document.createElement('div'); // создание элемента с названием тега
let text = document.createTextNode('Просто текст'); // создание контекста

div.classList.add('black');
// document.body.appendChild(div); //добавление в конец
// wrapper.appendChild(div);

// document.body.insertBefore(div, circle[0]); //добавляет перед указанным элементом

// document.body.removeChild(circle[1]); //удаляет указанный элемент
// wrapper.removeChild(hearts[1]);

// document.body.replaceChild(btn[1], circle[1]); //заменяет новым элементом другой старый элемент

