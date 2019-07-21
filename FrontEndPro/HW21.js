// Генерируем вложений лист
// написать функцию generateList(array)
//
// принимает массив из чисел и массивов чисел, например:
//
// [1,2, [1.1,1.2,1.3] ,3]
// Нужно сгенерировать список из элементов, а если
// в массиве встречается массив то делать вложенный список.

var generateList = function generateList(arr) {
    var ul = document.createElement('ul');

    arr.forEach(function (element) {
        var li = document.createElement('li');
        var childElement;

        if (Array.isArray(element)) {
            childElement = generateList(element);
        } else {
            childElement = document.createTextNode(element);
        }
        li.appendChild(childElement);
        ul.appendChild(li);
    });
    return ul;
};

document.body.appendChild(generateList([1,2,3]));
document.body.appendChild(generateList([1,2, [1.1,1.2,1.3] ,3]));
