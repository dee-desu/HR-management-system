// //     function ID(put) {
// //     let firstId = 1000;
// //     return firstId + put;
// // }

// // function randSal(min, max) {
// //     let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
// //     return initialSalary;
// // }

// //   function netSalary(initialSalary) {
// //     let finalSalary = initialSalary * 0.075;
// //     return finalSalary;  
// // }

// //   const employee1 = {
// //     employeeId: function() {return ID(0)},
// //     fullName: "Ghazi Samer",
// //     department: "Administration",
// //     level: "Senior",
// //     imageUrl: 
// //     salary: function() {return randSal(1500, 2000)}
// //   }


// //   function printInConsole(object){
// //     console.log("Employee ID: " + (object.employeeId()));
// //     console.log("Employee Name: " + (object.fullName));
// //     console.log("Employee Salary: " + (object.salary()));
// //   }

// //   printInConsole(employee1);


// //   const employee2 = {
// //     employeeId: function() {return ID(1)},
// //     fullName: "Lana Ali",
// //     department: "Finance",
// //     level: "Senior",
// //     imageUrl: 
// //     salary: function() {return randSal(1500, 2000)}
// //   }


// //   function printInConsole(object){
// //     console.log("Employee ID: " + (object.employeeId()));
// //     console.log("Employee Name: " + (object.fullName));
// //     console.log("Employee Salary: " + (object.salary()));
// //   }

  
// // printInConsole(employee2);


// // const employee3 = {
// //   employeeId: function() {return ID(2)},
// //   fullName: "Tamara Ayoub	",
// //   department: "Marketing	",
// //   level: "Senior",
// //   imageUrl: 
// //   salary: function() {return randSal(1500, 2000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee3);



// // const employee4 = {
// //   employeeId: function() {return ID(3)},
// //   fullName: "Safi Walid		",
// //   department: "Administration	",
// //   level: "Mid-Senior",

// //   imageUrl: 
// //   salary: function() {return randSal(1000, 1500)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee4);


// // const employee5 = {
// //   employeeId: function() {return ID(4)},
// //   fullName: "Omar Zaid	",
// //   department: "Development",
// //   level: "Senior",

// //   imageUrl: 
// //   salary: function() {return randSal(1500, 2000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee5);

// // const employee6 = {
// //   employeeId: function() {return ID(5)},
// //   fullName: "Rana Saleh		",
// //   department: "Development	",
// //   level: "Junior  ",

// //   imageUrl: 
// //   salary: function() {return randSal(500,1000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee6);



// // const employee7 = {
// //   employeeId: function() {return ID(6)},
// //   fullName: "	Hadi Ahmad	",
// //   department: "Finance	",
// //   level: "Mid-Senior  ",

// //   imageUrl: 
// //   salary: function() {return randSal(1000,15000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee5);


// 'use strict'
// //const body = document.getElementsByTagName('body');

// function generateRandomId() {
//     let randomId = Math.floor((Math.random() * 10000) - 1);
//     if (randomId < 1000 && randomId >= 100){
//         randomId *= 10;
//         return randomId;
//     } else if (randomId < 100 && randomId >= 10){
//         randomId *= 100;
//         return randomId;
//     } else if (randomId < 10 && randomId >= 1){
//         randomId *= 1000;
//         return randomId;
//     } else if (randomId >= 10000){
//         return randomId;
//     }
//     return randomId;
// }

// let startingID = 999;
// function idNumber(){
//     startingID++;
//     return startingID;
// }

// function genRandSal(employeeLevel) {
//     let min = 0;
//     let max = 0;
//     if (employeeLevel == "Junior") {
//         min = 500;
//         max = 1000;
//         let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
//         return randomSalary;
//     } else if (employeeLevel == "Mid-Senior") {
//         min = 1000;
//         max = 1500;
//         let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
//         return randomSalary;
//     } else if (employeeLevel == "Senior") {
//         min = 1500;
//         max = 2000;
//         let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
//         return randomSalary;
//     }
//    // return randomSalary;
// }

// function taxSal(level) {
//     let salary = genRandSal(level);
//     let netSalary = Math.floor(salary*0.925);
//     return netSalary;
// }

// const employees=[];

// function EmployeeData(employeeId,fullName,department,level,imageUrl){

//     this.employeeId=employeeId;
//     this.employeeId = function(){return idNumber()}
//     this.fullName=fullName;
//     this.department=department;
//     this.level=level;
//     this.imageUrl=imageUrl;
//     this.salary = function(){return taxSal(this.level)};
    
//     employees.push(this);

// }



// /*EmployeeData.prototype.salary=function(){
// (this.level.toLowerCase()==="senior")?this.salary = randSal(1500,2000):
// (this.level==="mid senior")?this.salary = randSal(1000,1500):
// this.salary = randSal(500,1000)

// employees.push(this.salary);

// }*/



