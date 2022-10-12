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

// cookies
// document.cookie = "item=milk; expires=Sat, 25 Sep 2022 12:00:00 UTC";
// document.cookie = "item=milk,bread; expires=Sat, 25 Sep 2022 12:00:00 UTC";
// document.cookie = "location= india";
// let x = document.cookie;
// alert(x);
//deleting a cookie by giving past date
// document.cookie = "item=milk,bread; expires=Sat, 15 Sep 2022 12:00:00 UTC";

// web storage (local storage and session storage)
// This method came after html5 before that dta used to stored in cookies
// local storage 
// localStorage.setItem('firstName','jawad');
// localStorage.setItem('lastName','shaikh');

// console.log(localStorage.getItem('lastName'));
// localStorage.removeItem('firstName');

//session storage 
// sessionStorage.setItem('firstName', 'jawad');
// console.log(sessionStorage.getItem('firstName', 'jawad'));
// sessionStorage.removeItem('firstName');

//json(javscript object notation)
// json is text format for storing and transporting data
//commonly used for API and config files
// xml was used instead on json 
// ten why json over xml
// json is faster in term of data parsing
// json is cleaner han xml
//json is light weight than xml
//easy to read and write

//parse  json
// let data = `{
//     "name" : "jawad",
//     "age" : 20,
//     "is_student" : true,
//     "passport_no" : null,
//     "prog_lang" : ["HTML", "CSS", "BOOTSTRAP","JAVSCRIPT"],
//     "Address" : {
//         "country" : "mumbai",
//         "state" : "mahrashtra",
//         "city" : "mumbai",
//         "pincode" : 400008
//     }
// }`;

// let dataobj = JSON.parse(data);  //convert string to object
// console.log(dataobj['is_student']);
// console.log(dataobj['prog_lang'][2]);  //array
// console.log(dataobj['Address']['city'])  //object

//json string
// let student = {
//     name : "jawad",
//     age : 20 ,
//     city : "mumbai"
// }
// let Jdata = JSON.stringify(student);
// console.log(Jdata);

//promises
// let complete = true;
// function prom(complete){
//     return new Promise(function(resolve, reject){
//         console.log("pending please wait");
//         setTimeout(() => {
//             if(complete){
//                 resolve("successful");
//             }
//             else{
//                 reject("failed");
//             } 
//         }, 1000);
//     }); 
// } 

// prom(true).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error);
// });

// promise.all()

// let p1 = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         console.log("1st promise resolved");
//         resolve(10);
//     },1000);
// });

// let p2 = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         console.log("2nd promise failed");
//         reject(20);
//     },2000);
// });

// let p3 = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         console.log("3rd promise resolved");
//         resolve(30);
//     },3000);
// });

// let total = 0;
// Promise.all([p1,p2,p3]).then( (result) => {
//     for(var i in result){
//         total += result[i];
//     }
//     console.log(`Results: ${result}`);
//     console.log(`total: ${total}`);
// } ).catch( (error) => {
//     console.log(`Error: ${error}`);
// });


// AJAX 
// function loadData() {
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // console.log(this.responseText);
//             document.getElementById('demo').innerHTML = this.responseText;
//         }
//     };

//     xhttp.open('GET',"readme.txt",true);
//     xhttp.send();
// }

