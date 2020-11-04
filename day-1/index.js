const fs=require('fs');
let data=fs.readFileSync(`${__dirname}/data.txt`,'utf-8');
data=data.split("\n");

const fuelConsumptionTask1 = (mass) =>{
  return Math.floor(mass / 3) - 2;}

const firstTask = (input) => {
  return input.map(fuelConsumptionTask1).reduce((accumulator, currentValue) => accumulator + currentValue);
};

const fuelConsumptionTask2 = (mass) =>{
  let sum=0;
  let fuel=(fuelConsumptionTask1(mass));
  while(fuel>0){
    sum+=fuel;
    fuel=(fuelConsumptionTask1(fuel));
  }
  return sum;
}

const secondTask = (input) => {
  return input.map(fuelConsumptionTask2).reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log("First task:", firstTask(data));
console.log("Second task:", secondTask(data));

