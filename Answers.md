
                                          MCQ TEST

                                          
1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer: C) undefined 
(if we need any value from any variable we have to define the variable value,
there are greeting variable is not defined that's why answer will C.undefined )



2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}
sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: C)  12 
( the answer will be C 12 because frist parameter is number and second parameter is string.)

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A)  ['🍕', '🍫', '🥑', '🍔']
(answer is A becouse is initially set to "🍕", which is the first element of the food array
 Later it is reassigned to "🍝".)

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B) Hi there, undefined
(here are name parameter has no value thats why it will return Hi there, undefined .)


5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: C) 3 
(because foreach iterates over each element and here the array index length 3 
  and the condition ius ture.)
