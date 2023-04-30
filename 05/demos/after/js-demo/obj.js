// var object=
// {
// name:"gourav",
// age:7,
// roll:function()
// {
// rollno:1;
// }

// }
// for(var i in object)
// {
// console.log(i + ":"+ object[i]);
// }

// let products=[
//     {
//     productID:680,
//     name:"HL Road Frame - Black,58",
//     productNumber:"FR-R92B-58"
//     },
//     {
//         productID:890,
//         name:"Sport-100 Helmet,Red",
//         productNumber:"HL-U509-R"
//     }
// ];
// for(var i of products)
// {
// console.log(JSON.stringify(i));
// }
// console.log(typeof(products)); 

let productName="HL Road Frame - Black,58";
let letters=" ";
for(var char of productName)
{
letters=letters+char;
}
console.log(letters);
