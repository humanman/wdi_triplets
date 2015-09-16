**Navigate to the WDI_EUCALYPTUS_KOALA folder on your computer**

If you have any outstanding files that need to be tracked and committed, do that now!

`git pull upstream master`

**What:**
We will take a second pass at prime number functions.<br>
**Why:**
Students have asked to review the prime numbers problems we've presented so far.<br>
**How:** I will pseudo-code and share my solution.<br>

## LEARNING OBJECTIVES (SWBAT)
1. Solve problems involving prime numbers.

## INTRO (5 minutes)
- Second Pass at Prime Problems
- There are MANY ways to solve these!

## I DO—`isPrime` (10 Minutes)
- pseudo-code the problem and its components on the whiteboard
- a number that we want to check
- `for` because we need to check whether all the numbers lower than the number itself are factors
- loop starting at 2
- if the number is divisible by ANYTHING below itself
- a boolean value that labels the number as prime (true) or not prime (false)
- write the code
- test it out
- ask for questions

## I DO—`printPrimes` (15 Minutes)
- pseudo-code the problem and its components on the whiteboard
- a number that we want to print to
- `for` because we need to print many numbers
- loop starting at 2
- if `isPrime` is true of `i`, log this message to the console
- otherwise, just print the number
- write the code
- test it out
- ask for questions

## I DO-`primeAtPosition` (5 Minutes)
- need to pass in position number
- need two counters
  * the position counter
  * i
- we need to loop, but aren't sure how many times because we have to compare position counter to position number
- if `ifPrime` is true add 1 to the position counter
- AND in this same condition, if the position counter is the same as the position number, we have the number!
- otherwise, keep looping by adding 1 to i

## YOU DO—`primeAtPosition` (15 Minutes)
- If you already solved this, see if you can solve it a different way or help someone around you.
- Try solving it now!

## WE DO—`primeAtPosition` (10 Minutes)
- Ask someone to share their solution in Slack
- Have them explain it
- I will then conclude by sharing my solution

## CLOSURE (5 minutes)
- Field any questions

## STAND UPS (10 minutes)
