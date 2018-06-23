console.log('JS');

$(document).ready(readyNow)

function readyNow(){
    console.log('JQ');
    
    
    
    let newEmployee = new Employee('Post', 'Malone', '45', 'Artist', '25')
    let newerEmployee = new Employee('John', 'Mayer', '8', 'Blues Singer', '40' )
    employees.push(newEmployee);
    employees.push(newerEmployee);
    loopAndPushToDom();

    addClickHandlers();
    displaySumSal();
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
    if (collectEmployeeInfo()) {
        
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
    displaySumSal();
    $('#warning').empty();// this does not seem to work right
    }
    else{
        //append Missing fields into input dealio
        $('#warning').empty();//this isn't really working right now
        $('#inputs').append('<span id="warning">Missing Fields!</span>');
        console.log('missing fields');
    }

}

function collectEmployeeInfo(){
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    idNum = $('#idNum').val();
    jobTitle = $('#jobTitle').val();
    annualSalary = $('#annualSalary').val();
    if (firstName === '' || lastName === '' || idNum === '' || jobTitle === '' || annualSalary === '') {
        return false;
    }
    else{
        return true;
    }
}//makes inputs into varibales to work with/returns false if inputs are missing

function clearInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}// clears the inputs

function loopAndPushToDom(){
    for (let i = 0; i < employees.length; i++) {
        pushToDom(employees[i].firstName, employees[i].lastName, employees[i].idNum, employees[i].jobTitle, employees[i].annualSalary);
        // console.log(employees[i]);
        
    }
}//this function loops though the array and makes one new row for each employee

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
    
}//this function makes one new row

function handleDelete(){
    // $(this).closest('tr').remove();
    // $(this).next().remove();
    //replace this with something that splices the dude/dudette out of the array
    //get the idNum of the employee in this row
    targetIdNum = $(this).closest('tr').find('.idTarget').text();//this gets the value of the row that has the id number to match it to the target
    let i = findIndexByID(targetIdNum);//this finds the index of the employee that matches the row you clciked delete on
    employees.splice(i,1);//this deletes the exact employee from the array
    $('#employeeTable').empty();//this empties the table before a new one is gnerated
    loopAndPushToDom();//this function loops though the array and makes one new row for each employee
    displaySumSal();
    
}

function sumSalaries(){
    let salSum = 0;
    for (let i = 0; i < employees.length; i++) {
        salSum += parseInt(employees[i].annualSalary); 
    }
    return salSum/12;
}//this sums the salaries and divides by 12

function findIndexByID(idNumFind){
    for(let i = 0; i < employees.length; i ++) {
        if(employees[i].idNum == idNumFind) {
            return i;
        }
    }
}

function displaySumSal(){
    $('footer').empty();
    let sumSal = sumSalaries();
    $('footer').append(`<p>${sumSal.toFixed(2)}</p>`)
    if (sumSal > 20000) {
        $('footer').addClass('redBackground')
    }
}//this sums the salaries and then appends it to the footer


//TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO
//add more styling - make it look like the picture
//make it so you cannot click submit if there are missing fields
//return some text that tells you that fields are missing