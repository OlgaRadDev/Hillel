var name = prompt("Введите ваше имя");

// switch (name) {
//     case 'Денис':
//         alert( 'Добрый день, учитель' );
//         break;
//
//     case 'Алиса':
//     case 'Иван':
//     case 'Анастасия':
//     case 'Андрей':
//         alert( 'Привет, одногрупник' );
//         break;
//
//     default:
//         alert( 'Ты не из нашей песочницы!' );
// }

if (name==='Денис') {
    alert('Добрый день, учитель');
}else if (name=='Алиса'|| name=='Иван'|| name=='Анастасия'|| name=='Андрей') {
    alert('Привет, одногрупник');
}else {
    alert('Ты не из нашей песочницы!');
}
