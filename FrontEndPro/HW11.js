//Цикл
// function checkNumber(number) {
//     if(number%2===0) {
//         alert("YES");
//     } else
//         alert("NO");
// }
// do {
//     var num = +prompt("Enter number: ");
//     checkNumber(num);
// } while (num>0);

//Рекурсия

function checkNum(number) {
    if (number===1) {
        return 1;
    }else if (number>1 && number<2) {
        return 0;
    }else {
        return checkNum(number/2);
        console.log(number)
    }
}
var number = +prompt("Enter number: ");
if (checkNum(number)===1) {
    alert('YES');
} else {
    alert('NO');
}