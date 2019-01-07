'use strict'

//Eg. 1
var getProduct=function(productId=1000){
    console.log(productId);
};
getProduct();

//Eg. 2
var getProductNew= function(productId=1000, type='software'){
console.log(productId+' '+type);
};
getProduct(undefined,'hardware'); //if we specified undefined JS will use default parameter.

//Eg. 3
var getTotal= function(price,tax=price*0.07){
    console.log(price+tax);
};
getTotal(5.00);

//Eg. 4
 var baseTax=0.07;
 var getTotal=function(price,tax=price*baseTax){
     console.log(price+tax);
 };
 getTotal(5.00);

 //Eg. 5
 var generateBasetax=()=>0.07;
 var getTotal=function(price,tax=price*generateBasetax()){
     console.log(price+tax);
 };
 getTotal(5.00);

 //Eg. 6
 var getTotalArguments= function(price,tax=0.07){
     console.log(arguments.length); //arguments define number of arguments passed to the function
 };
getTotalArguments(5.00);

//Eg. 7
try {
    var getTotal = function (price = adjustement, adjustement = 1.00) {
        console.log(price + adjustement);
    };
    getTotal();
}
catch (ex) {
    console.log(ex);
}

//Eg. 8: Dynamic function in JS

var getTotal= new Function("price=20.00","return price;");
console.log(getTotal());
