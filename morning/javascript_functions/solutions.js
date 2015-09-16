isPrime = function(num) {
    for (var i = 2 ; i < num ; i++) {
        if (num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function printPrimes(num) {
    for (var i = 2 ; i <= num ; i++) {
        if (isPrime(i)) {
            console.log(i + " <--PRIME!");
        } else {
            console.log(i);
        }
    }
}

// isPrime(10);
// isPrime(7);

function primeAtPosition(positionNumber) {
  var positionCounter = 0;
  var i = 2;
  while (positionCounter < positionNumber) {
    if (isPrime(i)) {
        positionCounter++;
    }
        if (positionCounter === positionNumber) {
            console.log(i);
            return i;
        }
  i++;
  }
}

// primeAtPosition(10);
// primeAtPosition(100);

primeAtPosition(10001);

// Alan's solution
function primeIndex(num) {
  var positionCounter = [];
  var i = 1;

  while(positionCounter.length <= num) {
    if (isPrime(i)) {
      positionCounter.push(i);
      i++;
    } else {
      i++;
    }
  }
  console.log("The " + num + "th prime is " + positionCounter[num]);
}

primeIndex(10001);

// Skip's solution
function primeAtPosition(number) {
  var i = 1;
  while (number > 0) {
    i++;
    if (isPrime(i)) {
      number -= 1;
    }
  }
  return i;
}
