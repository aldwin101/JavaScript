var userAge = [16, 17, 18, 19, 16, 30, 17]; //array
var is_subscribed = ["subscribed", "not subscribed", "subscribed", "not subscribed", "not subscribed", "not subscribed", "subscribed"]; //array
var length = userAge.length; // computes the length of the elements inside the array automatically

for (var counter = 0; counter < length; counter++){ //for loop (initialization - created counter variable that will start the count from 0 or the first element inside the array; counter condition statement - if counter is less than the length of the element inside the array loop will execute; increment expression - counter + 1)
    var age = (userAge[counter]); // assigning variable
    var status = is_subscribed[counter]; // assigning variable

// if statement
    if (status == "subscribed" && age < 18){ //if (condition - if status is equal to subscribed and age is less than 18)
        console.log("The user is younger than 18 and is subscribed"); //if the condition above is true print this
    }else if (status == "subscribed" && age >= 18){
        console.log("The user is 18 or older and is subscribed");
    }else if (status == "not subscribed" && age < 18){
        console.log("The user is younger than 18 and not subscribed");
    }else if (status == "not subscribed" && age >= 18){
        console.log("The user is  18 or older and not subscribed");
    }else{
        console.log("Invalid input. Please try again!"); // if all the condition inside the if statement is false print this
    }
    console.log(); // adds space
}
