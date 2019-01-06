// Guess and answer what showes in the console ?

'use strict'
// Eg. 1
try {
    console.log(productId);
    var productId = 12;
}
catch (ex) {
    console.log(ex);
}

//Eg. 2
try {
    console.log(orderId);
    let orderId = 12;
}
catch (ex) {
    console.log(ex);
}

//Eg. 3
try {
    let identityKey = 12;
    console.log(identityKey);
}
catch (ex) {
    console.log(ex);
}

//Eg. 4
try {
    let uniqueId;
    console.log(uniqueId);
}
catch (ex) {
    console.log(ex);
}

//Eg. 5
try {
    let productId = 12;
    {
        let productId = 2000;
    }
    console.log(productId);
}
catch (ex) {
    console.log(ex);
}

//Eg. 6
try {
    {
        let productId = 2000;
    }
    console.log(productId);
}
catch (ex) {
    console.log(ex);
}

//Eg. 7
try {
    function updateId() {
        id = 12;
    }
    let id = null;
    updateId();
    console.log(id);
}
catch (ex) {
    console.log(ex);
}

//Eg. 8
try {
    let customerId = 42;
    for (let customerId = 0; customerId < 10; customerId++) {
    }
    console.log(customerId);
}
catch (ex) {
    console.log(ex);
}

//Eg. 9 - Imp
try {
    let updateFunctions = [];
    for (var i = 0; i < 2; i++) {
        updateFunctions.push(function () { return i; });
    }
    console.log(updateFunctions[0]());
}
catch (ex) {
    console.log(ex);
}

//Eg. 10
try {
    const MARKUP_PCT = 100;
    console.log(MARKUP_PCT);
}
catch (ex) {
    console.log(ex);
}

//Eg. 11
try {
    const MARKUP_PCT;
    console.log(MARKUP_PCT);
}
catch (ex) {
    console.log(ex);
}

//Eg. 12
try {
    const MARKUP_PC = 100;
    MARKUP_PC = 10;
    console.log(MARKUP_PC);
}
catch (ex) {
    console.log(ex);
}

//Eg. 13
try {
    const MARKUP_P = 100;
    if (MARKUP_P > 0) {
        const MARKUP_P = 10;
    }
    console.log(MARKUP_P);
}
catch (ex) {
    console.log(ex);
}