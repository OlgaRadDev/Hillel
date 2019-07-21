// Группа студентов
// 1) Реализовать функцию которая принимает имя и возраст студента и возвращает
// объект с полями name, age, marks(пустой массив);
//
// 2)Реализовать функцию которая будет управлять студентами
//
//
//
// функция должна принимать массив студентов созданных с помощью предыдущей
// функции должна возвращать объект у которого будут следующие методы:
//     добавления нового студента
// удаление студента по имени
// добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
// получение средней оценки студента по имени
// получение средней оценки группы за занятие
// получение отсортированного по именам списка студентов
// получение отсортированного по среднему балу списка студентов


function createStudent(name, age) {

    var obj = {
        name: name,
        age: age,
        marks: []
    };
    return obj;
}


function manageStudents(students) {
    return {
        addNewStudents: function (name, age) {
            students[students.length] = createStudent(name, age);
        },
        deleteStudentByName: function (name) {
            for (var i = 0; i<students.length; i++) {
                if (students[i].name === name) {
                    students.splice(i, 1);
                }
            }
            // var index = students.findIndex(obj => obj.name === name);
            // // console.log(index)
            // students.splice(index, 1);
        },
        markForLesson: function (name, number, value) {
            for (var i = 0; i < students.length; i++) {
                if (students[i].name === name) {
                    students[i].marks[number - 1] = value;
                }
            }
        },
        averageMarkStudent: function (name) {
            var sum = 0;
            var count = 0;
            var average;

            for (var i = 0; i < students.length; i++) {
                if (students[i].name === name) {
                    for (var j = 0; j < students[i].marks.length; j++) {
                        sum += students[i].marks[j];
                        count++;
                    }
                }
            }
            average = sum / count;
            return average;
        },
        averageMarkGroupForLesson: function (students, number) {
            var sum = 0;
            var count = 0;
            var average;
            for (var i = 0; i < students.length; i++) {
                sum+=students[i].marks[number-1];
                count++;
            }
            average = sum / count;
            return average;
        },

        sortListByNameStudents: function (students) {
            students.sort(function (a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        },
        sortListByAverageMark: function (students) {
            var manager = this;
            students.sort(function (a, b) {
                var firstStudentAVG = manager.averageMarkStudent(a.name);
                var secondStudentAVG = manager.averageMarkStudent(b.name);
                if (firstStudentAVG < secondStudentAVG)
                    return 1;
                if (firstStudentAVG > secondStudentAVG)
                    return -1;
                return 0;
            });
        }
    }
}

var studentsArr = [];
var studentManager = manageStudents(studentsArr);

studentManager.addNewStudents('Alex', 25);
studentManager.addNewStudents('Anna', 20);
studentManager.addNewStudents('Mark', 21);
studentManager.addNewStudents('Eva', 22);
studentManager.addNewStudents('Andrew', 19);
studentManager.addNewStudents('Sem', 23);
console.log('Добавления нового студента')
console.log(studentsArr);

console.log('Удаление студента по имени')
studentManager.deleteStudentByName("Sem")
console.log(studentsArr);

// console.log('Добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)')
studentManager.markForLesson('Alex', 1, 10);
studentManager.markForLesson('Alex', 4, 5);
studentManager.markForLesson('Alex', 2, 11);
studentManager.markForLesson('Alex', 3, 7);
studentManager.markForLesson('Alex', 5, 8);

studentManager.markForLesson('Mark', 1, 6);
studentManager.markForLesson('Mark', 4, 7);
studentManager.markForLesson('Mark', 2, 12);
studentManager.markForLesson('Mark', 3, 5);
studentManager.markForLesson('Mark', 5, 9);

studentManager.markForLesson('Anna', 1, 6);
studentManager.markForLesson('Anna', 4, 7);
studentManager.markForLesson('Anna', 2, 2);
studentManager.markForLesson('Anna', 3, 5);
studentManager.markForLesson('Anna', 5, 9);

studentManager.markForLesson('Eva', 1, 6);
studentManager.markForLesson('Eva', 4, 7);
studentManager.markForLesson('Eva', 2, 2);
studentManager.markForLesson('Eva', 3, 10);
studentManager.markForLesson('Eva', 5, 9);

studentManager.markForLesson('Andrew', 1, 6);
studentManager.markForLesson('Andrew', 4, 7);
studentManager.markForLesson('Andrew', 2, 11);
studentManager.markForLesson('Andrew', 3, 10);
studentManager.markForLesson('Andrew', 5, 9);

console.log('Получение средней оценки студента по имени')
var avg = studentManager.averageMarkStudent('Alex');
console.log(avg);

console.log('Получение средней оценки группы за занятие')
var avgGroup =studentManager.averageMarkGroupForLesson(studentsArr, 2);
console.log(avgGroup);

console.log('Получение отсортированного по именам списка студентов')
studentManager.sortListByNameStudents(studentsArr);
console.log(studentsArr);

console.log('Получение отсортированного по среднему балу списка студентов')
studentManager.sortListByAverageMark(studentsArr);
console.log(studentsArr);



