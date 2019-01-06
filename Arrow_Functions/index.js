'use strict'

//Eg. 1
var getPriceOne = () => 5.99;
console.log(typeof getPriceOne);

//Eg. 2
var getPriceTwo = () => 5.99;
console.log(getPriceTwo());

//Eg. 3
var getPriceThree = count => count * 4.00; //When there is one argument, there is no need of parentheses
console.log(getPriceThree(2));

//Eg. 4
var getPriceFour= (count,tax)=>count*4.00*(1+tax);
console.log(getPriceFour(2,.07));

//Eg. 5
var getPriceFive= (count,tax)=>{
    var price=count*4.00;
    price*=(1+tax);
    return price;
}
console.log(getPriceFive(2,.07));

//Eg. 6
document.addEventListener('click', function () {
    console.log(this);
});
  // output: #document

//Eg. 7
document.addEventListener('click',()=>console.log(this));
   // output: Window

//Eg. 8
var invoice={
    number:123,
    process:function(){
        console.log(this);
    }
};

invoice.process();

//Eg. 9
var invoice={
    number:123,
    process:function(){
        return()=>console.log(this.number);
    }
};
invoice.process()();

//Eg. 10

var invoice={
    number:123,
    process:function(){
        return()=>console.log(this.number);
    }
};

var newInvoice={
    number:456
};

invoice.process().bind(newInvoice); //output: 123

//With arrow function you can't bind a new object to arrow function.
//Change the value of this is not possible with arrow function.
//Same output with call and apply function.

invoice.process().call(newInvoice); //output: 123
invoice.process().apply(newInvoice); //output: 123

//Eg. 11
var getPrice= ()=>5.99;
console.log(getPrice.hasOwnProperty("prototype"));

//when we declare a arrow function we don't have prototype field.