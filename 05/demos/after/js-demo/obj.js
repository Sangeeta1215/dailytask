let price=200;
let stringValue="100";
let result=0;
console.log("price =" +price.toString());

result=price+stringValue;
console.log("result(number + stringValue)="+result.toString());

result=price+(+stringValue);
console.log("result(number +(+stringValue))="+result.toString());

let i=10;
let j=4;
j+=i;
console.log(j)