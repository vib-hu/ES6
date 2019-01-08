'use strict'

//Eg. 1
let invoiceNumFir='1350';
console.log(`Invoice Number:${invoiceNumFir}`);

//Eg. 2
let invoiceNumSec='1350';
console.log(`Invoice Number:\${invoiceNumSec}`);

//Eg. 3
let message= `A
B
C`;
console.log(message);

//Eg. 4
let invoiceNumThi='1350';
console.log(`Invoice Number:${"INV-"+invoiceNumThi}`);

//Eg. 5
function showMessage(message){
    let invoiceNum='99';
    console.log(message);
}

let invoiceNumFourth='1350';
showMessage(`Invoice Message:${invoiceNumFourth}`);

//Eg. 6
function processInvoice(segments){
    console.log(segments);
}
processInvoice `template`;
