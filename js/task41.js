/*
Задача. Расширяем инвентарь
Задание
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не 
с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.getPotions это метод объекта.
Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.addPotion это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
Для исходного объекта после вызова методаatTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
Значение свойства atTheOldToad.removePotion это метод объекта.
Для исходного объекта после вызова методаatTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова методаatTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.updatePotionName это метод объекта.
Для исходного объекта после вызова методаatTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова методаatTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].

*/
//Условие
// const atTheOldToad = {
//     potions: [
//       { name: 'Зелье скорости', price: 460 },
//       { name: 'Дыхание дракона', price: 780 },
//       { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       if (this.potions.includes(potionName)) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
  
//       this.potions.push(potionName);
//       console.log(addPotion(potionName));
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
  
//       if (potionIndex === -1) {
//         return `Зелья ${potionName} нет в инвентаре!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Зелья ${oldName} нет в инвентаре!`;
//       }
  
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Пиши код выше этой строки
//   };

//Рефакторинг
const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      if (this.potions.includes(potionName)) {
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
  
      this.potions.push(potionName);
    },
    
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        if (potionName === this.potions[i].name) {
          this.potions.splice(i, 1);
           console.log(this.potions[i].name);
          return;
         
        }        
      }
      return `Зелья ${potionName} нет в инвентаре!`;
    },
    updatePotionName(oldName, newName) {
      for (const value of this.potions) {
        value.name === oldName
          ? value.name = newName :
          `Зелья ${oldName} нет в инвентаре!`
      }
    }
    // Пиши код выше этой строки
  };
  console.log(atTheOldToad.potions[0].name);
  



//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));