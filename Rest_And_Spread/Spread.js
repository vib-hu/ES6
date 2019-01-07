'use strict'

//Eg. 1
var prices=[12,20,18];
var maxPrice=Math.max(...prices);
console.log(maxPrice); //Output: 20

//Eg. 2
var prices= [12,20,18];
var newPriceArray=[...prices];
console.log(newPriceArray); //Output: [12,20,18]

//Eg. 3
var newPriceArray=Array(...[,,]);
console.log(newPriceArray); //Output: [undefined,undefined]

//Eg. 4
var newPriceArray=[...[,,]];
console.log(newPriceArray); //[undefined,undefined]

//Eg. 5
var maxCode= Math.max(..."43210");
console.log(maxCode); //Output: 4

//Eg. 6
var codeArray= ["A", ..."BCD","E"];
console.log(codeArray); //Output: ["A","B","C","D","E"]
