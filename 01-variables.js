// ---------
// Variables are used to store a value
// ---------

// "const" is used to declare a variable that cannot be reassigned
const name1 = "lilo";
const age1 = 16;

// trying to change a const variable causes an error
age1 = 17;
name1 = "akra";

console.log(`my name is ${name1} and i am: `, age1);
// won't run because the error above stops execution



// "let" is used to declare a variable that CAN be reassigned later
let name2 = "lilo";
let age2 = 13;

// reassigning a let variable is allowed
age2 = 14;
name2 = "akra";

console.log(`my name is ${name2}and i am: `, age2); 
// output: my name is akra and i am: 14 (because we reassigned the variable)