//slice

const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);

//splice

const number = [1,2,3,4,5,6,7,8];
const removed = number.splice(2,5);
console.log(removed);

//splice with inject

const numbers = [1,2,3,4,5,6,7,8];
const rmv = numbers.splice(2,5,66,77,99);
console.log(rmv);

//join

const data = [1,2,3,4,5,6,7,8];
const add = data.join("adds");
console.log(add);
