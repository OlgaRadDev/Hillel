// Array compress
// Написать программу, которая сжимает серии массива, состоящего из
// единиц и нулей по следующему принципу, например:
//
// массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1] преобразуется в [4,7,2,4]
// массив [0,0,1,1,1,1,0,1,1,1] преобразуется в [2,4,1,3]

var firstArray = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var secondArray = [0,0,1,1,1,1,0,1,1,1];
//

function compressArray(arr) {
    var compArray = [];

    for (var i = 0; i<arr.length; i++){
        var currentNumber = arr[i];
        var currentCount=1;
        while(arr[i+1] === currentNumber) {
            currentCount++;
            i++;
        }
        compArray+=currentCount+' ';
    }

       return '['+ compArray + ']';
}

console.log(compressArray(firstArray));
console.log(compressArray(secondArray));