//     //EmployeeData.prototype.netsalary=function(){
//       //  this.netsalary=Math.floor(this.salary - (this.salary * 0.925));
//        // employees.push(this.netsalary);

//     // }


//     /*EmployeeData.prototype.printinfo= function(){
//       //  document.write(`<p>  fullName: ${this.fullName}: first salary:   ${this.salary} : net salary = ${this.netsalary} </p>`);
//         //document.write(`<img src=${this.imageUrl} alt=${this.fullName}>`);
//         const divEl = document.createElement('div');
//         body[0].appendChild(divEl);

//         const pEl = document.createElement('p');
//         pEl.textContent = `Name : ${this.fullName} : first salary ${this.salary} : net salary = ${this.netsalary}`;
//         divEl.appendChild(pEl);

//         const imgEl = document.createElement('img');
//         imgEl.src = this.imageUrl;
//         imgEl.alt = this.fullName;
//         body[0].appendChild(imgEl)
//        // imgEl.style.justifyContent= center

//        // divEl.appendChild(imgEl);

// }*/

 
// EmployeeData.prototype.writeToHTML = function() {
//     let docElement = document.getElementById("employeeCARDmain");

//     let firstCont = document.createElement("div");
//     firstCont.setAttribute("class", "inner-employees-cards-section");

//     let secondCont = document.createElement("div");
//     secondCont.setAttribute("class", "test");
//     firstCont.appendChild(secondCont);

//     let createImg = document.createElement("img");
//     createImg.src = `${this.imageUrl}`;
//     createImg.alt = `employee pic`;
//     secondCont.appendChild(createImg);

//     let employeeNameP = document.createElement("p");
//     employeeNameP.setAttribute("class", "employee-name");
//     employeeNameP.textContent = `${this.fullName}`;
//     firstCont.appendChild(employeeNameP);

//     let employeeIdP = document.createElement("p");
//     employeeIdP.setAttribute("class", "employee-id");
//     employeeIdP.textContent = `ID: ${this.employeeId()}`;
//     firstCont.appendChild(employeeIdP);

//     let thirdCont = document.createElement("div");
//     thirdCont.setAttribute("class", "to-hide");
//     firstCont.appendChild(thirdCont);

//     let employeeDepartmentP = document.createElement("p");
//     employeeDepartmentP.setAttribute("class", "to-be-hidden");
//     employeeDepartmentP.textContent = `Department / ${this.department}`;
//     thirdCont.appendChild(employeeDepartmentP);

//     let employeeLevelP = document.createElement("p");
//     employeeLevelP.setAttribute("class", "to-be-hidden");
//     employeeLevelP.textContent = `${this.level}`;
//     thirdCont.appendChild(employeeLevelP);

//     let employeeSalaryP = document.createElement("p");
//     employeeSalaryP.setAttribute("class", "to-be-hidden");
//     employeeSalaryP.textContent = `Salary / ${this.salary()} JD`;
//     thirdCont.appendChild(employeeSalaryP);
    
//     let employeeDeprtmentsAdministration = document.getElementById("administration");
//     let employeeDeprtmentsDevelopment = document.getElementById("development");
//     let employeeDeprtmentsFinance = document.getElementById("finance");
//     let employeeDeprtmentsMarketing = document.getElementById("marketing");
    
//      if (this.department == "Administration"){
//         let finalDestination = docElement.appendChild(firstCont);
//         employeeDeprtmentsAdministration.appendChild(finalDestination);
//      } else if (this.department == "Development") {
//         let finalDestination = docElement.appendChild(firstCont);
//         employeeDeprtmentsDevelopment.appendChild(finalDestination);
//      } else if (this.department == "Finance") {
//         let finalDestination = docElement.appendChild(firstCont);
//         employeeDeprtmentsFinance.appendChild(finalDestination);
//      } else if (this.department == "Marketing") {
//         let finalDestination = docElement.appendChild(firstCont);
//         employeeDeprtmentsMarketing.appendChild(finalDestination);
//      }

// }

// //Objects

// const GhaziSamer = new EmployeeData("GhaziSamer","Administration","senior","./images/ghazi.jpg" );
// const     LanaAli = new EmployeeData("LanaAli","Finance","senior","./images/Lana.jpg");
// const  TamaraAyoub= new EmployeeData("TamaraAyoub","Marketing","senior","./images/Tamara.jpg");
// const  SafiWalid= new EmployeeData("SafiWalid","Administration","mid senior","./images/Safi.jpg");
// const OmarZaid = new EmployeeData("OmarZaid","Development","senior","./images/Omar.jpg");
// const RanaSaleh = new EmployeeData("RanaSaleh","Development","Junior","./images/Rana.jpg");
// const  HadiAhmad= new EmployeeData("HadiAhmad","Finance","mid senior","./images/Hadi.jpg");

// /*GhaziSamer.printinfo();
 
// console.log(document)
// console.dir(document)*/

// /*for( let i=0; i <  employees.length; i++){
//     if(typeof employees[i]!=="number"){
//         console.log(i,employees[i]);

