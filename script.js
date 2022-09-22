// let and const over var

// var can be redeclared
// var num = 1;
// var num;

// var becomes global property of window object 
// console.log(window.num);

// let cannot be redeclared 
// let number = 1;
// let number;

// let does not become global property of window object  
// console.log(window.number);


// default parameters in javascript 

// function msg(greet="hi"){
//     console.log(greet);
// }
// // msg("hi");  //hi
// msg(); // hi 

// Rest parameters 

// function sum(a,b){
//     return a+b;
// }
// sum(12,5);

// function sum(...args){
//     // console.log(args);
//     let result = 0;
//     for(let i = 0; i<args.length; i++){
//         result += args[i];
//     }
//     console.log(result);
// }
// sum(2,4,5,6,5);

// Spread Operatiors

// let arr1 = [1,2,3];
// let arr2 = [5,4,6,...arr1];
// let arr2 = [...arr1,5,4,6];
// let arr2 = [5,...arr1,4,6];

// let arr3 = [9,8,7];
// let arr4 = [...arr1,...arr3];

// console.log(arr4);

//for of loop 

// let score = [80,39,70,54];
// let score = 'hello world';

// for(let x of score){
//     console.log(x);
// }

//template literals 

//works with back ticks only
//we get same output as we write in editor
// let str = `hi     my
// name 
// is         jawad`;
// console.log(str);

// earlier,
// let str = "jawad";
// let num = 18;
// console.log("My Name is " + str + ".");
// Now,
// console.log(`My Name is ${str}.`)
// console.log(`My Age is ${num}.`)
// console.log(`My Age is ${num + 1}.`)

//Array Destructring

// earlier,
// let book =["javascript", 200 , 150];
// console.log(book);
// console.log(book[1]);

// let name = book[0];
// let page = book[1];
// let price = book[2];
// console.log(page);

// by using Array destucturing
// let book =["javascript", 200 , 150];
// let[name,page,price]=book; //mapping
// console.log(page);

// let book =["javascript", , 200 , 150];
// let[name,page = 200,price]=book; //mapping  --If empty/undefined then will take this value
// console.log(page); // undefine

//In case of nested array
// let book =["javascript", 200 , 150, ["techmax", 2022]];
// let[name,page,price,[publication, year]]=book; //mapping
// console.log(publication);

// use 

// function book(){
//     // return "book";
//     return ["java",200];
// }
// // let name = book();
// // console.log(name);

// let[name,price]= book();
// console.log(price);

//object Destructuring

// earlier,

// let book = {
//     name : "javascript",
//     page : 150,
//     price :200
// }

// console.log(book.price);
// let name = book.name;
// console.log(name);

// By using Object Destructuring
// let book = {
//     name : "javascript",
//     page : 150,
//     price :200
// }

// let{name, page, price}= book;
// console.log(page);

// In case of default value

    // let book = {
    //     name : "javascript",
    //     page : 150,
    // }
    // let{name, page, price = 200 }= book; // price = 200 will work if price in not defined in object
    // console.log(price); // undefined in case of empty 

// In case of nested object

// let book = {
//     name : "javascript",
//     page : 150,
//     price : 200 ,
//     publication : {
//         publication_name : "techmax",
//         year : 2022
//     }
// }
// let{name, page, price, publication:{publication_name : pub, year}}= book; // pub if wanted to change name 
// console.log(year);
// console.log(pub);

// function book(){
//     return {name : "javascript", page : 200}
// }

// let{name, page}= book();
// console.log(page);

// modules

// import {name} from './modules/user.js';
// console.log(name);

// import { code } from './modules/user.js';
// code();

// error // 
    // import {cook} from './modules/user.js';
    // cook();
// import {age} from './modules/user.js';
// console.log(age);
 
// import {widthdraw} from './modules/account.js';
// widthdraw();

// import { deposit } from './modules/account.js';
// deposit();

//error//
// import {acc_number} from './modules/account.js';
// console.log(acc_number);
// import {acc_type} from './modules/account.js';
// console.log(acc_type);

// short cut for importing many things//

// import {name, code} from './modules/user.js';
// console.log(name);
// code();

// renaming 
// import {widthdraw, deposit} from './modules/account.js';
// import {widthdraw as wd} from './modules/user.js';
// wd();
// widthdraw();
// deposit();

// shortcut //

// import * as usr from './modules/user.js';
// import * as acc from './modules/account.js';

