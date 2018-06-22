
const studentsUrl = 'http://localhost:3000/students'

function init(){
	loadStudents()
		.then(renderStudents);
};
window.onload = init;
function loadStudents() {
	return fetch(studentsUrl)
				.then(r => r.json());
};

function updateStudentElement(studentElement, student){
	studentElement.querySelector("h1").innerHTML = student.name;
	studentElement.querySelector('div').innerHTML = student.mark;
};

function renderStudents(students){
	console.log(students);
	let template = document.getElementById('student-template');
	let studentElement = template.content.querySelector('.student');
	let studentList = document.getElementById('students');
	studentList.innerHTML = '';
	for (let student of students){
		let studentClone = studentElement.cloneNode(true);
		updateStudentElement(studentClone, student);
		studentList.appendChild(studentClone);
	}
};

var studentsArray = [{name:"Anton", mark:"3"}, {name:"Maksim",mark:"4"}, {name:"Yarik",mark:"5"}];