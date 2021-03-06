const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
}