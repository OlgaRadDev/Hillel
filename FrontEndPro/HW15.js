function getNumberOfEven(n) {
    var count = 0;

    while (n>0)
    {
        if ((n % 10) % 2 === 0) {
            count++;
        }
        n = Math.floor(n/10);
    }
    return count;
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));
console.log(getNumberOfEven(123456));
console.log(getNumberOfEven(97531));
console.log(getNumberOfEven(8642));
console.log(getNumberOfEven(24688642));