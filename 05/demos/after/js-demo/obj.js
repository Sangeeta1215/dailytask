let color="Red";
let price=200;
let result;
if(color)
{
console.log("Color is red");
}
result=price>10;
console.log(result);
if(price>5)
{
console.log(price);
}
color=null;
console.log("color == null =" +Boolean(color));
color= "";
console.log("color == ' ' = " +Boolean(color));
color=undefined;
console.log("color == undefined =" +Boolean(color));
let value;
console.log("let value =" +Boolean(value));
value=100/"test";
console.log("100/'test' =" +Boolean(value));

