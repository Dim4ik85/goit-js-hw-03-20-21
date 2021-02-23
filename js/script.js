'use strict';
////var a = 'JavaScript is awesome'.length;
//console.log(a);
/*
const message = 'JavaScript is awesome!';

 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 *
console.log(message); // JavaScript is awesome!
alert(message);

const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);
/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 *
const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);
/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 *
const value = prompt('Please enter a number!');
console.log(typeof value); // 'string'
console.log(value); // '5'
// Операции с числами
/*const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2

// Остаток от деления
console.log(x % y); // 0

// Сложение с заменой (есть и для других операторов)
let valu = 5;

// Аналогично записи value = value + 10;
valu += 10;
console.log(valu); // 15

const x = 5;
const y = 10;
const z = 5;

console.log('x > y:', x > y); // false
console.log('x < y:', x < y); // true
console.log('x < z:', x < z); // false
console.log('x <= z:', x <= z); // true
console.log('x === y:', x === y); // false
console.log('x === z:', x === z); // true
console.log('x !== y:', x !== y); // true
console.log('x !== z:', x !== z); // false

const valueA = '5';
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'

const valueB = 'random string';
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'


console.log(0.1 + 0.2 === 0.3); // false

console.log(0.1 + 0.2); // 0.30000000000000004

let message;
const message = 'Mango ' + 'is' + ' happy';
console.log(message); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + '5';
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + '5' + 5;
console.log(result); // '555'
console.log(typeof result); // string*/

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 
result = 5 + 5 + '5';
console.log(result); // '105'
console.log(typeof result); // string

let cost;
const subscription = 'premium';

if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log('Invalid subscription type');
}

console.log(cost); // 500

const age = 20;
const type = age <= 18 ? 'adult' : 'child';

let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500
*/
/*
let counter = 0;

while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
*/
/*
for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      console.log('Дошли до 5-й итерации, прерываем цикл!',i);
      break;
    }
  }
*/ 
  /*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
*/
//const clients = ['Mango', 'Poly', 'Ajax'];

// length вернет текущую длину массива
/*console.log(clients.length); // 3

clients.length = 5;
console.log(clients.length); // 5
console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clients[4]); // undefined

clients.length = 2;
console.log(clients); // ["Mango", "Poly"]
*/
//const clients = ['Mango', 'Ajax', 'Poly'];

//for (let i = 0; i < clients.length; i += 1) {
//  console.log('Logging clients: ', clients[i]);
//}
/*const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}
// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}
*/
/*const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (const client of clients) {
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   

  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
  message = 'Клиента с таким именем нету в базе данных!';
}

console.log(message); // Клиент с таким именем есть в базе данных!

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][2]); // 9
*/
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

const firstBook = {
  title: 'Последнее королевство',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: 'Сон смешного человека',
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480