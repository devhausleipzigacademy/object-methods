// --------------- Javascript -------------- //
// ------------- Object Methods ------------- //
// --------------- Exercises --------------- //

// In all of the following exercises, you should use
// the object functions: .keys(), .values(), .entries() or .fromEntries()

// ------------- Task 1: SCHOOL ------------- //

// Given is an object with grades of some students
const studentGrades = {
    Bob: 92,
    Alice: 85,
    Eve: 91,
    David: 79,
    Charlie: 88,
    Martin: 45,
    Lucy: 94,
  };

// 1.1. Create a new array called 'studentNames'
// that contains the student's names in alphabetical order

// YOUR SOLUTION //

// 1.2. Create a new array called 'goodStudents'
// that contains only the names of the students
//  with a grade better than or equal to 90

// YOUR SOLUTION //

// 1.3. Calculate the average grade
// save the result in a variable called 'averageGrade'

// YOUR SOLUTION //


// ------------- Task 2: SUPERMARKET ------------- //

// Given is an object with products and their prices of your supermarket
const storeProducts = {
    'Apple': 1.2,
    'Banana': 0.8,
    'Cherry': 2.5,
    'Date': 3.0,
    'Elderberry': 1.5
  };

// Write a function called 'applyDiscount()' that takes two arguments:
// - the JS object with your products and their prices
// - the discount which should be applied to the items (in percentage)

// The function does the following:
// Convert the object to an array with [key, value] pairs
// Apply the discount to each product
// Convert the updated array of [key, value] pairs back to an object
// return the updated object with discounted prices


// YOUR SOLUTION //


// ------------- TESTING ------------- //

let task = 1;
let subtask = 1;
// Task 1.1
try {
  if (studentNames.length == 7 && studentNames[0] === "Alice") {
    console.log("\x1b[32m", "[Task 1.1] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.1] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 1.2
  if (goodStudents.length == 3 && goodStudents.includes('Eve')) {
    console.log("\x1b[32m", "[Task 1.2] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.2] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 1.3
  if (averageGrade == 82) {
    console.log("\x1b[32m", "[Task 1.3] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.3] Failed", "\x1b[0m");
  }
  subtask++;
  subtask = 1;
  task++;

} catch {
  console.error("\x1b[31m", `[Task ${task}.${subtask}] Failed`, "\x1b[0m");
}
