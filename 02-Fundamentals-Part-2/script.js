//' use strict';

/*let hasDriversLicense=false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive:D');
*/
/*
function logger(){
    console.log('My name is shruti');
}*/

 // calling/running/invoking function 
 // const interface = 'Audio';
//const private = 537;

/*logger();
logger();
logger();

function fruitprocessor(apples,oranges){
    console.log(apples,oranges);
    const juice ='juice with ${apples} apples and ${orange} oranges';
    return juice;
     }
const appleJuice = fruitprocessor(5,0);
 console.log(appleJuice); 

 const appleorangeJuice = fruitprocessor(3,6);
 console.log(appleorangeJuice); 
 */
 
/*
 //function declaration
 function calcAge1(birthYeah)
 {
   return 2037 - birthYeah;
 }
 const age1 = calcAge1(1991);

 // function expression
 const calcAge2 = funtion (birthYeah)
 {
    return 2037 - birthYeah;
 }
 const age2 = calcAge2(1991);

 console.log(age1 , age2);
 */


//Arrow function
const calcAge = birthYeah => 2037 - birthYeah;
const age3 = calcAge(1991);
console.log(age3);

const yearsUntilRetirement = birthYeah =>{
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return '${firstName} retires in ${retirement}years';


}
console.log(yearsUntilRetirement(1991, 'jones'));
console.log(yearsUntilRetirement(1998,'Ruby'));


function cutFruitPieces(fruit){
  return fruit * 4;
}
function fruitProcessor(apples,oranges){
  const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice= 'Juice with ${applepieces}piece of apple and ${orangepieces}piece of orange';
   return juice;
}
console.log(fruitProcessor(2,3));
