const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let creditsNow = 0;
let message;

let imputDroid = prompt ('Какое количество дронов желаете приобрести?')

if (imputDroid !== null ) {
    imputDroid = Number(imputDroid);
    totalPrice = pricePerDroid * imputDroid;  
    creditsNow = credits - totalPrice;
    message =   totalPrice <= credits
        ? `Вы купили ${imputDroid} дроидов, на счету осталось ${creditsNow} кредитов.`
        : 'Недостаточно средств на счету!';
} else { 
    message ='Отменено пользователем!';
}

alert(message);