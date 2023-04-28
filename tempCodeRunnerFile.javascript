var str="How many vowels and consonants in a given sentence";
var regex=/[aeiou]/;
var count=0;
var count1=0;
for(var i of str)
{
if(i.match(regex))
{
count++;
}
else
{
    console.log(i);
count1++;
}
}
console.log("Count of vowels is:",count);
console.log("Count of consonants is:",count);
