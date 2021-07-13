//Function 1
function mathOperations(num1,num2) {
    return [num1 + num2]*5
}

console.log(mathOperations(1,2));


// Function 2
function stringCount(string) {
    if (string.length > 10){
        return ("Input accepted");
    } else {
        return ("Characters should be more than 10. Please try again!");
    }
}

console.log(stringCount("Lorem ipsum dolor sit amet consectetur adipisicing elit."));


// Function 3
var list = ["john", "jack", "philip", "peter", "phoebe"];

function startswith(name) {
return name.startsWith("ph");
}

var result = list.filter(startswith);

console.log(result);