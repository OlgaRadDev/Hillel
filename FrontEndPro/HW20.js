// 1) В html создать 12 div
//
// 2) С помощью js найти эти div
//
// 3) Всем четным div добавить текст "Я четный элемент №(добавить сюда номер
// по порядку)"
//
// 4) Всем нечетным div добавить текст "Я нечетный элемент №(добавить сюда
// номер по порядку)"

//
var elements = document.getElementsByTagName('div');
// var countOdd = 0;
// var countEven = 0;
for (var i = 0; i <= elements.length; i++) {

    if (i % 2 !== 0) {
        // countOdd++;
        elements[i].innerText = 'Я нечетный элемент № ' + ((i+1)/2).toFixed();
    }
    else {
        // countEven++;
        elements[i].innerText = 'Я четный элемент № ' + ((i+1)/2).toFixed();
    }

}




//
// var elements = document.getElementsByTagName('div');
// console.dir(elements);
//
// var countOdd = 0;
// var countEven = 0;
// for (var key in elements) {
//     console.log(key);
//     if (key%2 !== 0) {
//         countOdd++;
//        elements[key].innerText = 'Я нечетный элемент № '+ countOdd;
//     }else {
//         countEven++;
//         elements[key].innerText =  'Я четный элемент № '+countEven;
//     }
// }

