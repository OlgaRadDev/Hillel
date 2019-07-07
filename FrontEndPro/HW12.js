    var firstNumber = +prompt('Enter the first number');
    var secondNumber = +prompt('Enter the second number');
    var sign = prompt('Enter sign', '');

    function doMath(first, sign, second) {
        switch (sign) {
            case '+':
                var sum = first + second;
                alert('Result: ' + sum);
                break;
            case '-':
                var min = first - second;
                alert('Result: ' + min);
                break;
            case '*':
                var mult = first * second;
                alert('Result: ' + mult);
                break;
            case '/':
                var divide = first / second;
                alert('Result: ' + divide);
                break;
            case '%':
                var module = first % second;
                alert('Result: ' + module);
                break;
            default:
                alert('Wrong number');
        }
    }

    doMath(firstNumber,sign,secondNumber);