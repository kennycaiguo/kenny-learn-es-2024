class Student{
    constructor(name,gender,age){
        this.name = name
        this.age = age
        this.gender =gender
    }

    intro(){
      console.log(`hello,my name is ${this.name},i am ${this.gender} and i am ${this.age} years old`);
    }
}

function printStudent(p) {
    console.log(`Student[name=${p.name},gender=${p.gender},age=${p.age}]`);
}

export {
    Student,
    printStudent
}