// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe ("names", () => {
   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
expect(names(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

})
})

// b) Create the function that makes the test pass.
// FAIL  ./code-challenges.test.js
// names
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// remainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

// ● names › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: names is not defined

//  Psuedo Code

// Create a function called names that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// use .map to iterate through the array
// return string interpolation with the value of the name key with capitalizations
// 

const names = (array) => {
  return array.map(object => {
    return `${object.name.split(" ").map(value => {return value.charAt(0).toUpperCase() + value.slice(1)}).join(" ")} is ${object.occupation}.`
  })
}

// I honestly dont understand why its failing.

//  PASS  ./code-challenges.test.js
//   names
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
// remainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("remainders", () => {
  
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})

// b) Create the function that makes the test pass.

// FAIL  ./code-challenges.test.js
// remainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// ● remainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//   ReferenceError: remainders is not defined


//  Psuedo Code
// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// Create a variable equal to an empty array
// Create for loop to iterate through array
// create a cinditional statement within for loop that checks to see if the value at the index is equal to a number using the typeOf method. If true, push the modulo of three of that value into the empty array.
// return empty array

const remainders = (array) => {
  let numbers = [];
  for(let i=0;i<array.length;i++) {
    if(typeof array[i] === "number"){
      numbers.push(array[i] % 3)
    }
  }
  return numbers
}
// PASS  ./code-challenges.test.js
// remainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.491 s, estimated


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("sum", () => {
  
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
expect(sum(cubeAndSum1)).toEqual(99)
expect(sum(cubeAndSum2)).toEqual(1125)
})
})

// b) Create the function that makes the test pass.

// FAIL  ./code-challenges.test.js
// sum
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

// ● sum › takes in an array of numbers and returns the sum of all the numbers cubed.

//   ReferenceError: sum is not defined

//     69 | const cubeAndSum2 = [0, 5, 10]
//     70 | // Expected output: 1125
//   > 71 | expect(sum(cubeAndSum1)).toEqual(99)
//        | ^
//     72 | expect(sum(cubeAndSum2)).toEqual(1125)
//     73 | })
//     74 | })

//     at Object.expect (code-challenges.test.js:71:1)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.373 s, estimated 1 s


//  Psuedo Code

// Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// create variable
// create a for loop to iterate throughout the array
// create a variable inside the for loop
// variable inside the for loop cubes the index by setting it equal to math.pow 
// return varible that was set to zero to plus the new variable thats equal to the index cubed.

const sum = (array) => {
  let cubed = 0;
  for(let i=0;i<array.length;i++) {
    let sum = Math.pow(array[i], 3);
    cubed = cubed + sum
  }
  return cubed
}
// PASS  ./code-challenges.test.js
// sum
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.42 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.03s.