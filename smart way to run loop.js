const numbers = [3,4,5,6,7,8];

//map with arrow function

const result = numbers.map(x=>x *x);
console.log(result);

//filter

const bigger = numbers.find(x=>x>5);
console.log(bigger);


//find

const isThere = numbers.find(x=>x>5);
console.log(isThere);
