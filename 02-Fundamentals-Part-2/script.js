' use strict';

/*let hasDriversLicense=false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive:D');
*/

function logger(){
    console.log('My name is shruti');
}
 // calling/running/invoking function 
 // const interface = 'Audio';
//const private = 537;

logger();
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
 