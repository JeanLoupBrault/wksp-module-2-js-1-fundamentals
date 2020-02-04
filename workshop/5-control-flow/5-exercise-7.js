// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...

for (i = 1; i <=100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    }
        else {
            if (i % 5 === 0) {
                console.log('Buzz');
            }
                else {
                    console.log(i);
                }
            }
        }




