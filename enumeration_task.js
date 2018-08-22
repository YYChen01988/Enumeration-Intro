// - Write a function called getEvens that returns a new array that only contains the even numbers from the original array.

// - Write a function called sumElements that returns the sum total of all the elements of the original array.

// Hint: If you get stuck, start by writing the function using a for of loop, then refactor, replacing the for loop with the forEach.



const numbers = [1, 2, 3, 4, 5];

const getEvens = function (){
  let evenArray = [];
  numbers.forEach(function(number){
    if (number %2 === 0){
      evenArray.push(number);
    }
  });
  return evenArray;
}
console.log(getEvens());


const sumElements = function(){
  let sumValue = 0;
  numbers.forEach((number) => {
    sumValue += number;
  });
  return sumValue
}
console.log(sumElements());


// const myForEach = function(array, callback){
//   for (let element of array){
//     callback(element);
//   }
// }
// const sumElements = function(){
//   let sumValue = 0;
//   myForEach(numbers, (number) => {
//     sumValue += number;
//   });
//   return sumValue
// }
// console.log(sumElements());
