// https://projecteuler.net/problem=5
// Euler #5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// We're going to adapt some of the information from Euler #3 about prime factors and use it again here
// Then we add on a new piece of information, finding largest exponent for prime factors smaller than the square root
// Then we multiply these values to get the answer


// Prime number, positive integer, divisible only by 1 and itself
const startingNumber = 1;
const endingNumber = 40;
const squareRootOfEndingNumber = Math.trunc(Math.sqrt(endingNumber));
const primeStartingPoint = 2;
let currentNumberToTest = primeStartingPoint;
let listOfPrimeNumbers = [];
let listOfFactors = [];
let smallestNumber = 1;

while ( currentNumberToTest <= endingNumber ) {

	for (i = primeStartingPoint; i <= currentNumberToTest; i++) {

		if ( (currentNumberToTest % i === 0) && (currentNumberToTest != i) ) {
			break;
		}

		if ( (currentNumberToTest % i === 0) && (currentNumberToTest === i) ) {
			listOfPrimeNumbers.push(currentNumberToTest);
		}
	}

	currentNumberToTest += 1;
}

listOfPrimeNumbers.sort(function(a, b){return a-b;});

for (let element of listOfPrimeNumbers) {

	if (element > squareRootOfEndingNumber) {
		listOfFactors.push(element);
		smallestNumber *= element;

	} else {
		listOfFactors.push(Math.pow(element,Math.trunc(Math.log10(endingNumber) / Math.log10(element))));
		smallestNumber *= Math.pow(element,Math.trunc(Math.log10(endingNumber) / Math.log10(element)));
	}
}


console.log(`The prime numbers from ${startingNumber} to ${endingNumber} are: ${listOfPrimeNumbers}`);

console.log(`The list of factors we need to multiply are: ${listOfFactors}`);

console.log(`The smallest number is: ${smallestNumber}`);