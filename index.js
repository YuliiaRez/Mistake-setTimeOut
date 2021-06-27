'use strict';
const list = document.querySelector('.list');
const list1 = document.querySelector('ul');
setTimeout(() => {
    list.innerHTML += `<li>Hi!</li>`
}, 50);
const liItem = document.querySelector('li');
console.log(liItem);
list1.innerHTML += `<li>Hello!</li>`;
const listItem1 = document.querySelector('li');
console.log(listItem1);
