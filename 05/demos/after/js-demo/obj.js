function tryCatch()
{
let result;
try
{
console.log("an error will ocuur");
result=x/9;
console.log("an error is occured");
}
catch(error)
{
console.log(error.message);             //a javascript error object always has "name" and "message" properties.
}
finally
{
console.log("This block always executes");
}
}
tryCatch();

// function throwError()
// {
// try{
// attemptDivision();
// }
// catch(error)
// {
// console.log(error.message+ "-Error Type:" +error.name);
// }
// }
// function attemptDivision()
// {
// let result;
// try{
// result=x/10;
// }
// catch(error)
// {
// //Always include at least a 'message' and 'name' properties
// throw{
// "message":"In the attemptDivision() method the following error occured:"+error.message,
// "name":"CustomError"
// };
// }
// }
// throwError();