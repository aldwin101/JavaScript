var tweets = ["Goals allow you to control the direction of change in your favor.","Had a great weekend","Nice weather today","I don’t have a bad handwriting, I have my own font.","Reading texts half asleep is like looking into the sun.","If opportunity doesn’t knock, build a door.","When you get to the end of the rope, tie a knot and hang on.","Nothing is impossible, the word itself says I am possible!","If you cannot do great things, do small things in a great way.","You are never too old to set another goal or to dream a new dream."]; //array
var length = tweets.length; // computes the length of the elements inside the array automatically

for (var counter = 0; counter < length; counter++){ //for loop (initialization - created counter variable that will start the count from 0 or the first element inside the array; counter condition statement - if counter is less than the length of the element inside the array loop will execute; increment expression - counter + 1)
    console.log(tweets[counter]); //prints the tweets in the console
    console.log(); //adds space
}
