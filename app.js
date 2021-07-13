var tweets = [
    {
        tweet: "Goals allow you to control the direction of change in your favor.",
        username: "BubblySnowflake",
        created_at: "12-02-2019",
        age: 51
    },
    {
        tweet: "Had a great weekend",
        username: "FairyPrincess",
        created_at: "01-29-2019",
        age: 20
    },
    {
        tweet: "Nice weather today",
        username: "TurboSlayer",
        created_at: "02-02-2021",
        age:16
    },
    {
        tweet: "I don’t have a bad handwriting, I have my own font.",
        username: "experthead",
        created_at: "12-01-2020",
        age: 17
    },
    {
        tweet: "Reading texts half asleep is like looking into the sun.",
        username: "dyzzie",
        created_at: "03-12-2021",
        age: 30
    },
    {
        tweet: "If opportunity doesn’t knock, build a door.",
        username: "happee",
        created_at: "01-26-2021",
        age: 26
    },
    {
        tweet: "When you get to the end of the rope, tie a knot and hang on.",
        username: "o0o_jean_o0o",
        created_at: "05-16-2021",
        age: 16
    },
    {
        tweet: "Nothing is impossible, the word itself says I am possible!",
        username: "eatingcake",
        created_at: "08-18-2020",
        age: 27
    },
    {
        tweet: "If you cannot do great things, do small things in a great way.",
        username: "ishot",
        created_at: "11-12-2020",
        age: 17
    },
    {
        tweet: "You are never too old to set another goal or to dream a new dream.",
        username: "citrus",
        created_at: "04-22-2021",
        age: 18,
    }
];

function ageOver(user) {
    return user.age >= 18;
    }
    
var result = tweets.filter(ageOver);

console.log(result);
