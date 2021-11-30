// When JS interpretor parses this function, it creates 2 objects, 1 for function
// other for its protorype.
var Person = function (name, gender) {
  this.name = name;
  this.gender = gender
}

Person.prototype.getName = function() {
  return this.name;
}

//Oject per1 has access to the contructor as well as its prototype
var per1 = new Person('test', 'M')
console.log('person', per1)

var Employee = function(name, gender, post) {
  //to access constructor of Person
  Person.call(this, name, gender)
  this.post = post
}

//If we want emp1 object to access Person prototype- 2 ways

//Method 1
//Object.setPrototypeOf(Employee, Person.prototype)
 
var emp1 = new Employee('Ram', 'M', 'manager')
console.log('Emplooyee', emp1)

// Method 2
emp1.__proto__.__proto__ = Person.prototype;  
console.log('name', emp1.getName())

var emp2 = new Employee('Sita', 'F', 'VP')
console.log('Emplooyee2', emp2.getName())


//***********ES6 way of implementation***********
var PersonC = class {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  getName() {
    return this.name
  }
}

// extend will give access to the prototypes of PersonC
var EmployeeC = class extends PersonC {
  constructor(name, gender, post) {
    //to access constructor of PersonC
    super(PersonC)
    this.post = post
  }
}

