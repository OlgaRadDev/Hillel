//Цикл

var num = +prompt("Enter number: ");
function checkNumber(number) {
    for (var i = 0; number >1; i++) {
        number /= 2;
    }

    if (number === 1)
        return alert('YES');
    else
        return alert('NO');

}
    checkNumber(num);
    
// Рекурсия

var number = +prompt("Enter number: ");

function checkNum(number) {
    if (number===1) {
        return 1;
    }else if (number>1 && number<2) {
        return 0;
    }else {
        return checkNum(number/2);
    }
}

if (checkNum(number)===1) {
    alert('YES');
} else {
    alert('NO');
}