// usr.code();
// console.log(usr.name);
// acc.deposit();
// acc.widthdraw();

// import {default as jawad, widthdraw , deposit} from './modules/account.js';
// jawad();

// import {code} from './modules/user.js';
// code();

//aggregating modules //

// import {circle , triangle ,square} from './modules/shape.js';

// circle();
// triangle();
// square();

// Object oriented programming ES6
//oops before ES6

// let person1 ={
    // firstName : 'jawad',
    // lastName : "shaikh",
    // 'last name' : 'shaikh', //if u want space u have to write inside quote
    // age : 25,

    //making method
    // fullName : function(){
        // console.log(this.firstName + " " + this.lastName); //for accesing property within object
    // }
// };

//diff ways to create object

// let person2 = {}; //leaving it empty and adding value and property later out side object
// let object3 = new Object();

// person1.fullName();

// person1.age = 30;  // for changing value

// console.log(person1.firstName); // . notation
// console.log(person1['last name']); // array notation for property with space
// console.log(person1.lastName);
// console.log(person1.age);

//for adding proerty/method to object 
// person1.height = 5.6;
// console.log(person1);

// person1.sayHi = function(){
//     alert("hi");
// }
// console.log(person1);

//oops before ES6 // clas was not there // we use constructor function 

// function Person(first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;

//     this.sayHi = function(){
//         console.log("hi");
//     }
//     this.chnageAge = function(newAge){
//         this.age = newAge;
//     }
// };

// let person1 = new Person("JAWAD", "SHAIKH", 19);
// person1.chnageAge(23);
// let person2 = new Person("HAMZA", "SHAIKH", 20);
// console.log(person1);
// console.log(person2);

//prototype and inheritence

// let person1 = {};
// console.log(person1);

// let person2 = {
//     name : "jawad"
// };
// console.log(person2.hasOwnProperty('true')); //check wether name property is there in object

// If we make a constructor function and write method inside it then this voilets dry, the code gets
// repeaded to avoid this we have to make method out side constructor function and write it inside prototype

// function Person(first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
// }

// Person.prototype.fullName = function(){
//     console.log(this.firstName + " " + this.lastName );
// }

// let person1 = new Person("jawad", "shaikh", 20);
// let person2 = new Person("hamza", "shaikh", 21);

// console.log(person1);
// console.log(person2);
// console.log(person1.fullName());
// console.log(person2.fullName());

// inheritence ES5

// function Creature(ls){
//     this.lifeSpan = ls;                                 //constructor function
// }

// Creature.prototype.breadth = function(){
//     console.log("breathin");
// }

// let creature1 = new Creature(100);
// console.log(creature1);

// function Person(first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
// }

// Person.prototype.fullName = function(){
//     console.log(this.firstName + " " + this.lastName );
// }

// Person.prototype = Object.create(Creature.prototype); //replace
// Person.prototype.__proto__ = Object.create(Creature.prototype); //connect
// Person.prototype.__proto__ = Creature.prototype; //connect

// let person1 = new Person("jawad", "shaikh", 20);
// let person2 = new Person("hamza", "shaikh", 21);

// console.log(person1);
// console.log(person2);
// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person1.breadth());
// console.log(person2.breadth());

// class and object
//in es6 class is replacing constructure function

// class Person{
//     constructor(n, a){                          //constructor function / method
//         this.name = n;
//         this.age = a;
//     }

//     sayHi(){                                     // prototype method (get attach to prototype)
//         console.log("hi");
//     }

//     static sproperty = "something";              // static property (TO CALL USE CLAS NAME)


//     static hello(){
//         console.log("hello");                    //static method (To call use class name)
//     }
// }

//we dont have to manually call constructor function it automatically calls when object is created

// let person1 = new Person("jawad", 20);
// person1.sayHi();             // automatically attach to prototype (till es5 we have to manually do this step)
// console.log(person1);

// static method does not get call by object but it get calls by class name
// Person.hello();

// console.log(Person.sproperty);

// Inheritence in ES6
// when we extend not only prototype but also property get connect (wholw class get copy)
// class emp{
//     constructor(n){
//         this.name = n;
//     }

//     msg(){
//         console.log("hello");
//     }
// }

// class manager extends emp{                      // inherit

    // whenever we are making constructor function in child class we have to  class super and pass the parameter 
    // constructor(n,d){
        // super(n);         // use = to call constructor of parent class
    //     this.department = d;
    // }

    // msg(){
    //     console.log("hi");
    // }

    // info(){
        // super.msg();  // call msg method of parent class
        // this.msg(); // call msg of same class
