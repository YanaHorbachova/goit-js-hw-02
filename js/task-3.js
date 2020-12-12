const ADMIN_PASSWORD = 'jqueryismyjam';
let inputPass;
let message;

inputPass = prompt('Введите пароль:');
switch (inputPass) {
  case ADMIN_PASSWORD: {
    message = 'Добро пожаловать!';
    break;
  }

  case null: {
    message = 'Отменено пользователем!';
    break;
  }

  default: {
    message = 'Доступ запрещен, неверный пароль!';
  }
}
alert(message);