// Написать функцию которая сортирует слова в строке по цифре которая находится
// в слове. В рамках данной задачи цифры НЕ могут быть двухзначные и больше
//
// function sortWords(str) {
//     var parts = str.split(' ');
//     var result = [];
//     var number;
//     for (var i = 0; i < parts.length; i++) {
//         for (var j = 0; j < parts[i].length; j++) {
//             if (!isNaN(parts[i][j])) {
//                 number = parts[i][j];
//                 console.log(number);
//                 result[number] = parts[i];
//                 break;
//             }
//         }
//     }
//     return result.join(' ');
// }
//
console.log(sortWords('A3lice 2Bob Er1nst')) // 'Er1nst 2Bob A3lice';
// console.log(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce')) // 'J1amila 2Fiona B3ob A3lice Ig7or';
// console.log(sortWords('Tes1t')) // 'Tes1t';

function sortWords(str) {
    var partsArr = str.slice(' ');
    var numberArr = [];
    var resArr = [];
    var index;
    for(var i=0; i < partsArr.length; i++) {
        if (parseInt((partsArr[i]))) {
            index = partsArr[i];
            // console.log(index);
            numberArr.push(index);
            numberArr.sort(function (a,b) {
                return a-b;

            });
            for (var symbol in partsArr) {
                if (numberArr[i] === partsArr[symbol]) {
                    numberArr[i] = partsArr[i];
                }
            }


            // resArr[index] = partsArr[i];
            // resArr.push(partsArr[i]);
            // console.log(resArr);
            // break;
        }
        

    }

}