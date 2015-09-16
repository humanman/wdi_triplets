# Week 1 Assessment

**Please work alone.** Use tools, such as the Chrome Console or JSFiddle to test writing your code.

The answers to these questions will be short bits of JavaScript code. We are not looking for any English in your answers. Please record your answers in a new HTML file called `w01_assessment.html`.

Please submit your work by emailing the HTML file to:
* Andrew: `andrew@generalassemb.ly`
* Rafa: `rafa.pacas@generalassemb.ly`
* Emily: `emily.lordahl@generalassemb.ly`

## Problem 1

How do I get the string "prairie dog" out of the variable `animals`?

`var animals = ["koala", "kangaroo", "prairie dog"];`

## Problem 2

How do I get the string `"Defying Gravity"` out of the variable `favoriteSongs`?

```js
var favoriteSongs = {
  andrew: "On My Own",
  rafa:  "New York State of Mind",
  emily: "Defying Gravity"
};
```

## Problem 3

How do I get the string `"Clinton"` using the variable `knowledge`

```js
var knowledge = {
  presidents: ["Clinton", "Roosevelt", "Bush", "Lincoln"],
  states: ["New York", "Virginia"]
};
```

## Problem 4

Using the variable `userName`, create a variable `greeting` that concatenates a greeting message. For example:

`var userName = "Kathew the Koala"`

The variable `greeting` should equal:

`"Kathew the Koala, welcome to the jungle."`

## Problem 5

Using the variables `bankBalance` and `itemPrice`, create an if-statement that logs `"Treat yoself!"` if `bankBalance` is greater than or equal to `itemPrice`.

`bank_balance = 200`

`item_price = 30`

##Problem 6

Using the variables `porridgeTemperature` and `goldilocksPreference`, write conditional statements that log one of the following statements to the console:

* "This porridge is too hot!" if `porridgeTemperature` is greater than `goldilocksPreference`
* "This porridge is too cold!" if `porridgeTemperature` is less than `goldilocksPreference`
* "This porridge is jusssst right!" if `porridgeTemperature` equals `goldilocksPreference`

`var porridgeTemperature = 65;`

`var goldilocksPrefers = 70;`

## Problem 7

Write a function called `add7` that takes one parameter called `aNumber`. Your function will return the number passed in but incremented by 7. Here are some test calls of the function you are to write.

```js
adds7(4);
// 11
adds7(10);
// 17
```
## Problem 8

Write a function called `greetsTwo` that takes two arguments, `name1` and `name2` (both should be strings). Your function should return a string saying "Hello" to both names. Here are some sample calls of the function you are to write.

```js
greetsTwo("Andrew", "Rafa");
//returns "Hello Andrew. Hello Rafa."
greetsTwo("WDI Eucalyptus", "Koala");
//returns "Hello WDI Eucalyptus. Hello Koala."
```
## Problem 9

Write a function called `greaterThan` that takes two arguments, `number1` and `number2`. The return value will depend on a condition.

* return `number1` if it is greater than `number2`
* return `number2` if it is greater than `number1`
* return "Same number!" if `number1` and `number2` are equal

## Problem 10
Create an object called `bicycle`.  It should have the following attributes:

* `make`: the make of the bike (something like Schwinn, Mongoose, etc.)

* `color`: the color of the bike


## Problem 11
Write a function called `sentenceCase` that takes a single argument, a string, and returns the string with the first letter of the word capitalized.

```
mustNotBeNamed = "voldemort";
capitalizer(mustNotBeNamed);
// returns "Voldemort";
```

## Problem 12

Write a function called `saysHarry`. `saysHarry` takes two arguments, a function and an input. `saysHarry` should return the result of calling that function argument with the input argument, but with " says Harry."
```
saysHarry(capitalizer, "voldemort")
// returns "Voldemort says Harry."
```
