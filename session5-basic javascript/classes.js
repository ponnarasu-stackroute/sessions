// define objects 

const emp1 = { firstname: "Eshwar", lastname: "Reddy"};
const emp2 = { firstname: " Naresh", lastname: "M"};

// define function

function getDisplayName(employee){
    return `${employee.firstname} , ${employee.lastname}`  // template literal
}

console.log(getDisplayName(emp1));

console.log(getDisplayName(emp2));

// Defining a class

class Employee{

    constructor(empid, empname){
        this.empid= empid;
        this.empname = empname;
    }

    displayEmpDetails(){
        return `${this.empid} name is ${this.empname}`;
    }
}

//classes are stateful
const empl1 = new Employee('E001','Kumanan');
const empl2 = new Employee('E002', 'Pradeep');

console.log(empl1.displayEmpDetails());
console.log(empl2.displayEmpDetails());

//using prototype we can change the behaviour after instantiating the objects

Employee.prototype.displayEmpDetails =  function(){
    return `${this.empid} name is ${this.empname} belongs to dept- StackRoute`;
}
console.log(empl1.displayEmpDetails());


// inheritence in classes

class TempEmployee extends Employee{
    constructor(empid,empname,wages){
        super(empid,empname); // this will invoke super class constructor
        this.wages = wages;
    }
    displayEmpDetails(){
         let disp =  super.displayEmpDetails();
         return `${disp} earns weekly wages as ${this.wages}`;
    }

}


let nilanjan =  new TempEmployee('T001','Neelanjan',2000);

console.log(nilanjan.displayEmpDetails());