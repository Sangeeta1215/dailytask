var a=[3,6,8,7,13,98,36];
count=0;
count1=0;
for(var i=0;i<7;i++)
{
if(a[i]%2==0)
{
count++;
}
else
{
 count1++;
}
}
console.log("Even numbers are:",count);
console.log("Odd numbers are:",count1);
