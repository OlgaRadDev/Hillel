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


function createStudent (name,age) {

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
           var index = students.findIndex(obj => obj.name === name);
           // console.log(index)
            students.splice(index,1);

            // for (){
            //    if(obj.name === name){
            //        students.splice(i,1)
            //    }
            // }
            
        },
        markForLesson: function (value) {

            
        },
        averageMarkStudent: function () {
            
        },
        averageMarkGr
        oupForLesson:function () {
            
        },
        sortListByNameStudents: function () {
            
        },
        sortListByAverageMark: function () {
            
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

console.log(studentsArr);
studentManager.deleteStudentByName("Anna")
console.log(studentsArr);

//
// studentsArr[0] = createStudent('Alex', 23);
// studentsArr[1] = createStudent('Ann', 21);
// studentsArr[2] = createStudent('Mark', 20);

