**Navigate to the WDI_EUCALYPTUS_KOALA folder on your computer**

If you have any outstanding files that need to be tracked and committed, do that now!

`git pull upstream master`

**What:**
We will get practice using jQuery as well and setting up a boilerplate application with HTML, CSS and JS.<br>
**Why:**
Lots of applications on the internet rely on jQuery to manipulate and traverse the DOM as well as create fun animations.<br>
**How:** We will make a My Little Pony gif trot across our browser windows.<br>

## LEARNING OBJECTIVES (SWBAT)
1. Set up a boilerplate application (HTML, CSS, JS)
2. Explain the difference between `setTimeout()` and `setInterval()`

## INTRO (5 minutes)
- Screen Music
- `git pull upstream master`
- Demo what we will be building!

## YOU DO—App Setup (10 Minutes)
- Have students go through the markdown to setup the boilerplate application (steps 1 & 2)
- Instructions should explicitly get them setup for layout to work
- Check in after 10 minutes
- Make sure everyone has the background image and pony trotting in place

## WE DO (10 Minutes)
- Read the rest of the instructions

- Review what `setTimeout()` does

```js
function sayHello() {
  setTimeout(function() {
    console.log("Hello");
  }, 1000);
};
sayHello();
```

- How is that different from `setInterval()`?

```js
var intervalId;

function sayHi() {
  intervalId = setInterval(function() {
    console.log("Hi!");
  }, 3000);
}

function stopSayingHi() {
  clearInterval(intervalId);
}

sayHi();
stopSayingHi();
```

## YOU DO—Make the Pony Trot! (20 Minutes)
- Have students work in pairs to use jQuery to make the pony trot
- Check in after 15 minutes

## WE DO—Solve Exercise (10 minutes)
- Show solution or code it live
- Answer any clarifying questions
- jQuery!

## CLOSURE (5 minutes)
- Ask student to differentiate between `setInterval` and `setTimeout`
- Field any questions
- NO STAND UPS TODAY
- INTRODUCE PAN: About to kickoff the next WDI: Pluto!
