console.log("Welcome to the program") //code that is written within the main global scope of a program is executed automatically
//global scpoe of  a program is executed automatically
var hotel = {
    name: "CareerDevs Hotel",

    linecook: function (param1,param2){
    //lines of javascript code
    //more lines of code
    //method is a function within an object
    console .log("Welcome to the Method")//local scope to the method and also local to the object
    }
}
console.log("Welcome to the MIDDLE of the program.")

function sousChef(param1,param2){
    //lines of javascript code
    //more lines of code
    console.log("Welcome to the Function")//local scope to the function
}

console.log("Welcome to the END of the program")
