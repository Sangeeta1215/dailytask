// let price=200;
// if(price>10 && price<1600)
// {
// console.log("Both conditions are true:");
// }
// if(price>10 && price<200)
// {
// console.log("Price is greater than 10 but not less than 200");
// }
// if(price>10 || price<1600)
// {
//     console.log("Both conditions are true:");  
// }
// if(price>10 || price<200)
// {
//  console.log("Price is greater than 10 but not less than 200");
// }
// if(!(price<10))
// {
// console.log("Price is not less than 10");
// }

function shortCircuitAndSample()
{
let result;
result=isColorRed("Black") && isGreaterThan1400(1400);
}
function isColorRed(value)
{
console.log("In the isColorRed() function");
return value === "Red";
}
function isGreaterThan1400(value)
{
console.log("In the isGreaterThan1400() function");
return value >1400;
}
shortCircuitAndSample();

function shortCircuitOrSample()
{
let result;
console.log("");
console.log("Calling isColorred() first");
//Each expression is evaluated until one returns a true
result = isColorRed("Red") || isGreaterThan1400(200);
console.log("");
console.log("Calling isGreaterThan1400() first");
}
shortCircuitOrSample();
