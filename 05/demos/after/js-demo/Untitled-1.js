/*var a=[{name:"Sourav"},
        {class:"5th"}];
for(var i of a)
{
for(var j in i)
{
console.log(i[j]);
}
}*/
var obj={
    name:"abc",
"Location":
{
    "city":"Jammu",
    "pin":1800
}
}
var obj1={
    "name":"abc",
"Location":
{
    "city":"Jammu",
    "pin":1800
}
}
var a=[obj,obj1];
for(var i of a)
{
for(var j in i)
{
if(typeof(i[j])=="object")
{
for(var k in i[j])
{
if(k=="city")
{
console.log(i[j][k])
}
}
}
}
}
