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

/*
const jonesArray =[
  'Jones',
  'schmedtmann',
  2037 - 1991,
  'teacher',
  ['Shruti','Sourav','Anuska',]
];
*/
/*
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
*/
/*
const shruti = {
  firstName: 'Shruti',
  lastName: 'Anuska',
  birthYeah: 2000,
  profession: 'Student',
  friends: ['Shruti','Sourav','Anuska',],
  hasDriversLicense: true,

  //calcAge:function(birthYeah){
   // return 2027 - birthYeah;
 // }
};
  const calcAge = function(birthYeah){
   return 2027 - birthYeah;
  }
*/
/*
// CODING CHALLENGE
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/
/*
//ITERATION_THE FOR LOOP
 console.log('Lifting weights repetition 1');
 console.log('Lifting weights repetition 2');
 console.log('Lifting weights repetition 3');
 console.log('Lifting weights repetition 4');
 console.log('Lifting weights repetition 5');
 console.log('Lifting weights repetition 6');
 console.log('Lifting weights repetition 7');
 console.log('Lifting weights repetition 8');
 console.log('Lifting weights repetition 9');
 console.log('Lifting weights repetition 10');

// for loop keeps running while condition is true
for(let rep = 1; rep <=20; rep++) {
    console.log(`Lifting wights repetition ${rep}`);
}

*/

/*
const jones = [
    'jones',
    'Schmedtmann',
    2025-2005,
    'Student',
    ['Shruti','Sourav','Anuska',],
    true
];
const types = [];

// console.log(jones[0])
// console.log(jones[1])
// ...
// console.log(jones[4])
// jonas[5] does NOT exist

for (let i = 0; i <jones.length; i++) {
console.log(jones[i], typeof jones[i]);

  // Filling types array
  // types[i] = typeof jones[i];
  types.push(typeof jones[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

*/

/*
const jones = [
    'jones',
    'Schmedtmann',
    2025-2005,
    'Student',
    ['Shruti','Sourav','Anuska',],
];

//0,1, ...,4
//4,3,...,0
for (let i = jones.length - 1; i >= 0; i--) {
  console.log(i, jones[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
  */


// WHILE LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { 
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

//coding challenge
const calcTip = function (bill) {

return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

/*......complete......*/


