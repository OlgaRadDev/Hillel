    var firstNumber = +prompt('Enter the first number');
    var secondNumber = +prompt('Enter the second number');
    var sign = prompt('Enter sign', '');

    function doMath(first, sign, second) {
        switch (sign) {
            case '+':
                alert('Result: ' + (first + second));
                break;
            case '-':
                alert('Result: ' + (first - second));
                break;
            case '*':
                alert('Result: ' + (first * second));
                break;
            case '/':
                alert('Result: ' + (first / second));
                break;
            case '%':
                alert('Result: ' + (first % second));
                break;
            default:
                alert('Wrong number');
        }
    }

    doMath(firstNumber,sign,secondNumber);