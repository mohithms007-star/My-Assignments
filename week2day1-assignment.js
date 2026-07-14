function lastWordLength()
{
let s = "Hello World"
let r = ""
console.log(r = s.split(" "));
console.log("The Last word - World length is: ", r[1].length);
}

function findLastWordLength()
{
let s = " fly me to the moon "
let r = ""
console.log(r = s.trim().split(" "));
return r[r.length-1].length;
}
let result = findLastWordLength();
console.log("The Last word - moon length is:", result);

lastWordLength()

function isAnagram(string1,string2) {
let str1 = string1.trim().toLowerCase();
let str2 = string2.trim().toLowerCase();

let sortStr1 = str1.split("").sort().join("");
let SortStr2 = str2.split("").sort().join("");

return sortStr1 === SortStr2;

}
console.log(isAnagram("Hello","World"));
console.log(isAnagram('listen', 'silent'));