class Car{
    constructor(){
        this.color = "Red";
        this.wheels = 4;
    }

    drive(){
        console.log(`Driving a ${this.color} car with ${this.wheels}`);
    }

    clone(){
        const clone = Object.create(Object.getPrototypeOf(this));
        Object.assign(clone,this);
        return clone;
    }
}

const car1 = new Car();
car1.drive()
const car2 = car1.clone();
car2.color = "Blue"
car2.drive()