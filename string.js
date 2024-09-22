

const name = "ravir"
const repocount = 50

// old  console.log(name + repocount + "value");  ravir50value
//mordrn console.log(`name my is ${name}`);

// string delcaler

const gameName = new String("rahul")

console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length) 

console.log(gameName.toUpperCase()) 

console.log(gameName.charAt(5));    // char ki index find
console.log(gameName.indexOf('l'))


console.log(gameName.substring(0  , 3))  // string ke ander se string nikalna hoga
console.log(gameName.slice(3,4))   // 3 or 4 ke bech se string nikalna



const newStringone  =  "   h   "    //jab space naho chiye hote hai
console.log(newStringone.trim())

// replace

const url = "https://newidea%20com/newarea"
console.log(url.replace('%20' , '-'))
console.log(url.includes("r"))  //hai ki nahi pata karne ke liye

console.log(gameName.split(""))

console.log("------------------------------------------")


let text = "Please locate where 'locate' occurs!";


console.log(text.indexOf("l"))
console.log(text.lastIndexOf("locate"))  //last se count karta hai postion
let index = text.indexOf("locate", 15);
text.lastIndexOf("locate", 15);

//serch method
console.log(text.search("where"));
console.log(text.search(/locate/))


//The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

console.log("----------------------------------------------------------------")

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match("ain"))
















