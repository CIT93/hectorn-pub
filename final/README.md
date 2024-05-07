# sleep planner

the Sleep Planner is an app that will help me decide what time I should be going sleep based on the day of the week and how many hours I have already slept.

This app will have the purpose of trying to keep my sleep schedule as consistent as possible, suggesting general times to try and have a eight hour period of rest inserted into the day.

## Global Variables

* hoursSlept (Number): the number of hours slept in a full week
  * Ranging from 0-56. 56 is the full 7 day total possible with 8 hours slept each day.
* currentDay (String): holds current day of the week
* yesWork (Boolean): Return true if current day is Monday through Friday and sunday, if not then return false
  * will have conditional for Sunday since I have alternating Sundays that I work
* yesSchool (Boolean): Return true for if current day is Monday to Thursday, if not then return false
* lastNight (Number): time i went to bed the previous night
* startTime (Number): The time I start work on days that I do work

## Decision Making Process

* If current day is both work and school the app decides that start time is 6am
* If current day is a day that there is  work but no school start time is 9am
* If hours slept are less that 8 each day app will add missing hours from full 8 to offset and reach full 56hour total
* hoursSlept will be a full total like the cfptotal in our carbon footprint

## Output

* The time i should be falling asleep to reach 8 hours in that day plus hours I may be missing from night before

## step 1

//Input Variables

```
const hoursSlept = 12; // Total amount of hours slept so far
let currentDay = "Monday, Tuesday, Wednesday,Thursday, Friday, Saturday"; //String: Current day of the week
let startTime = "6:00 am"; //Shows start time for work
let lastNight = 6;
```

```
if (currentDay) {
  if (hoursSlept > 24 && lastNight > 8) {
    //in this example this math works with the current day of tuesday, will need to crete the if/else to add the math in
    console.log("you got your recommended sleep last night");
  } else if (hoursSlept < 32 && lastNight < 8) {
    console.log("you should have got more sleep");
  }
}
```

//this is comparing what day it is to get start time of day, this will be used to determine what is the latest time we can be up till if we have not been consistent with 8 hours of sleep

```
if (currentDay === "Monday" || currentDay === "Wednesday") {
  startTime = "6:00am";
  console.log("your day starts at 6:00am");
} else if (
  currentDay === "Tuesday" ||
  currentDay === "Thursday" ||
  currentDay === "Friday"
) {
  startTime = "9:00am";
  console.log("your day starts at 9:00am");
} else if (currentDay === "Saturday") {
  console.log("Sleep IN");
} else if (currentDay === "Sunday"){
  console.log("work?")
}
```
### FeedBack
Step 1 feed back

* On your currentDay, because you are setting to to a string of days of the week: currentDay = "Monday, Tuesday, Wednesday,Thursday, Friday, Saturday"; when you if(currentDay) it will ALWAYS be true and on this code if (currentDay === "Monday" || currentDay === "Wednesday") it will NEVER run!!!
  * Also you are not setting any variables inside your conditional statement

step 2 feedback

* My only feedback would be to call your functions with different inputs. Here you are only calling it once.  You might want to consider setting up a function to handle the output so you don't need need to create a global variable.
