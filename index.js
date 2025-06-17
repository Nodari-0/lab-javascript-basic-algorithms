// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".
let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
console.log(
  hacker1.length > hacker2.length
    ? `The driver has the longest name, it has ${hacker1.length} characters.`
    : hacker1.length < hacker2.length
    ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    : `Wow, you both have equally long names, ${hacker1.length} characters!`
);

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driverName = hacker1.toUpperCase().split("").join(" ");
console.log(driverName);
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorName = hacker2.split("").reverse().join("");
console.log(navigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
