var a=
[
{
name:"Rahul",
age:63
},
{
    name:"Ram",
    age:7
    },
    {
        name:"Rajan",
        age:2
        }
];

function fun(a){
for(var item of a)
{
if(item.age>10)
{
    continue;
}
console.log(item);
}
}
fun(a);

// let products=[
//     {
//         productId:680,
//         name:"HL Road Frame - Black,58",
//         standardCost:1059.31
//     },
//     {
//         productId:707,
//         name:"HL Road Frame - Black,58",
//         standardCost:13.08
//     },
//     {
//         productId:980,
//         name:"HL Road Frame - Black,58",
//         standardCost:9.50
//     }
// ];
// function fun()
// {
// for(const item of products)
// {
// if(item.standardCost<20)
// {
// break;
// }
// console.log(item);
// }
// }
// fun();

// function labelSample()
// {
// even:
// for(let index=1;index<=10;index++)
// {
// if(index %2==1)
// {
// continue even;
// }
// console.log(index);
// }
// }
// labelSample();