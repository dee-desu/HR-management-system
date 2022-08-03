// function ID(put) {
//     let firstId = 1000;
//     return firstId + put;
// }

// function randSal(min, max) {
//     let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
//     return initialSalary;
// }

//   function netSalary(initialSalary) {
//     let finalSalary = initialSalary * 0.075;
//     return finalSalary;  
// }

//   const employee1 = {
//     employeeId: function() {return ID(0)},
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//     imageUrl: "www.linkedin.com",
//     salary: function() {return randSal(1500, 2000)}
//   }


//   function printInConsole(object){
//     console.log("Employee ID: " + (object.employeeId()));
//     console.log("Employee Name: " + (object.fullName));
//     console.log("Employee Salary: " + (object.salary()));
//   }

//   printInConsole(employee1);


//   const employee2 = {
//     employeeId: function() {return ID(1)},
//     fullName: "Lana Ali",
//     department: "Finance",
//     level: "Senior",
//     imageUrl: "www.linkedin.com",
//     salary: function() {return randSal(1500, 2000)}
//   }


//   function printInConsole(object){
//     console.log("Employee ID: " + (object.employeeId()));
//     console.log("Employee Name: " + (object.fullName));
//     console.log("Employee Salary: " + (object.salary()));
//   }

  
// printInConsole(employee2);


// const employee3 = {
//   employeeId: function() {return ID(2)},
//   fullName: "Tamara Ayoub	",
//   department: "Marketing	",
//   level: "Senior",
//   imageUrl: "www.linkedin.com",
//   salary: function() {return randSal(1500, 2000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee3);



// const employee4 = {
//   employeeId: function() {return ID(3)},
//   fullName: "Safi Walid		",
//   department: "Administration	",
//   level: "Mid-Senior",

//   imageUrl: "www.linkedin.com",
//   salary: function() {return randSal(1000, 1500)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee4);


// const employee5 = {
//   employeeId: function() {return ID(4)},
//   fullName: "Omar Zaid	",
//   department: "Development",
//   level: "Senior",

//   imageUrl: "www.linkedin.com",
//   salary: function() {return randSal(1500, 2000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee5);

// const employee6 = {
//   employeeId: function() {return ID(5)},
//   fullName: "Rana Saleh		",
//   department: "Development	",
//   level: "Junior  ",

//   imageUrl: "www.linkedin.com",
//   salary: function() {return randSal(500,1000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee6);



// const employee7 = {
//   employeeId: function() {return ID(6)},
//   fullName: "	Hadi Ahmad	",
//   department: "Finance	",
//   level: "Mid-Senior  ",

//   imageUrl: "www.linkedin.com",
//   salary: function() {return randSal(1000,15000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee5);


"use strict"
const emplyees=[];

function EmployeeData(employeeID,fullname,department,level,imageURL){

    this.employeeID=employeeID;
    this.fullname=fullname;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;

    emplyees.push(this);

}

EmployeeData.prototype.salary=function(){
(this.level.toLowerCase()==="senior")?this.salary = randSal(1500,2000):
(this.level==="mid senior")?this.salary = randSal(1000,1500):
this.salary = randSal(500,1000)

emplyees.push(this.salary);

}




    EmployeeData.prototype.netsalary=function(){
        this.netsalary=Math.floor(this.salary - (this.salary * 0.075));
        emplyees.push(this.netsalary);

    }


    EmployeeData.prototype.printinfo= function(){
        document.write(`<p>  fullname: ${this.fullname}: first salary:   ${this.salary} : net salary = ${this.netsalary} </p>`)

}


const GhaziSamer = new EmployeeData(1000,"GhaziSamer","Administration","senior","www.linkedin.com","");
const     LanaAli = new EmployeeData(1001,"LanaAli","Finance","senior","www.linkedin.com","");
const  TamaraAyoub= new EmployeeData(1002,"TamaraAyoub","Marketing","senior","www.linkedin.com","");
const  SafiWalid= new EmployeeData(1003,"SafiWalid","Administration","mid senior","www.linkedin.com","");
const OmarZaid = new EmployeeData(1004,"OmarZaid","Development","senior","www.linkedin.com","");
const RanaSaleh = new EmployeeData(1005,"RanaSaleh","Development","Junior","www.linkedin.com","");
const  HadiAhmad= new EmployeeData(1006,"HadiAhmad","Finance","mid senior","www.linkedin.com","");

 

for( let i=0; i <  emplyees.length; i++){
    if(typeof emplyees[i]!=="number"){
        console.log(i,emplyees[i]);

    emplyees[i].salary();
    emplyees[i].netsalary();
    emplyees[i].printinfo();
}
}

function randSal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}