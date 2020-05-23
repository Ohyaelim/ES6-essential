/* 
    7가지

*/
const num = '2000000';
console.log( typeof num );

// const str = '바꿔보쇼';
// str[0] = 'a';
// str = 'a am mutable';

// let str = 'i am mutable';
// str[0] = 'a';
// str = 'a am mutable';
//console.log(str);

const objToBoolean = {};
console.log(Boolean(objToBoolean));

function Person(name) {
    this.name = name;
}

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Person {
//     private String name;

//     Person(String name) {
//         this.name = name;
//     }
// }

// Person person = new Person('철수');
// person.name;

// var a;
// console.log(a);

const a = 1;
let b;
console.log(typeof b);
console.log(typeof null);

console.log('str'/1);
console.log(typeof NaN);
NaN==NaN;
console.log(isNaN('str'/1));
