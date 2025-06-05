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

