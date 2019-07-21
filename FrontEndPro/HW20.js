// 1) В html создать 12 div
//
// 2) С помощью js найти эти div
//
// 3) Всем четным div добавить текст "Я четный элемент №(добавить сюда номер
// по порядку)"
//
// 4) Всем нечетным div добавить текст "Я нечетный элемент №(добавить сюда
// номер по порядку)"


var elements = document.getElementsByTagName('div');
console.dir(elements);
var count = 1;
for (var i =0; i<elements.length; i++) {

    if (count%2 !== 0) {
        elements[i].innerText +=count+' Я нечетный элемент';
    } else {
        elements[i].innerText += count + ' Я четный элемент';
    }
    count++;
}


