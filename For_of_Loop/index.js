'use strict'

//Eg. 1
var categories=['hardware','software','vaporware'];
for(var item of categories){
    console.log(item);
}

//Eg. 2
var categories=[,,];
for(var item in categories){
    console.log(item);
}

//Eg. 3
var codes="ABCDF";
var count=0;
for(var code of codes){
    count++;
}
console.log(count);