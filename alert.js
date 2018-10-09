var userName = prompt('Кто пришёл?', '');

if (userName == 'Admin') {

  var pass = prompt('Пароль?', '');

  if (pass == 'Самый сложный пароль') {
    alert( 'Добро пожаловать!' );
  } else if (pass == null) { // (*)
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }

} else if (userName == null) { // (**)
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );

}