let person=
{
name:"John",
age:25,
partTime:false,
showInfo:function(realage)
{
showMessage(this.name +" is "+ this.age);
}
};
person.showInfo(34);
