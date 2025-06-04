'use strict';


function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2007) {
      var Millenial = true;
      const str = `Oh, and you're a Millenial, ${firstName}`;
      console.log(str);

      function add(a,b){
        return a+b;
      }
    }
     //console.log(str);
     console.log(Millenial);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
const Job = 'student';
calcAge(1991);
const calcAge = funtion (birthYeah);
//console.log(age);

//printage());
 
console.log(me);
console.log(Job);
console.log(birthYeah);

var me = 'jones';
let job = 'student';
const year = 1991;

// functions
console.log(addDecl(2,3));
//console.log(addExpr(2.3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));
//console.log(addArrow(2,3))

function addDecl(a, b) {
     return a + b;
 }
    const addExpr = function (a,b) {
    return a + b;
 } 

 var addArrow = (a,b) => a + b;


 //Example 1
 console.log(undefined);
    if (!numProducts) 
        var numProuducts = 10;

    function deleteShoppingCart() {
        console.log('All products deleted!');
    }
    

 var x = 1;
 let y = 2;
 const z = 3;

 console.log(x === window.x);
 console.log(y === window.y);
 console.log(z === window.z);


 console.log(title);
 constcalcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
 };
 calcAge(1991);

 const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
 };
 
 calcAgeArrow(1980);

 const jones = {
    year : 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year );
    },
 };
 jones.calacAge();
 
 const shanaya = {
    year : 2017,
 };

 shanaya.calcAge = jones.calcAge;
 shanaya.calacAge();

 const f = jones.calacAge;
 f();



 //solution 2

 const isMillenial = () => {
    console.log(this);
    console.log(this.year >= 1981-77 ,this.year <= 1996);
 };
 isMillenial();

 greet: () => {
    console.log(this);
    console.log('Hey ${this.firstName}');
 },

 jonesonas.greeet();
 jones.calcAge();


 //arguments keyword
 constaddExpr = function (a,b) {
    console.log(arguments);
    return a + b;
 };
 addExpr(2,5);
 addExpr(2, 5, 8, 12);

 var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
 };
 addArrow(2,5,8);



 let lastName = 'jones';
 let oldLastName = lastName;
 lastName = 'jones' ;
 console.log(lastName , oldLastName);

 const Shanaya = {
    firstName: 'shanaya',
    lastName: 'jones',
    age: 21,
 };

 const marriedShanaya = shanaya;
 marriedShanaya.lastName ='roy';
 console.log( 'Before marriage:',shanaya);
 console.log('After marriage:', marriedShanaya);

 //copying objects 
 const shanaya2 = {
    firstName: 'shanaya',
    lastName: 'roy',
    age: 21 ,
    family: ['aditi','som'],
 };


 const shanayaCopy = Object.assign({}, shanaya2);
 shanayaCopy.lastName = 'roy';

 shanayaCopy.family.push('cutie');
 shanayaCopy.family.push('pookie');

 console.log('Before marriage:', shanaya2);
 console.log('After marriage:',shanayaCopy);

