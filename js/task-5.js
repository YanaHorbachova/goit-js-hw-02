let price;
let country;
let message 
let countryName; 

country = prompt('Выберите страну доставки');
if (country !== null) {
  country = country.toLowerCase();
  countryName = country[0].toUpperCase() + country.slice(1);

    switch (country){
        case 'китай': {
            price = `100 кредитов`
            message = `Доставка в ${countryName} будет стоить ${price} кредитов`
            break;
            }

        case 'чили': {
            price = `250 кредитов`
            message = `Доставка в ${countryName} будет стоить ${price} кредитов`
            break;
            }

        case 'австралия': {
            price = `170 кредитов`
            message = `Доставка в ${countryName} будет стоить ${price} кредитов`
            break;
            }

        case 'индия': {
            price = `80 кредитов`
            message = `Доставка в ${countryName} будет стоить ${price} кредитов`
            break;
            }
        
        case 'ямайка': {
            price = `120 кредитов`
            message = `Доставка в ${countryName} будет стоить ${price} кредитов`
            break;
            } 

        default: 
            massage = 'В вашей стране доставка не доступна'
    }
}

alert(message);