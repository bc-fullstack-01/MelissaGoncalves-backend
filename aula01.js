//********************** criação de objetos --exemplos~ *********************/

// literal
const literal_person = {
    firstName: 'testFirstName',
    lastName: 'testLastName'
  };
  
  console.log(literal_person)
  
  // object
  const object_person = new Object();
  object_person.firstName = 'testFirstName';
  object_person.lastName = 'testLastName';
  
  console.log(object_person)
  
  // function constructor
  function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  const personOne = new Person('testFirstNameOne', 'testLastNameOne');
  
  console.log(personOne)
  
  // Object.create
  const ocPerson = Object.create(personOne, { age: { value: 12} });
  
  console.log(ocPerson); 
  console.log(ocPerson.firstName); 
  console.log(ocPerson.lasttName); 
  
  // Object.assign
  
  const oaPerson = Object.assign({}, { firstName: "fname" }, { lastName: "lastName" });
  
  console.log(oaPerson); 
  
  // class
  
  class CPerson {
    constructor(fname, lname) {
      this.firstName = fname;
      this.lastName = lname;
    }
  }
  
  const cPerson = new CPerson('testFirstName', 'testLastName');
  
  console.log(cPerson.firstName); // testFirstName
  console.log(cPerson.lastName); // testLastName
  
  // Object factoring
  
  function ofPerson(fname, lname) {
    return {
      firstName: fname,
      lastName: lname,
    };
  }
  
  var ofiPerson = ofPerson("name", "last");
  
  // prototype
  
  function pPerson() {
    var o = Object.create(pPerson.prototype);
  
    return o;
  }
  
  pPerson.prototype.firstName = "first";
  pPerson.prototype.lastName = "last";
  
  
  var o = pPerson();
  console.log(o)
  