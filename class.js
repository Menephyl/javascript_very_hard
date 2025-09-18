/*
CLASSES 

*/

// const person = {
//     name: "Rodolfo",
//     age: 28,
//     talk: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// class Person{
//     name;
//     age;
//     talk(){
//         console.log(`Hello, my name is ${this.name} + and I'm ${this.age}years old`)
//         console.log(`I'm ${this.age}`)
//     }
// }

// const newPerson = new Person()

// newPerson.name = "ANTEDEGUEMON"
// newPerson.age = 26
// newPerson.talk()

class Person {
    constructor(name,age){
        console.log(`Hello, I'm ${name}`)
        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hey, my name is ${this.name} and I'm ${this.age} years old`)
    }
}
const newPerson = new Person("Yan",26)