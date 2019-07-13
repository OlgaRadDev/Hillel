// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//
// Найти сумму и количество положительных элементов.
//     Найти минимальный элемент массива.
//     Найти максимальный элемент массива.
//     Определить количество отрицательных элементов.
//     Найти количество нечетных положительных элементов.
//     Найти количество четных положительных элементов.
//     Найти сумму четных положительных элементов.
//     Найти сумму нечетных положительных элементов.
//     Найти определить количество элементов, равных 4.

var newArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Найти сумму и количество положительных элементов.
var countPositive = 0;
var sum = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]>0) {
        sum += newArray[i];
        countPositive++;
    }
}
console.log(sum);
console.log(countPositive);

// Найти минимальный элемент массива.
var min = Math.min.apply(null, newArray);
console.log(min);

var lenArray = newArray.length;
var minElm = Infinity;
while (lenArray--) {
    if (Number(newArray[lenArray])<minElm) {
        minElm = Number(newArray[lenArray]);
    }
}
console.log(minElm);

// Найти максимальный элемент массива.
var max = Math.max.apply(null, newArray);
console.log(max);

var lenArray = newArray.length;
var maxElm = -Infinity;
while (lenArray--) {
    if (Number(newArray[lenArray])>maxElm) {
        maxElm = Number(newArray[lenArray]);
    }
}
console.log(maxElm);

// Определить количество отрицательных элементов.
var countNegative = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]<0) {
        countNegative++;
    }
}
console.log(countNegative);

// Найти количество нечетных положительных элементов.
var countOddPositive = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]>0 && newArray[i]%2 !== 0) {
        countOddPositive++;
    }
}
console.log(countOddPositive);

//     Найти количество четных положительных элементов.
var countEvenPositive = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]>0 && newArray[i]%2 === 0) {
        countEvenPositive++;
    }
}
console.log(countEvenPositive);

//     Найти сумму четных положительных элементов.
var sumEvenPositive = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]>0 && newArray[i]%2 === 0) {
        sumEvenPositive += newArray[i];
    }
}
console.log(sumEvenPositive);

//     Найти сумму нечетных положительных элементов.
var sumOddPositive = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i]>0 && newArray[i]%2 !== 0) {
        sumOddPositive += newArray[i];
    }
}
console.log(sumOddPositive);

//     Найти определить количество элементов, равных 4.
var countSpecificNumber = 0;

for (var i = 0; i<newArray.length; i++) {
    if (newArray[i] === 4) {
        countSpecificNumber++;
    }
}
console.log(countSpecificNumber);