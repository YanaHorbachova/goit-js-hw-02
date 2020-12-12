let input;
const numbers = [];
let total = 0;

while (true) {
   input = prompt('Введите число');
      
  if (input === null) {
    break;
  }

  input = Number(input);
  const notANamber = Number.isNaN(input);

  if (notANamber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
}

for (const number of numbers) {
    total += number;     
  } 

if (numbers.length !== 0) {        
    alert(`Общая сумма чисел равна ${total}`);
}