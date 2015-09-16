var isPrime = function(num) { // num is the number we want to check
    for (var i = 2 ; i < num ; i++) { // start a for loop at 2 ; continue to run until i is the number ; add 1 to the number passed in to continue running
        if (num % i === 0 ) { // if the number we're checking is divisble by i (which is any number below itself while the loop is running), it is NOT prime.
            return false; // return false because this number is not prime based on the above condition
        } // this is the only condition we need to check for in the loop
    }
    return true; // return true outside the loop, which means the number IS prime
};

var printPrimes = function(num) { // num is the number we want to print up until
    for (var i = 2 ; i <= num ; i++) { // start a for loop at 2 ; continue to run until i is the number ; add 1 to the number passed in to continue running
        if (isPrime(i)) { // if isPrime(i) is true, meaning if a number is prime
            console.log(i + " <--PRIME!"); // console log the number & a message
        } else { // otherwise,
            console.log(i); // just print the number
        }
    }
};

var primeAtPosition = function(positionNumber) { // positionNumber is the position in the list of primes we want to find
    var positionCounter = 0; // keep track of what position I'm at in the list of prime numbers
    var i = 2; // initialize my loop starting at 2 because that's where the list of prime numbers begins
    while (positionCounter < positionNumber) { // I don't know how many times I need to loop, so I will use a while loop to compare the position number to the position counter
        if (isPrime(i)) { // if isPrime(i) is true, meaning if a number is prime
            positionCounter++; // add 1 to my counter which is keeping track of my position in the list of primes
        }
            if (positionCounter === positionNumber) { // within that condition, if the position counter is equal to the position number,
                console.log(i); // tell me what that number is!
                return i; // return it
            }
        i++; // otherwise, keep looping
    }
};

primeAtPosition(10001);
