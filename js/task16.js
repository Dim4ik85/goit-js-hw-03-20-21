/*
Задача. Расходы на зарплату
Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

Тесты
Объявлена функция countTotalSalary(salaries).
Вызов countTotalSalary({}) возвращает 0.
Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330.
Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400.
Функция учитывает только собственные свойства объекта.
*/

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  
  for (const key in salaries){
    if (salaries.hasOwnProperty(key)){
    totalSalary += salaries[key];
  }
  }
  // Пиши код выше этой строки
  return totalSalary;
}
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
