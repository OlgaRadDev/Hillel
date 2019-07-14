// Создать массив объектов. В каждом объекте должна содержаться информация о человеке: имя, пол,
// год рождения.
// Объектов должно быть 5-10.
//
// посчитать средний возраст
// определить представителей какого пола больше вывести ответы в консоль


var users = [
    {
        name: 'Alex',
        gender: 'male',
        berthYear: '1985'
    },
    {
        name: 'John',
        gender: 'male',
        berthYear: '1980'
    },
    {
        name: 'Max',
        gender: 'male',
        berthYear: '1989'
    },
    {
        name: 'Peter',
        gender: 'male',
        berthYear: '1992'
    },
    {
        name: 'Mike',
        gender: 'male',
        berthYear: '1987'
    },
    {
        name: 'Sam',
        gender: 'male',
        berthYear: '1994'
    },
    {
        name: 'Kate',
        gender: 'female',
        berthYear: '1981'
    },
    {
        name: 'Tina',
        gender: 'female',
        berthYear: '1988'
    },
    {
        name: 'Eva',
        gender: 'female',
        berthYear: '1989'
    },
    {
        name: 'Juliya',
        gender: 'female',
        berthYear: '1987'
    }
];

var currentYear = new Date().getFullYear();
var sumAge = 0;
var sumMale = 0;
var lengthArr = users.length;

for (var i = 0; i<users.length; ++i) {
    if (users[i].gender === 'male')
        sumMale++;
    sumAge += currentYear - users[i].berthYear;
}
var sumFemale = lengthArr - sumMale;
var averageAge = sumAge/lengthArr;
console.log(averageAge);
console.log((sumMale-sumFemale)? (sumMale>sumFemale? 'Men are more': 'Women are more'):
    'Men and Women are equally');



