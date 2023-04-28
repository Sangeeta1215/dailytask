et object=
{
name:"rahul",
age:24,
roll:function ()
{
console.log(this.age);
}
}
let object1=
{
name:"Gourav",
age:14
}
let y=object.roll.bind(object1);
y();







