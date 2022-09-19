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