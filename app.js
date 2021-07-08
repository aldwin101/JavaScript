var user = 17;
var is_subscribed = true;

if (user < 18) {
    if (is_subscribed != true) {
        console.log("The user is younger than 18 and not subscribed");
    } else if (is_subscribed == true) {
        console.log("The user is younger than 18 and is subscribed");
    }
} if (user >= 18) {
    if (is_subscribed != true) {
        console.log("The user is  18 or older and not subscribed");
    } else 
        console.log("The user is 18 or older and is subscribed");
    }