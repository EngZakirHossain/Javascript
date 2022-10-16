//Header line text change
let name = prompt('What Your name ?');
let age = prompt('Whats Your age ?');


document.getElementById('change').innerHTML= 'Hi... I am' +' '+name+' I am '+age+' years old';
//Data Array type

let Model = ['Apple','Samsung','OnePlus'];
Model[3]='Nokia';

document.getElementById('change').innerHTML= Model[0];
console.log(Model)

//Data Object type

let Phone = {
    model:'iPhone 11 pro Max',
    storage:'256 GB',
    color:'Black',
};

document.getElementById('change').innerHTML= Phone.model;
console.log(Phone)

//Operator Precedence () {} [] / * - + = >

let now = 2022;
let myAge = 1996;
let fullAge = 21;

let isFullAge = now - myAge >= fullAge;

document.getElementById('change').innerHTML= isFullAge;
console.log(isFullAge)