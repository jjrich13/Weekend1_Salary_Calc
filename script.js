console.log('JS');

$(document).ready(readyNow)

function readyNow(){
    console.log('JQ');
    
    
    
    let newEmployee = new Employee('Post', 'Malone', '45', 'Artist', '2500000')
    let newerEmployee = new Employee('John', 'Mayer', '8', 'Blues Singer', '4000000' )
    employees.push(newEmployee);
    employees.push(newerEmployee);
    loopAndPushToDom();

    addClickHandlers();
}

//Create class with Constructor
class Employee{
    constructor(firstName, lastName, idNum, jobTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }    
}

//creating array for employees
let employees = [];
// introducing gloabl variables for employee info collection
let firstName;
let lastName;
let idNum;
let jobTitle;
let annualSalary;

let targetIdNum;

function addClickHandlers(){
    //Handle submit click
    $('#submit').on('click', handleSubmit);
    //handle delete 
    $('#employeeTable').on('click', '.deleteButton', handleDelete);
}

function handleSubmit(){
    //test
    // console.log('Clicked!');  IT WORKED
    
    //collect employee info
    collectEmployeeInfo();
    
    //make new employee with input data
    let addedEmployee = new Employee(firstName, lastName, idNum, jobTitle, annualSalary);
    //push to array
    employees.push(addedEmployee);
    //clear inputs
    clearInputs();
    //clear DOM because the whole array will be pushed each time
    $('#employeeTable').empty();
    //loop through array and push to DOM
    loopAndPushToDom();
    //Sum Salaries and divide by 12 months
    console.log(sumSalaries());
    
    

}

function collectEmployeeInfo(){
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    idNum = $('#idNum').val();
    jobTitle = $('#jobTitle').val();
    annualSalary = $('#annualSalary').val();
    
}

function clearInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function loopAndPushToDom(){
    for (let i = 0; i < employees.length; i++) {
        pushToDom(employees[i].firstName, employees[i].lastName, employees[i].idNum, employees[i].jobTitle, employees[i].annualSalary);
        // console.log(employees[i]);
        
    }
}

function pushToDom(firstName, lastName, idNum, jobTitle, annualSalary){
    let $row = $('<tr></tr>');
    $row.append(`<td>${firstName}</td>`);
    $row.append(`<td>${lastName}</td>`);
    $row.append(`<td class="idTarget">${idNum}</td>`);
    $row.append(`<td>${jobTitle}</td>`);
    $row.append(`<td class="sumTarget">${annualSalary}</td>`);
    //add button
    $row.append(`<td><button class="deleteButton">Delete</button></td>`);
    $('#employeeTable').append($row);
    
}

function handleDelete(){
    // $(this).closest('tr').remove();
    // $(this).next().remove();
    //replace this with something that splices the dude/dudette out of the array
    //get the idNum of the employee in this row
    targetIdNum = $(this).closest('tr').find('.idTarget').text();
    let i = findIndexByID(targetIdNum);
    employees.splice(i,1);
    $('#employeeTable').empty();
    loopAndPushToDom();
    
    
}

function sumSalaries(){
    //find the index of the employee, then splice it out of the array, use loop to sum values
    //also use parseInt()
}

function findIndexByID(idNumFind){
    for(let i = 0; i < employees.length; i ++) {
        if(employees[i].idNum == idNumFind) {
            return i;
        }
    }
}