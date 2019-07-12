function getNumberOfEven(n) {
    var count = 0;

    for (var i = 0; i < arguments.length; ++i) {
        if (arguments[i] % 2 === 0 && arguments[i] !== 0) {
            count++;
        }

    }
    return count;
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));
console.log(getNumberOfEven(123456));
console.log(getNumberOfEven(97531));
console.log(getNumberOfEven(8642));
console.log(getNumberOfEven(24688642));