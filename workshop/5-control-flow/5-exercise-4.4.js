// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.
for (i = 100; i >= 0; i = i - 1) {
    if ( i % 2 === 0) {
    console.log(i);
    }
}