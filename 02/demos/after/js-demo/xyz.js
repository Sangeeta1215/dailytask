// var ar=[];
// for(i=1;i<=50;i++)
//  {
//  ar.push(i)
// }
// console.log(ar)
// var a=ar.filter((i) => ((i%2==0) && (i%5==0)))
// console.log(a); 


//  function myfun()
// {
// let ar=["sourav","Gourav","Ram","Falgun","sa"];
// var a=ar.filter((item)=>(item.length>3))
// console.log(a);
// }
// myfun()

// var ar=[2,5,8,9,10];
// var a= ar.find((item)=>(item%2==0))
// console.log(a)
// ar.sort((a,b) => (b)-(a))
// console.log(ar);

// var ar1=[[1,3,5],[3,7,9,10]]
// var b=ar1.flat();
// console.log(b);

//  var ar=[2,5,8,10,31,56];
//  var initialValue=0;
//  var b=ar.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
//  console.log(b);

var ar1=[1,3,5,7,89,8,444];
//var a=((ar1.map(item=>item)).filter((item)=>item%2==0)).sort();
//console.log(a);
var count=0;
var a=ar1.filter(prime);
console.log(a);

function prime(item)
{
for(var i=2;i<item/2;i++)
{
if(item%i==0)
{
count++;
}
}
if((count==0)&&(item!=1))
{
return true;
}
}

var a=10
console.log(new Boolean(a));

var ar=[1,2]
function test(a,b)
{
console.log(a+b)
}
test(ar);
test(...ar);    //spread operator

