const students = [
    {id:1, name:'sin'},
    {id:2, name:'akib'},
    {id:3, name:'ha'},

];

const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s=>s.id>40);
const bigerOne = students.find(s=>s.id>40);

console.log(biggerOne);
