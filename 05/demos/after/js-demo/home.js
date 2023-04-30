// const app=
// {
// productId:12345,
// username:"Joe",
// orderNumber:789
// };
// function showProductId()
// {
// console.log(app.productId);
// console.log(app.username);
// }
// showProductId();

let productId=12345;
function showProduct(id)
{
    function fix()
    {
    console.log("in fix:",productId);
    }
    fix();
    console.log("in showProduct:",productId);
}
showProduct();
