const fs=require('fs');
let data=fs.readFileSync(`${__dirname}/data.txt`,'utf-8');

const firstTask = (input) => {
  return "day-{{dayNumber}} first task";
};

const secondTask = (input) => {
  return "day-{{dayNumber}} second task";
};

console.log("First task:", firstTask(data));
console.log("Second task:", secondTask(data));

