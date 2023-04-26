var n1=0;
console.log(n1);
var n2=1;
console.log(n2);
var next;
for(var i=1;i<10;i++)
{
    next=n1+n2;
    console.log(next);
    n1=n2;
    n2=next;
    
    
}