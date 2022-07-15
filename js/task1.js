function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet
// и выводим результат в консоль
console.log(greet("Mango"));
// Добро пожаловать Mango.

// Выводим функцию greet
// в консоль не вызывая её
console.log(greet);
/*
ƒ greet() {
     return `Добро пожаловать ${name}.`;
}
*/

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line
console.log(makePizza)

const result = (makePizza(null));
const pointer = makePizza;