//     employees[i].salary();
//     employees[i].netsalary();
//     employees[i].printinfo();
// }
// }*/

// //function randSal(min, max) {
//   //  return Math.floor(Math.random() * (max - min + 1) ) + min;
// //}

// for (let i = 0; i < employees.length; i++){
//     console.log(`Employee name: ${employees[i].fullName} `);
//     console.log(`Department: ${employees[i].department} `);
//     console.log(`Employee salary: ${employees[i].salary()} `);
//     console.log("-----------------------");
//  }

// for (let j = 0; j < employees.length; j++){
//     employees[j].writeToHTML();
// }

'use strict';



function generateRandomId() {
    let randomId = Math.floor((Math.random() * 10000) - 1);
    if (randomId < 1000 && randomId >= 100){
        randomId *= 10;
        return randomId;
    } else if (randomId < 100 && randomId >= 10){
        randomId *= 100;
        return randomId;
    } else if (randomId < 10 && randomId >= 1){
        randomId *= 1000;
        return randomId;
    } else if (randomId >= 10000){
        return randomId;
    }
    return randomId;
}



let ID = 999;
function idNumber(){
    ID++;
    return ID;
}


function genRandSal(employeeLevel) {
    let min = 0;
    let max = 0;
    if (employeeLevel == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    }
    return randomSalary;
}


function taxSal(level) {
    let salary = genRandSal(level);
    let netSalary = Math.floor(salary*0.925);
    return netSalary;
}





const allEmployees = [];
function Employee(fullName, department, level, imageUrl){
    this.employeeId = function(){return idNumber()}
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = function(){return taxSal(this.level)};
    allEmployees.push(this);
    
}

// Prototype to write in HTML 

Employee.prototype.writeToHTML = function() {
    let docElement = document.getElementById("employeeCARDmain");

    let firstCont = document.createElement("div");
    firstCont.setAttribute("class", "inner-employees-cards-section");

    let secondCont = document.createElement("div");
    secondCont.setAttribute("class", "test");
    firstCont.appendChild(secondCont);

    let createImg = document.createElement("img");
    createImg.src = `${this.imageUrl}`;
    createImg.alt = `employee pfp`;
    secondCont.appendChild(createImg);

    let employeeNameP = document.createElement("p");
    employeeNameP.setAttribute("class", "employee-name");
    employeeNameP.textContent = `${this.fullName}`;
    firstCont.appendChild(employeeNameP);

    let employeeIdP = document.createElement("p");
    employeeIdP.setAttribute("class", "employee-id");
    employeeIdP.textContent = `ID: ${this.employeeId()}`;
    firstCont.appendChild(employeeIdP);

    let thirdCont = document.createElement("div");
    thirdCont.setAttribute("class", "to-hide");
    firstCont.appendChild(thirdCont);

    let employeeDepartmentP = document.createElement("p");
    employeeDepartmentP.setAttribute("class", "to-be-hidden");
    employeeDepartmentP.textContent = `Department / ${this.department}`;
    thirdCont.appendChild(employeeDepartmentP);

    let employeeLevelP = document.createElement("p");
    employeeLevelP.setAttribute("class", "to-be-hidden");
    employeeLevelP.textContent = `${this.level}`;
    thirdCont.appendChild(employeeLevelP);

    let employeeSalaryP = document.createElement("p");
    employeeSalaryP.setAttribute("class", "to-be-hidden");
    employeeSalaryP.textContent = `Salary / ${this.salary()} JD`;
    thirdCont.appendChild(employeeSalaryP);
    
    let employeeDeprtmentsAdministration = document.getElementById("administration");
    let employeeDeprtmentsDevelopment = document.getElementById("development");
    let employeeDeprtmentsFinance = document.getElementById("finance");
    let employeeDeprtmentsMarketing = document.getElementById("marketing");
    
     if (this.department == "Administration"){
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsAdministration.appendChild(finalDestination);
     } else if (this.department == "Development") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsDevelopment.appendChild(finalDestination);
     } else if (this.department == "Finance") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsFinance.appendChild(finalDestination);
     } else if (this.department == "Marketing") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsMarketing.appendChild(finalDestination);
     }

}

// Employees Objects

const ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");
const lanaAli = new Employee("Lana Ali", "Finance", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true");
const tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const safiWalid = new Employee("Safi Walid	", "Administration", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
const omarZaid = new Employee("Omar Zaid", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
const ranaSaleh = new Employee("Rana Saleh", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true");
const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");

 



for (let i = 0; i < allEmployees.length; i++){
    console.log(`Employee name: ${allEmployees[i].fullName} `);
    console.log(`Department: ${allEmployees[i].department} `);
    console.log(`Employee salary: ${allEmployees[i].salary()} `);
    console.log(`Employee level: ${allEmployees[i].level} `);
    console.log("//////////////////////////");
 }


for (let j = 0; j < allEmployees.length; j++){
    allEmployees[j].writeToHTML();
}

