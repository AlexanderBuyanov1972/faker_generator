// node faker_students.js > ../students.json
// json-server --watch ../students.json
const studentsDB = {students: []};
const faker = require('faker');

function getRandomStudent() {
    const student = {};
    student.id = '' + faker.random.number({min:1, max:1000000000});
    student.name = faker.name.findName();
    student.university = faker.random.arrayElement(['Technion','Bar-Ilan','Ben-Gurion',
        'Tel-Aviv', 'Haifa']);
    student.birthYear = faker.random.number({min: 1980, max: 2000});
    return student;
}
const N_STUDENTS = 100;
for (let i = 0; i <= N_STUDENTS; i++) {
    studentsDB.students.push(getRandomStudent());
}
console.log(JSON.stringify(studentsDB));
