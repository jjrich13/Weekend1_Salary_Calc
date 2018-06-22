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

let employees = [];

function addClickHandlers(){
    //Handle submit click
    $('#submit').on('click', handleSubmit)
}

function handleSubmit(){
    //test
    // console.log('Clicked!');
    
    //collect employee info
    collectEmployeeInfo();
    //push to array
    //clear DOM?
    //loop through array and push to DOM
    //Sum Salaries and divide by 12 months
    //clear inputs
    

}

function collectEmployeeInfo(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNum = $('#idNum').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
}
