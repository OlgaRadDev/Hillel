var str = prompt('What is your full name');

function someFunction(str) {
    for (var i = 0; i<str.length; i++) {
        if (str[i - 1] === ' ') {
            var newSymbol = str[i].toUpperCase();
            str = ((str.substr(0, i))).toLowerCase() + newSymbol + (str.substring(i + newSymbol.length)).toLowerCase();
        }
    }
    return str;
}
alert(someFunction(str));