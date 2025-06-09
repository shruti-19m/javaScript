'use strict';

/*
const bookings =[];

const createBooking = function(
    flightNum,
    numPassengers =1,
    price = 199 *numPassengers
) {
    //ESS
    //numPassengers = numPassengers||1;
    //price = price || 199;

    const booking ={
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123',2,800);
createBooking('LM123',2);
createBooking('LM123',5);

createBooking('LM123',undefined,1000);
*/


/*
const flight = 'LH234';
const jonas = {
    name:'jonas Schmedtamm',
    passport:912256798321
}

const checkIn = function(flightNum,Passenger){
    flightNum = 'LH999';
    Passenger.name= 'Mr.'+Passenger.name;

    if(Passenger.passport ===912256798321){
        alert('Checked in');
    } else{
        alert('Wrong passport!');
    }
};

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing...
const flightNum = flight;
const Passenger = jonas;


const newPassport = function(person){
    person.passport=Math.trunc(Math.random()*1000000000);
};

newPassport(jonas);
checkIn(flight,jonas);

 */


/*
const oneWord = funtion(str)
{
    return str.replace(/ /g,'').toLowerCase()
};

const upperFirstWord = funtion(str)
{
    const [first,...others]=str.split(' ');
    return[first.toUppercase(),...others].join(' ');
};

//Higher-order function
const transform = function(str,fn){
    console.log('Original String:${str}');
    console.log('Transformed string:${fn(str)}');
    console.log('Transformed string:${fn.name}');
};
 transform('JavaScript is the best!',upperFirstWord);

 transform('JavaScript is the best!',oneWord);

 //JS uses callbacks all the time
 const high5 = function() {
    console.log('hey');
 }
 document.body.addEventListener('click',high5);

 ['Jones','Martin','Adam'].forEach(high5);
*/


/*
const greet = function(greeting){
    return function(name){
        console.log('${greeting} ${name}');
    }
}

const greeterHey = greet('Hey');
greeterHey('Jones');
greeterHey('Steven');

greet('Hello')('Jones');

// challenge
const greetArr = greeting => name => console.log('${greeting} ${name}');

greetArr('Hi')('jones');

*/

//Apply method
const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    booking:[],
    //book:function(){}
    book(flightNum,name){
        console.log('${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}'
        );
        this.bookings.push({flight:'${this.iataCode}${flightNum}',name});
    },
};

book.call('Shruti',23,'Sarah Williom')
console.log(Shruti);
lufthansa.book(239,'Jonas Schmedtmann');
lufthansa.book(239,'John Smith');

const eurowings ={
    name: 'Shruti',
    iataCode:'SH',
    bookings:[],
};

const book = lufthansa.book;

//Does Not work
//book(23,'Sarah Williom');

book.call('Shruti',23,'Sarah Williom');
console.log(Shruti);

book.call('lufthansa',239,'Mary Cooper');
console.log(Shruti);

const swiss ={
    name:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

book.call(swiss,583,'Marry Copper');
console.log(swiss);


//Apply method
const flightData = [583,'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss, ...flightData);


//Blind method
//book.call(eurowings,23 'sarah Williom');

const bookEW = book.blind(eurowings);
const bookLH = book.blind(lufthansa);
const bookLX = book.blind(swiss);

bookEW(23,'Steven Willioms');

