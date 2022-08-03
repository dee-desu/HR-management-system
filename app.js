function ID(put) {
    let firstId = 1000;
    return firstId + put;
}

function randSal(min, max) {
    let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
    return initialSalary;
}

  function netSalary(initialSalary) {
    let finalSalary = initialSalary * 0.075;
    return finalSalary;  
}

  const employee1 = {
    employeeId: function() {return ID(0)},
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imageUrl: "www.linkedin.com",
    salary: function() {return randSal(1500, 2000)}
  }


  function printInConsole(object){
    console.log("Employee ID: " + (object.employeeId()));
    console.log("Employee Name: " + (object.fullName));
    console.log("Employee Salary: " + (object.salary()));
  }

  printInConsole(employee1);


  const employee2 = {
    employeeId: function() {return ID(1)},
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    imageUrl: "www.linkedin.com",
    salary: function() {return randSal(1500, 2000)}
  }


  function printInConsole(object){
    console.log("Employee ID: " + (object.employeeId()));
    console.log("Employee Name: " + (object.fullName));
    console.log("Employee Salary: " + (object.salary()));
  }

  
printInConsole(employee2);


const employee3 = {
  employeeId: function() {return ID(2)},
  fullName: "Tamara Ayoub	",
  department: "Marketing	",
  level: "Senior",
  imageUrl: "www.linkedin.com",
  salary: function() {return randSal(1500, 2000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee3);



const employee4 = {
  employeeId: function() {return ID(3)},
  fullName: "Safi Walid		",
  department: "Administration	",
  level: "Mid-Senior",

  imageUrl: "www.linkedin.com",
  salary: function() {return randSal(1000, 1500)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee4);


const employee5 = {
  employeeId: function() {return ID(4)},
  fullName: "Omar Zaid	",
  department: "Development",
  level: "Senior",

  imageUrl: "www.linkedin.com",
  salary: function() {return randSal(1500, 2000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee5);

const employee6 = {
  employeeId: function() {return ID(5)},
  fullName: "Rana Saleh		",
  department: "Development	",
  level: "Junior  ",

  imageUrl: "www.linkedin.com",
  salary: function() {return randSal(500,1000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee6);



const employee7 = {
  employeeId: function() {return ID(6)},
  fullName: "	Hadi Ahmad	",
  department: "Finance	",
  level: "Mid-Senior  ",

  imageUrl: "www.linkedin.com",
  salary: function() {return randSal(1000,15000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee5);