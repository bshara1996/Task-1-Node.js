/** 
 * Students:
 * Bshara Karkaby [49-2]
 * Moner Makhouly [49-2]
 * 
 */

"use strict";
const num = 123;

const divide2 = num % 2 === 0;
const divide3 = num % 3 === 0;
const divide5 = num % 5 === 0;

console.log(`${num} has ${Number(divide2) + Number(divide3) + Number(divide5)} divisors.`);
