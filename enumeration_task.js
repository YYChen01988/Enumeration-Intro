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


const getEvenNumbers = function(){
  const result = numbers.filter((number)=>{
    return number %2 ===0;
  });
  return result;
}
console.log(getEvenNumbers());





const getMultiplyBy2 = function (){
  let multiplyBy2Array = [];
  numbers.forEach(function(number){
      multiplyBy2Array.push(number*2);
  });
  return multiplyBy2Array;
}
console.log(getMultiplyBy2());


// // ### use map instead of forEach
const getMultiplyBy3 = function (){
  multiplyBy3Array =numbers.map(number => number*3);
  return multiplyBy3Array;
}
console.log(getMultiplyBy3());


const getMultiplyBy4 = function (){
  multiplyBy4Array =numbers.map((number) => {
    return number * 4;
  });
  return multiplyBy4Array;
}
console.log(getMultiplyBy4());





const sumElements = function(){
  let sumValue = 0;
  numbers.forEach((number) => {
    sumValue += number;
  });
  return sumValue
}
console.log(sumElements());


const myForEach = function(array, callback){
  for (let element of array){
    callback(element);
  }
}
const summaryOfNumbers = function(){
  let sumValue = 0;
  myForEach(numbers, (number) => {
    sumValue += number;
  });
  return sumValue
}
console.log(summaryOfNumbers());


const sumOfElements = function(){
  const result = numbers.reduce((total, number)=>{
    return total + number;
  }, 15);
// // total starts from 15
  return result;
}
console.log(sumOfElements());
