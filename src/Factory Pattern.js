class Developer{
    constructor(name){
        this.name = name;
        this.role = "Developer"
    }

    work(){
        console.log(`${this.name} is writting some code`);
    }
}

class Tester {
    constructor(name){
        this.name = name;
        this.role = "Tester"
    }
    work(){
        console.log(`${this.name} is testing some software`);
    }
}

class Manager {
    constructor(name){
        this.name = name;
        this.role = "Manager"
    }
    work(){
        console.log(`${this.name} is Manager`);
    }
}

class EmployeeFactory{
    static roles ={
        Manager,
        Developer,
        Tester
    }
    static createEmployee(name,role){
           const EmployeeClass = this.roles[role];
            if(!EmployeeClass){
                throw new Error("Invalid Role");
            }else{
                return new EmployeeClass(name);
            }
    }
};

const emp1 = EmployeeFactory.createEmployee("Vikas","Developer");
emp1.work();


console.log(emp1)