'use strict';

//Eg. 1
var showCategories= function(productId,...categories){
    console.log(categories instanceof Array);
};
showCategories(123,'search','advertising');

//Eg. 2 
var showCategories=function(productId,...categories){
    console.log(categories);
};
showCategories(123,'search','advertisoing');

//Eg. 3
var showCategories=function(productId,...categories){
    console.log(categories);
};
showCategories(123);

//Eg. 4
var showCategories=function(productId,...categories){
};
console.log(showCategories.length); //output: 1, tell us the number of parameter of function

//Eg. 5
var showCategories= function(productId,...categories){
    console.log(arguments.length); //output: 3
};
showCategories(123,'search','advertising');

//Eg. 6
var showCategories=new Function("...categories","return categories;");
console.log(showCategories('search','advertising'));

//Eg. 7
