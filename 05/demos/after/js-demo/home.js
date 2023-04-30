// let  price="A123.01"
//  price=Number.parseFloat(price)
// showMessage(price);   

// function fn()          // function declaration
// {
// console.log("Here I am");
// }
// fn();
                      

//  var f=function()                      //function expression
//  {
//     console.log(true);
//     showMessage(true);
//  }
//  f();

// var f=function(a,b)
// {
// console.log(a);
// console.log(b);
// }
// f("Harry","Bhai");

// let key=4;
//  var f=function(value)
//  {
//  let n=value*4*key;
//  return n;
//  }
//  showMessage(f(2));
//  console.log(f(4));
//  console.log(n);

 let key=42;
 function keyGenerator(value)                   //function scope
 {
let secretCode=function(){
    let key=12;
    console.log("In secret key is:",key);
    return key;
}
let code=value*secretCode();
console.log("In key generator key is:",key);
return code;
 }
 showMessage(keyGenerator(2));
 changePercentOff(60);