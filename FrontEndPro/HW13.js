var str = prompt('What is your full name');

function someFunction (str) {
    var parts = str.split(' ');
    for (var i = 0; i <parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].substr(1).toLowerCase();
    }
    return parts.join(' ');
}
 alert(someFunction(str));