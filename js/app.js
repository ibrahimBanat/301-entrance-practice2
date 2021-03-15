'use strict';

// DOM Elements
const form = document.getElementById('frm');
const table = document.getElementById('tb');
const reset = document.getElementById('reset');

const Student = function (studentName, course) {
  this.studentName = studentName;
  this.course = course;
  this.grade = this.randGradeGene(0, 100);
  Student.all.push(this);
};
Student.all = [];

Student.prototype.randGradeGene = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
Student.prototype.addTolocalStorage = function () {
  localStorage.setItem('students', JSON.stringify(Student.all));
};

//Event listners functions decleration
const handleSubmit = function (event) {
  event.preventDefault();
  let name = event.target.name.value;
  let course = event.target.course.value;

  let student = new Student(name, course);
  student.addTolocalStorage();

  tableRender();
  form.reset();
};
const resetFunction = function () {
  localStorage.removeItem('students');
  tableRender();
};
const handleRemove = function (event) {
  if (event.target.matches('.remove')) {
    Student.all.splice(event.target.id, 1);
    if (Student.all.length !== 0) {
      localStorage.setItem('students', JSON.stringify(Student.all));
      tableRender();
    } else {
      localStorage.removeItem('students');
      tableRender();
    }

    // if(localStorage.students.length)
    // if(localStorage.students.length !=){

    // } else {

    // }
  }
};

//rendering function
const tableHeader = function () {
  let tableHead = document.createElement('thead');
  let tableHeadRow = document.createElement('tr');
  tableHead.appendChild(tableHeadRow);

  let tableHeadRowh1 = document.createElement('th');
  tableHeadRowh1.textContent = 'Student Name';
  tableHeadRow.appendChild(tableHeadRowh1);

  let tableHeadRowh2 = document.createElement('th');
  tableHeadRowh2.textContent = 'Student Grade';
  tableHeadRow.appendChild(tableHeadRowh2);

  let tableHeadRowh3 = document.createElement('th');
  tableHeadRowh3.textContent = 'Course';
  tableHeadRow.appendChild(tableHeadRowh3);

  let tableHeadRowh4 = document.createElement('th');
  tableHeadRowh4.textContent = 'Result';
  tableHeadRow.appendChild(tableHeadRowh4);

  let tableHeadRowh5 = document.createElement('th');
  tableHeadRowh5.textContent = 'Remove';
  tableHeadRow.appendChild(tableHeadRowh5);

  table.appendChild(tableHead);
};

const tableRender = function () {
  if (localStorage.students) {
    Student.all = JSON.parse(localStorage.getItem('students'));
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
    Student.all = [];
  }
  table.innerHTML = '';
  //table head render
  tableHeader();
  let tableBody = document.createElement('tbody');
  for (let index = 0; index < Student.all.length; index++) {
    let tableBodyRow = document.createElement('tr');

    let tableBodyRowC1 = document.createElement('td');
    tableBodyRowC1.textContent = `${Student.all[index].studentName}`;
    tableBodyRow.appendChild(tableBodyRowC1);

    let tableBodyRowC2 = document.createElement('td');
    tableBodyRowC2.textContent = `${Student.all[index].grade}`;
    tableBodyRow.appendChild(tableBodyRowC2);

    let tableBodyRowC3 = document.createElement('td');
    tableBodyRowC3.textContent = `${Student.all[index].course}`;
    tableBodyRow.appendChild(tableBodyRowC3);

    if (Number(Student.all[index].grade) > 50) {
      let tableBodyRowC4 = document.createElement('td');
      tableBodyRowC4.textContent = 'pass';
      tableBodyRowC4.style.color = 'green';
      tableBodyRow.appendChild(tableBodyRowC4);
    } else {
      let tableBodyRowC4 = document.createElement('td');
      tableBodyRowC4.textContent = 'fail';
      tableBodyRowC4.style.color = 'red';
      tableBodyRow.appendChild(tableBodyRowC4);
    }

    let tableBodyRowC5 = document.createElement('td');
    tableBodyRowC5.innerHTML = `<span class="remove" id="${index}">X</span>`;
    tableBodyRow.appendChild(tableBodyRowC5);

    tableBody.appendChild(tableBodyRow);
  }
  table.appendChild(tableBody);
};
tableRender();

// Event Listners
reset.addEventListener('click', resetFunction);
form.addEventListener('submit', handleSubmit);
table.addEventListener('click', handleRemove);
