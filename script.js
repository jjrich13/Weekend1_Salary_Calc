console.log('JS');

$(document).ready(readyNow)

function readyNow(){
    console.log('JQ');
    
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

function addClickHandlers(){
    //Handle submit click
    $('#submit').on('click', handleSubmit);
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
    //clear DOM?
    //loop through array and push to DOM
    //Sum Salaries and divide by 12 months
    //clear inputs
    

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