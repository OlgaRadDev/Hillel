// в ДЗ 19 но и все методы массиваСтуденты на прототипах
// 1) Переделать 19 ДЗ через прототипы
////
// 2) методы:
////     добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
// получение средней оценки студента по имени
// Должны быть методами студента а не группы.
////
// 3) Только теперь функция конструктор группы студентов должна принимать не массив,
// а список студентов через запятую.
////
// 3) Экземпляру созданому с помощью функции конструктора группы студентов
// должны быть доступны не только методы описанные в ДЗ 19 но и все методы массива


function Student(name, age) {
    this.name = name;
    this.age = age;
    this.marks = [];
}

function Group(...students) {
    this.listStudents = students;
}

Group.prototype.addNewStudent = function (student) {
    this.listStudents[this.listStudents.length] = student;
};

Group.prototype.deleteStudentByName = function (name) {
    this.listStudents.splice(this.listStudents.findIndex(isSameStudent), 1);

    function isSameStudent(element) {
        return element.name === name;
    }
};

Group.prototype.addStudentMarkForLesson = function (name, lesson, value) {

    var findStudent = this.listStudents.find(isSameStudent);

    function isSameStudent(element) {
        return element.name === name;
    }

    findStudent.markForLesson(lesson, value);
};

Student.prototype.markForLesson = function (number, value) {
    this.marks[number - 1] = value;
};

Group.prototype.findAverageMark = function (name) {
    var findedStudent = this.listStudents.find(function (element) {
        return element.name === name;
    });

    return findedStudent.getAverageMark();
};

Student.prototype.getAverageMark = function () {

    var sum = this.marks.reduce(function (m1, m2) {
        return m1 + m2;
    });
    return sum / this.marks.length;
};

Student.prototype.getMarkForLesson = function (lessonNumber) {
    return this.marks[lessonNumber - 1];
};

Group.prototype.averageMarkGroupForLesson = function (lessonNum) {
    var sum = 0;
    for (var i = 0; i < this.listStudents.length; i++) {
        var mark = this.listStudents[i].getMarkForLesson(lessonNum);
        sum += mark;
    }
    return sum / this.listStudents.length;
};


Group.prototype.sortListByNameStudents = function () {
    this.listStudents.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
};

Group.prototype.sortListByAverageMark = function () {

    this.listStudents.sort(function (a, b) {
        var firstStudentAVG = a.getAverageMark();
        var secondStudentAVG = b.getAverageMark();

        if (firstStudentAVG < secondStudentAVG)
            return 1;
        if (firstStudentAVG > secondStudentAVG)
            return -1;
        return 0;
    });
};

//FOR TEST!!!

var den = new Student('Denis', 30);
var kate = new Student('Kate', 25);
var ann = new Student('Ann', 28);
var peter = new Student('Peter', 22);
var alex = new Student('Alex', 21);

var group = new Group(den, kate, ann);

console.log('добавление студентов в группу');
group.addNewStudent(peter);
group.addNewStudent(alex);
console.log(group);

console.log('удаление студента по имени');
group.deleteStudentByName('Kate');
console.log(group);

console.log('Добавление оценки студенту за занятие');
group.addStudentMarkForLesson('Denis', 2, 5);
group.addStudentMarkForLesson('Denis', 5, 8);
group.addStudentMarkForLesson('Denis', 4, 5);
group.addStudentMarkForLesson('Denis', 1, 7);
group.addStudentMarkForLesson('Denis', 3, 4);

group.addStudentMarkForLesson('Ann', 2, 8);
group.addStudentMarkForLesson('Ann', 5, 10);
group.addStudentMarkForLesson('Ann', 4, 4);
group.addStudentMarkForLesson('Ann', 1, 5);
group.addStudentMarkForLesson('Ann', 3, 9);

group.addStudentMarkForLesson('Peter', 2, 6);
group.addStudentMarkForLesson('Peter', 5, 8);
group.addStudentMarkForLesson('Peter', 4, 9);
group.addStudentMarkForLesson('Peter', 1, 11);
group.addStudentMarkForLesson('Peter', 3, 5);

group.addStudentMarkForLesson('Alex', 2, 10);
group.addStudentMarkForLesson('Alex', 5, 11);
group.addStudentMarkForLesson('Alex', 4, 8);
group.addStudentMarkForLesson('Alex', 1, 9);
group.addStudentMarkForLesson('Alex', 3, 7);

//
// group.addStudentMarkForLesson('Ann', 1, 7);
// group.addStudentMarkForLesson('Peter', 1, 9);
// group.addStudentMarkForLesson('Alex', 1, 3);

// console.log(den.markForLesson(2,5))

console.log(group);

// console.log(group.listStudents[3]);
console.log('Получение средней оценки студента по имени');
var avgMarkStd = group.findAverageMark('Denis');
console.log(avgMarkStd);

console.log('Получение средней оценки группы за занятие');

var avgMarkGroupStd = group.averageMarkGroupForLesson(1);
console.log(avgMarkGroupStd);

console.log('Получение отсортированного по именам списка студентов');
group.sortListByNameStudents();
console.log(group);

console.log('Получение отсортированного по среднему балу списка студентов');
group.sortListByAverageMark();
console.log(group);
