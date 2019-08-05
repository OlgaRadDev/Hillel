// Активный квадрат
// создать 10 квадратов зеленого цвета
// при клике по клику на любой из квадратов он выделяется красным цветом
// если один уже выделен красным, а кликнули по-другому,
//то выделение с прошлого — снимается, и ставится на тот по котором кликнули


// var elements = document.querySelectorAll(".box");
//
// for (var i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
//     elements[i].addEventListener("click", function () {
//         changeColor(elements, this)
//     });
// }
//
// function changeColor(boxes, box) {
//
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.backgroundColor = '#215d0b';
//     }
//
//     if (box.style.backgroundColor = '#215d0b') {
//         box.style.backgroundColor = 'red';
//
//     } else {
//         box.style.backgroundColor = '#215d0b';
//     }
//
// }


var container = document.getElementById('container');
var selectedSquare;

container.onclick = function (event) {
    var target = event.target;

    if (target.className !== 'box') return;
    changeColorSquare(target);
};

function changeColorSquare(square) {
    if (selectedSquare) {
        selectedSquare.classList.remove('changeColorSquare')
    }

    selectedSquare = square;
    selectedSquare.classList.add('changeColorSquare');
};




