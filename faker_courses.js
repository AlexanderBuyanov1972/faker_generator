// node  faker_courses.js > ../courses.json
// json-server --watch ../courses.json

const coursesDB = {courses: []};
const titleArray = ['Java', 'C++', 'QA', 'JavaScript', 'Python', 'Golang', 'Swift', 'PHP', 'Kotlin', 'R'];
const priceArray = [15200, 14300, 13200, 15800, 13400, 12900, 14300, 18500, 16900, 12500];
const descriptionArray = ' very good course';
const lecturersArray = ['Ivanov', 'Petrov', 'Sidorov', 'Makarov', 'Krutov',
    'Ivanova', 'Petrova', 'Sidorova', 'Makarova', 'Krutova'];


    for (let i = 0; i < 10; i++) {
        let course = {};
course.id = (i + 1) + '';
course.title = titleArray[i];
course.price = priceArray[i];
course.description = titleArray[i] + descriptionArray;
course.lecturer = lecturersArray[i];
coursesDB.courses[i] = course;
}
console.log(JSON.stringify(coursesDB));
