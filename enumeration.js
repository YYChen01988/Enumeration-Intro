// setTimeout(function(){
//   console.log("This will delay for five seconds!");
// }, 5000);
// // ###5000 means 5 seconds


// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers){
//   console.log(`The number is ${number}`);
// }



// // ### forEach is a higher order function which means its a callback
// // ### explain
// // const numbers = [1, 2, 3, 4, 5];
// // const forEach(callback){
// //   for(let number of array){
// //     callback(number);
// //   }
// // }
// numbers.forEach(function(number){
//   console.log(`The number is ${number}`);
// })




// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number, index){
//   console.log(`The number is ${number} at index ${index}`);
// })
//
// const deleteNumber = function(numberToDelete){
//   numbers.forEach(function(number, index){
//     if (number === numberToDelete){
//       numbers.splice(index,1);
//     }
//   })
// }
// deleteNumber(2);
// console.log(numbers);



// ### improve verson fom above that the number is not delete until the loop finished
// const numbers = [1, 2, 3, 4, 5];
// const deleteNumber = function(numberToDelete){
//   let indexToDelete;
//   numbers.forEach(function(number, index){
//     if (number === numberToDelete){
//       indexToDelete = index;
//     }
//   });
//   numbers.splice(indexToDelete,1);
// }
//
// deleteNumber(2);
// console.log(numbers);


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//   console.log(`The number is ${number} at index ${index}`);
// })
//
// const multiplyBy2 = () => {
//   let multipliedArray = [];
//     numbers.forEach((number) => {
//       multipliedArray.push(number * 2);
//   });
//   return multipliedArray
// }
//
// console.log(multiplyBy2());
