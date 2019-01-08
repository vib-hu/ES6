'use strict'
// Symbol.iterator is responsible for destructuring
//Eg. 1
{
    let salary = ['32000', '50000', '75000'];
    let [low, average, high] = salary;
    console.log(average);
}

//Eg. 2
{
    let salary = ['32000', '50000'];
    let [low, average, high] = salary;
    console.log(high);
}

//Eg. 3
{
    let salary = ['32000', '50000', '75000'];
    let [low, , high] = salary;
    console.log(high);
}

//Eg. 4
{
    let salary = ['32000', '50000', '75000'];
    let [low, ...remaining] = salary;
    console.log(remaining);
}

//Eg. 5
{
    let salary = ['32000', '50000'];
    let [low, average, high = '88000'] = salary;
    console.log(high);
}

//Eg. 6
{
    let salary = ['32000', '50000', ['88000', '99000']];
    let [low, average, [actualLow, actualHigh]] = salary;
    console.log(actualLow);
}

//Eg. 7
{
    let salary = ['32000', '50000'];
    let low, average, high;
    [low, average, high = '88000'] = salary;
    console.log(high);
}

//Eg. 8
{
    function reviewSalary([low, average], high = '88000') {
        console.log(average);
    }
    reviewSalary(['32000', '50000']);
}

//Eg. 9 working with object
{
    let salary = {
        low: '32000',
        average: '50000',
        high: '75000'
    };
    let { low, average, high } = salary;
    console.log(average);
}

//Eg. 10
{
    let salary = {
        low: '32000',
        average: '50000',
        high: '75000'
    };
    let { low: newLow, average: newAverage, high: newHigh } = salary;
    console.log(newLow);
}

//Eg. 11
{
    let salary = {
        low: '32000',
        average: '50000',
        high: '75000'
    };
    let newLow, newAverage, newHigh;
    ({ low: newLow, average: newAverage, high: newHigh } = salary);
    console.log(newAverage);
}

//Eg. 12
{
    let [maxCode, minCode] = 'AZ';
    console.log(`min:${minCode} max:${maxCode}`);
}

// Advance destructuring 
//Eg. 13
try
{
    let [high, low] = undefined;
    console.log(`high:${high} low:${low}`);
}
catch(ex){
    console.log(ex.message);
}

//Eg. 14
try{
    let [high, low] = null;
    console.log(`high:${high} low:${low}`);
}
catch(ex){
    console.log(ex.message);
}

//Eg. 15
{
    let count=0;
    for (let [a,b] of [[5, 10]]) {
        console.log(`${a} ${b}`);
        count++;
    }
    console.log(count);
}