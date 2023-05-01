function handleError(error)
{
switch(error.name)
{
case 'ReferenceError':
console.log("Reference error:"+error.message);
break;
case 'Rangeerror':
console.log("Range error:"+error.message);
break;
case 'TypeError':
console.log("Type error:"+error.message);
break;
case 'URIError':
console.log("URI error:"+error.message);
break;
case 'SyntaxError':
console.log("Syntax error:"+error.message);
break;
case 'EvalError':
console.log("Evaluation error:"+error.message);
break;
default:
console.log("Error Type:"+error.message+ "-Message:"+error.message);
break;
}
}
function referenceError()
{
let result;
try{
result=x/10;
}
catch(error)
{
handleError(error);
}
}
referenceError();
function rangeErrorSample()
{
let result=0;
try{
result.toPrecision(200);
}
catch(error)
{
handleError(error);
}
}
rangeErrorSample()
function typeErrorSample()
{
let result=0;
try
{
result.toUpperCase();      //type error because result is numeric
}
catch(error)
{
handleError(error);
}
}
typeErrorSample()
function uriErrorSample()
{
let uri="http://www.netnc.com/path%%%/file name";
}
try{
decodeURI(uri);
}
catch(error)
{
handleError(error);
}
uriErrorSample()
function syntaxErrorSample()
{
try
{
let sum=eval("alert('hello)");        //missing single quote
}
catch(error)
{
handleError(error);
}
}
syntaxErrorSample()

