// variable to exhibit encapsulation
const accountBalance = Symbol();

//abstraction
class God{
    constructor () {
        if (new.target === God){
            throw TypeError("new of abstract class God is not allowed");
        }

    }
}

// class Person is derived from Super Class God
class Person extends God{
    //creating object properties
    constructor(options) {
        super();
        this._name = options._name;
        this.yearOfBirth = options.yearOfBirth;
        this.occupation = options.occupation;
        this[accountBalance] = 20000;

    }

    // creating object functions
    getAge(){
        const date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.yearOfBirth ;
    }
    getOccupation(){
        return this.occupation;
    }
    // setters and getters
    get name(){
        return this._name;
    }
    set name(newName){
        if (this._name  === newName){
            console.log("You cant change your name to your name");

        }
        else{
            this._name = newName;
        }
    }



}
//inheritance
class employee extends  Person{
    constructor(occupation){
        super(occupation,'developer');
    }
    // polymorphism
    getOccupation(){
        return "I am a: " + super.getOccupation();
    }
}

let seyi = new Person({
    _name:"seyi",
    yearOfBirth:1993,
    occupation:"unemployed"
});

//encapsulation: should return undefined
console.log(seyi.accountBalance);


console.log(seyi.getAge());
console.log(seyi.name);
seyi.name = "ade";
console.log(seyi);

let ade = new employee({
    _name:"seyi",
    yearOfBirth:1993,
    occupation:"developer"
});

console.log(ade.getOccupation());

