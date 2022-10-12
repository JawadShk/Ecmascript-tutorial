// let Name = "jawad";
// console.log(Name);

// let sayHi = () => {
//     console.log("hi");
// }
// sayHi();

// let sum = num => 2 * num
// console.log(sum(2));

// import {b} from './app.js'
// import {a} from './customer.js'
// console.log(b);
// console.log(a);

// class customer{
//     constructor(n){
//         this.Name = n;
//     }
//     age = 25;
//     buy = () =>{
    // buy(){
        // console.log("hello");
    // }
//     }
// }

// class guestCustomer extends customer{
//     hello(){
//         console.log("hello");
//     }
// }

// let customer2 = new guestCustomer("jawad");
// let customer1 = new customer("jawad");
// console.log(customer1);
// customer1.buy();
// customer2.buy();
// console.log(customer2);

// let arr = ["Audi", "Honda", "BMW"];
// let arr1 = [...arr, "FERRARI"];
// console.log(arr1);

// let person = {
//     nAme : "jawad",
//     age : 19
// }

// let newPerson = {
//     ...person,
//     city : "mumbai"
// }
// console.log(newPerson);

// function hello(...all){
//     console.log(all);
// }
// hello(1, 2, 3, 4, 5, 6, 7); 

// Array Destructuring

// let arr = ["AUDI", "BMW", "HONDA"];
// let [car1, car2, car3] = arr;
// console.log(car3);

// object destructuring

// let person = {
//     name : "jawad",
//     age : "19"
// }
// let { name , age } = person;
// console.log(name);

//reference(array,object) and primitive type (string, number)

// let num1 = 100;
// let num2 = num1;
// console.log(num1);
// console.log(num2);

// let person = {
//     name : "jawad",
// }

// let person2 = person;
// let person2 = {
//     ...person
// }
// person2.name = "hamza";

// console.log(person);
// console.log(person2);

// let arr = [2, 5, 7, 10];
// let arr1 = arr.map(x => x*2);
// let arr1 = arr.filter(x => x%2 == 0);
// let arr1 = arr.filter(function(x){
//     return x%2 == 0;
// });
// console.log(arr1);