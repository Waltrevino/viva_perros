
// findIndex() - returns index of first element passes test
// indexOf() - searches for element, returns position
// lastIndexOf - 
// find() - returns value of first element passes test
// map() - creates new array by creating a function on each element
// filter - creates new array with elements that pass a test
// *** reduce() - runs function on each element to produce single value
// every() - ****
// some() - ****


// forEach() ****
// typeof() ***
// isArray() ***
// toString()
// join()// 
// pop() - removes last element and returns value that was popped out
// shift() - similar to pop() but works on first element and "shifts" all other elements to a lower index
// push() - adds new element and returns new array length 
// unshift() - adds to beg, shifts other indexes
// delete fruits[0] - leaves holes in array
// splice() - removes elements
// concat() - merging existing arrays
// slice() - slices element from array and returns new array
// sort()
// reverse()


var array = [1, 2, 3, 4, 5, 5, .5, -1, -2, 5.5, 10, 88, -77, 77];
var stringArray = ["Banana", "Orange", "Apple", "Mango"];
var number = 20;
findIndex = array.findIndex(n => n === number);
console.log(findIndex);

indexOf = array.indexOf(number);
console.log(indexOf);

const map = array.map(n => n * number);
console.log(map);

array.forEach(e => {
    console.log(array[e]);
})

// Homemade to test if it is an ARRAY
function isArray(array) {
    return array.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(array));

console.log(stringArray.sort());
// console.log(stringArray.reverse());

console.log(array.sort((a,b)=>a-b));

console.log(array.sort((a, b) => .5 - Math.random()));

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort((a, b) => (b.year - a.year)));