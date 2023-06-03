//Number example:
// let a:number = 5;
// console.log(a);

//String example:
// let fName: string = `Somya Singh`
// let title: string = `web developer`
// let profile:string = `My name is ${fName} and i am a ${title} `
// console.log(profile)

//Boolean example:
// let pending: boolean= false;
// pending = true
// console.log(pending)

// function add(a:number,b:number): number{ //we have to provide function return type incase we are returing something from the function.
//     return a+b;
// }
// let sum=add(1,2)
// console.log(sum)

// function myName(name: string): void{  //If we are not returing anything then we can simply give type as void here.
//     console.log(name)
// }
// myName("Somya singh")

//Object example:
// let student : {
//     fName: string;
//     lName: string;
//     rollNo: number;
//     classNo: number;
//     hasPassed: boolean
// }
// student = {
//     fName: "Somya",
//     lName: "Singh",
//     rollNo: 43,
//     classNo: 4,
//     hasPassed: true
// }
// console.log(student)
//We can write objects like this or 
// let student : {
//     fName: string;
//     lName: string;
//     rollNo: number;
//     classNo: number;
//     hasPassed: boolean
// }= {
//     fName: "Somya",
//     lName: "Singh",
//     rollNo:42,
//     classNo: 4,
//     hasPassed: false
// }
// console.log(student)

//Array example:
// let fruits: string[];
// fruits= ["Apple", "Banana", "Orange", "Grape"];

// let newFruits = fruits.map(el => el+" "+"is fresh")
// console.log(newFruits)

// let jumbled: (string | number)[]
// jumbled = ["Apple",23,"Banana",54]
// let check = jumbled.map((el) =>{
//     return el
// })
// console.log(check)