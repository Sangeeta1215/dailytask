// 'use strict';

// (function(){                   //self executing function
// console.log("hello world");
// })();

// 'use strict';
// (function()
// {
//     let person={
// firstname:'Jim',
// lastname:'copper'
//     }
//     person.age=12;
//     console.log(person.age);di
// })();

let obj={
    age:34
}
let obj2={
    age:35
}
function display(fname,lname){
console.log(this.age,fname,lname);
}
display.call(obj,"rahul","raj");                           //explcit binding
display.call(obj2,"rahul","raj");

display.apply(obj,["rahul","ram"]);
display.apply(obj2,["rajan","rahul"]);


let object=
{
name:"rahul",
age:24,
roll:function (fname,lname)
{
console.log(this.age,fname,lname);
}
}
let object1=
{
name:"Gourav",
age:14
}
let y=object.roll.bind(object1,"rajan","ra");
y();







