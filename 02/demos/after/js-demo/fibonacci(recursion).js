function fibo(n)
{
if(n>0)
{
next=n1+n2;
console.log(next);
n1=n2;
n2=next;
fibo(n-1);
}
}
let n1=0;
console.log(n1);
let n2=1;
console.log(n2);
var n=10;
fibo(n-2);