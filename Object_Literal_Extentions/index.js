'use strict'

//Eg. 1
var price =5.99, quentity=30;
var productview={
    price,
    quentity
};
console.log(productview);

//Eg. 2
var price=5.99, quantity=10;
var productview={
    price,
    quantity,
    calculateValue(){
        return this.price*this.quantity;
    }
};
console.log(productview.calculateValue()); //Outout: 59.900000

//Eg. 3
var price=5.99,quantity=10;
var productview={
    price,
    quantity,
    "calculate value"(){
        return this.price*this.quantity;
    }
};
console.log(productview["calculate value"]()); //Output: 59.00000

//Eg. 4
var field='dynamicField';
var price=5.99;
var productView={
    [field]:price
};
console.log(productView);

//Eg. 5
var field='dynamicField';
var price=5.99;
var productView={
    [field+'-001']:price
};
console.log(productView);

//Eg. 6
var method='doIt';
var productView={
    [method+'-001'](){
        console.log("in a method");
    }
};
productView['doIt-001']();

//Eg. 7
var ident='productId';
var productView={
    get[ident](){return true;},
    set[ident](value){}
};
console.log(productView.productId);

