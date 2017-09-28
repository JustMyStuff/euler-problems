// https://projecteuler.net/problem=3
// Euler #3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Prime number, positive integer, divisible only by 1 and itself
const numberToFactor = 600851475143;
const factorStartingPoint = 2;
let currentFactorToTest = factorStartingPoint;
let currentNumberToFactor = numberToFactor;
let squareRootOfNumber = Math.trunc(Math.sqrt(currentNumberToFactor));
let listOfPrimeFactors = [];

// First approach (brute force), we use modulus from 2 to the number and skip/fail if any succeed
// Once we find one, then we divide the starting number by that factor and restart our search (from 2)

// Replaced this line after finding formula for validating prime
//while ( currentFactorToTest <= currentNumberToFactor ) {

while ( currentFactorToTest <= squareRootOfNumber ) {

	if ( currentNumberToFactor % currentFactorToTest === 0) {
		currentNumberToFactor = currentNumberToFactor / currentFactorToTest;
		squareRootOfNumber = Math.trunc(Math.sqrt(currentNumberToFactor));
		listOfPrimeFactors.push(currentFactorToTest);
		currentFactorToTest = factorStartingPoint;
	} else {
		currentFactorToTest += 1;
	}
}

// Add the last number, which is our final factor
listOfPrimeFactors.push(currentNumberToFactor);

console.log(`The prime factors of ${numberToFactor} are: ${listOfPrimeFactors}`);

listOfPrimeFactors.sort(function(a, b){return a-b;});

console.log(`The largest prime factor of ${numberToFactor} is: ${listOfPrimeFactors.pop()}`);