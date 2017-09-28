// https://projecteuler.net/problem=1
// Euler #1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function geometricSum (a, n)
{
	n = Math.trunc(n/a);
	return Math.trunc((1/2)*n*(a+a*n));
}

const minNumber = 0;
const maxNumber = 999;
const firstCheck = 3;
const secondCheck = 5;
const thirdCheck = 15;

console.log(`Geometric sum: ${geometricSum(firstCheck,maxNumber) + geometricSum(secondCheck,maxNumber) - geometricSum(thirdCheck,maxNumber)}`);