//fetch reading data
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     for(let i in data){
//         document.write(`${data[i].name} - ${data[i].email} - ${data[i].address.city}<br>`);
//     }
// })
// .catch(error => console.log("Can't fetch data"));

//fetch for server

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   //updating 
  
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   // DELETE

//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

// real example
// document.getElementById("saveForm").addEventListener("click",function(e){
//     e.preventDefault();
    // var obj ={
    //     title : document.getElementById("titleText").value,
    //     body : document.getElementById("bodyText").value,
    //     user : document.getElementById("userid").value,
    // };

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    // method: 'POST',
    // body: JSON.stringify(obj),
    // body : new FormData(document.getElementById("myForm")),
    // headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        // 'Content-type': 'application/x-www-form-urlencoded',
//     },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));
// })

//async await

//normal
// function test(){
//     return "hello";
// }
// console.log(test());

// async function
// async function test(){
//     return "hello";
// }
// test().then((result)=> console.log(result));

//await
// async function test(){
//     try{
//         const response = await fetch("student.json");
//     const students = await response.json();

//     return students;
//     }catch(error){
//         console.log("error");
//     }
    // const response = await fetch("student.json");
    // const students = await response.json();

    // return students;
    // return (await fetch("student.json")).json();
// }

// test().then((res)=>{
//     console.log(res);
// });

// --------------------------------------------------------------------------------------------------- //

// var name = "jawad";
// console.log(name);

// let name = "jawad";
// console.log(name);

// const name = "jawad";
// console.log(name);

// const name = "jawad";
// name = "shaikh";
// console.log(name);

// function js(love){
//     if(love){
//         var name = "jawad";
//         var sname = "shaikh";
//     }
//     console.log(`My Name is ${name} ${sname}`);
// }

// js(true);

// var fav_country = "India";

// if(true){
//     var fav_country = "Pakistan"
//     console.log(fav_country);
// }

// console.log(fav_country);

// let fav_country = "India";

// if(true){
//     let fav_country = "Pakistan"
//     console.log(fav_country);
// }

// console.log(fav_country);

// document.getElementById("demo").innerText = "Jawad";
// document.getElementById("demo").style.backgroundColor = "green";
// document.getElementById("demo").style.color = "#fff";
// document.getElementById("demo").style.textAlign = "center";
// document.getElementById("demo").style.fontSize = "25px";
// document.getElementById("demo").style.fontWeight = "900";
// document.getElementById("demo").style.fontFamily = "ROBOTO";
// document.getElementById("demo").style.padding = "25px";
// document.getElementById("demo").style.margin = "25px";
// document.getElementById("demo").style.borderRadius = "25px";
// // document.getElementById("demo").style.border = "2px solid black";

// let a = document.getElementById("demo");
// a.style.border= "5px dashed black";

// let a= document.getElementById("demo");
// a = a.className;
// a = a.childNodes;
// a = a.parentNode;
// a.style.color = ("green");
// a.innerHTML = "<b>HI MY NAME IS JAWAD"
// a.innerText = "<br>HI MY NAME IS JAWAD </br>"
// let sel = document.querySelector('#demo');
// sel = document.querySelector('child');
// let sel = document.querySelector('.para');
// let sel = document.querySelector("li");
// let a = document.getElementsByClassName("child");
// console.log(a[1]);

// let a = document.getElementsByClassName("li");

// for(let i = 0; i <a.length ; i++){
//     console.log(a[i]);
//     a[i].style.color = "red";
// }

// Array.from(a).forEach(element => {
//     console.log(element);
//     element.style.color = "red";
// });

// let a = document.querySelector("#container");
// console.log(a.childNodes);
// console.log(a.children);
// console.log(a.childNodes[1].nodeName);
// console.log(a.childNodes[0].nodeType); //1.element 2. attribute 3.text node 8.comment 9.documnet 10.doctype

// let elm = document.createElement("li");
// elm.className = "list";
// elm.id = "list_id";
// elm.setAttribute('title', 'myTitle');
// elm.innerText = "hI";

// console.log(elm);

// let ul = document.querySelector("ul.li");
// ul.appendChild(elm);
// console.log(ul);

// document.getElementById("demo").addEventListener("click", function(){
//     console.log("clicked");
//     // location.href = "https://www.google.co.in"
// });

// document.getElementById("demo").addEventListener("click", function(e){
//     console.log("clicked");
//     // console.log(e.target.className);
//     console.log(e.target.classList);
// });

// document.getElementById("demo").addEventListener("mouseover", function(e){
//     console.log("event occured");
// });