//         console.log(this.name + " is manager of department " + this.department);
//     }
// }

// class admin extends manager{
    
// }

// let admin1 = new admin("jawad", 28); 
// console.log(admin1);

// let manager1 = new manager("jawad", "Web development");
// console.log(manager1);
// console.log(manager1.msg());
// console.log(manager1.info());

// public //private
// class emp{
//     constructor(n){
//         this.name = n;
//     }
//     getName(){
//         console.log(this.name);
//     }

// }

// let emp1 = new emp("jawad");
// console.log(emp1);
// console.log(emp1.name); // public can be called 

// class emp{
//     #name = "";
//     constructor(n){
//         this.#name = n;
//     }
//     #getName(){
//         console.log(this.#name);
//     }
//     pubfun(){
//         this.#getName();
//     }

// }

// let emp1 = new emp("jawad");
// console.log(emp1);
// console.log(emp1.#getName()); // private method cannot be called directly 
// console.log(emp1.pubfun());

// mixin

// let usefullMethod  = {
//     sayHi(){
//         console.log("hi.....");
//     },

//     sayBye(){
//         console.log("bye.....");
//     }
// };

// let usefullMethod2  = {
//     sayHi(){
//         console.log("hi..");
//     },

//     sayBye(){
//         console.log("bye..");
//     }
// };

// class user{
//     constructor(){
//         this.name = "jawad";
//     }
// }

// class admin extends user{
    
// }

// let admin1 = new admin();
// console.log(admin1);

// Object.assign(user.prototype, usefullMethod);
// Object.assign(admin.prototype, usefullMethod);   //mixin
// Object.assign(admin.prototype, usefullMethod2);   //mixin

// let user1 = new user();
// console.log(user1);
// console.log(user1.sayHi());
// console.log(user1.sayBye());
// console.log(admin1.sayHi());

// Arrow function

//NORMAL
// function sum(a,b){
//     return a+b;
// }

//arrow function
// let sum2 = (a,b) => {
//     return a+b;
// }

//for single line only
// let sumA = (a,b) => a+b;

// console.log(sum(2,3));
// console.log(sum2(2,3));
// console.log(sumA(2,3));

// function random(){
//    var x = Math.random();
//    return x;
// }
// console.log(random());

// let random1 = () => Math.random();
// console.log(random1());


// let double = (a) => 2*a;
// if one parathesis
// let double = a => 2*a;
// console.log(double(10));


//annanomys function
// document.addEventListener('click', function(){
//     console.log("clicked");
// })

// document.addEventListener('click', ()=> console.log("Arrow"));

//callback function
// function sayHello(){
//     console.log("hello");
// }
// function sayHi(){
//     console.log("hi");
// }

// function add(num1, num2, callback){
    // sayHello();
    // console.log(num1+num2);
    // callback();
    // sayHi();
// }
// add(2,4, sayHello);
// add(21,41, sayHi);
// add(21,41, function(){
//     console.log("bye.");
// });
// add(21,41, ()=>{
//     console.log("bye bye.");
// });

// map function
// result of operation performed on all elements of array are stored in different array  

//without map function
// let arr = [2,3,4,5,6];
// let arr1 = [];    // for storing

// for(let i=0; i<arr.length; i++){
//     arr1[i] = arr[i]*2;
// }
// console.log(arr1);

//with map function

//with ananomous function
// let arr = [2,3,4,5,6];
// let arr1 = arr.map(function(val){
//     return val * 3;
// });
// console.log(arr1);

// with arrow function
// let arr = [2,3,4,5,6];
// let arr1 = arr.map((val)=> val*3);
// console.log(arr1);

// filter function
// let arr = [2,22,13,5,6,61,23,7];
// result[22,13,61,23];
// let arr1 = arr.filter(val => val<10);
// console.log(arr1);

// let team = [
//     {
//         name :"jawad",
//         position : "Developer",
//     },
//     {
//         name :"hamza",
//         position : "Engineer",
//     },
//     {
//         name :"faiz",
//         position : "Developer",
//     },
//     {
//         name :"shehzad",
//         position : "ui/ux designer",
//     },
//     {
//         name :"john",
//         position : "admin",
//     },
//     {
//         name:"doe",
//         position:"Developer",
//     }
// ];

// let Developer = team.filter(val => val.position == "Developer");
// console.log(Developer);