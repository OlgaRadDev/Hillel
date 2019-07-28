// Визуальный счетчик
// создать 5 квадратов  изначально в них отображается 0
// в каждом квадратов создать кнопки "+" и "-"
// при клике на кнопку "+" цифра внутри квадрата должна увеличиваться
// при клике на кнопку "-" цифра внутри квадрата должна уменьшаться

function createCounter(container, plusBtn, minusBtn) {
    var count = container.innerHTML

    plusBtn.onclick = function () {
        count++;
        container.innerHTML = count;
    };
    minusBtn.onclick = function () {
        if(count >0 ){
            count--;
            container.innerHTML = count;
        }else{
            console.log(false)
        }
    }
}

var plusBtn = document.querySelectorAll(".plus");
var minusBtn = document.querySelectorAll(".minus");
var container = document.querySelectorAll(".clicks");

for(var i = 0; i<plusBtn.length; i++){
    createCounter(container[i], plusBtn[i], minusBtn[i]);
}


