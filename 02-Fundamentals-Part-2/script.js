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

/*
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

*/
/*
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
*/

/*
//REVIEWING FUNCTIONS
const calcAge = function(birthYeah) //function expression
{
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else{
        return -1;
        console.log(`${firstName} has already retired`);
        }
 } 
 console.log(yearsUntilRetirement(1991,'jones'));
 console.log(yearsUntilRetirement(2000,'Mike'));
 */

/*
     //coding challenge 

     const calcAverage = (x,y,z)=> (x + y + z) / 3;
     console.log(calcAverage(3,4,5));

     //Test1 
     
     const scoreDolphins = calcAverage(44,23,71);
     const scoreKoalas = calcAverage(65,54,49);
     console.log(scoreDolphins, scoreKoalas);

     const checkWinner = function (avgDolphins, avgKoalas) {
      if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
      } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
      } else {
        console.log('No team wins..');
      }
     }
        checkWinner(scoreDolphins, scoreKoalas);
        checkWinner(576, 111);
      
       // test 2

       scoreDolphins = calcAverage(85,54,41);
       scoreKoalas = calcAverage(23,34,27);
       console.log(scoreDolphins , scoreKoalas);
       checkWinner(scoreDolphins , scoreKoalas);
*/
/*
const friend1 = 'Shruti';
const friend2 = 'Anuska';
const friend3 = 'Sourav';

const friends = ['Shruti','Anuska','Sourav'];
console.log(friends);
 
const years = new Array(2005, 2006, 2007);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Sourav';
console.log(friends)

const firstName = 'Shruti';
const shruti = [firstName, 'Mandal', 2025-2005, 'Student', friends ];
console.log(shruti.length);
*/

/*
//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const year = [1900, 1996, 2000, 2005, 2010] ;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/

/*
const friends = ['Shruti','Sourav','Anuska',];
//Add element
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

friends.unshift('John');
console.log(friends);

//Remove element
friends.pop();//Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//First
console.log(friends);

console.log(friends.indexOf('Anuska'));
console.log(friends.indexOf('Shruti'));

friends.push(23);
console.log(friends.includes('Anuska'));
console.log(friends.includes('Shruti'));
console.log(friends.includes(23));

if(friends.includes('Shruti')){
  console.log('You have a friend called Shruti');
}
  */

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/


const jonesArray =[
  'Jones',
  'schmedtmann',
  2037 - 1991,
  'teacher',
  ['Shruti','Sourav','Anuska',]
];

const jones ={
  firstName:'Jones',
  lastName:'schmedtmann',
  age: 2027 - 1991,
  job:'teacher',
  friends:['Shruti','Sourav','Anuska',]
};
console.log(jones);

console.log(jones.lastName);
console.log(jones['lastName']);


const nameKey = 'Name';
console.log(jones['first' + nameKey]);
console.log(jones['last' + nameKey]);

//console.log(jones.'last' + nameKey) 
const interestedIn = prompt('What do you whant to know about jones? Choose between firstName, lastName, age, profession, and friends');

if (jones[interestedIn]) {
    console.log(jones[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, profession, and friends');
}
jones.location = 'portugal';
jones['insta'] = 'jones@5';
console.log(jones);

// Challenge --> "jones has 3 friends, and his best friend is called shruti"

console.log(`${jones.firstName} has ${jones.friends.length} friends, and his best friend is called ${jones.friends[0]}`);

