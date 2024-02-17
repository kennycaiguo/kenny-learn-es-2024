// let test = require('./1')
// test()

// let all = require('./2')
// let p = new all.Person("Jack","male",36)
// p.intro()
// all.printPerson(p)

// let {Person,printPerson} = require('./2')

// let p2 = new Person("Lily","female",30)
// p2.intro()
// printPerson(p2)

//使用es6模块化导入
import { Student,printStudent } from "./3.js";

let s = new Student("李连杰","male",60)
s.intro()
console.log("==============");
printStudent(s)