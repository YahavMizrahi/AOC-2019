const fs = require('fs');
let data = fs.readFileSync( `${__dirname}/data.txt`,'utf-8' );
data = data.split(",").map(num => +num); // convert to number


const opcode = {
  1 : ( i, input ) => input[input[i+2]]=input[input[i]]+input[input[i+1]],
  2 : ( i, input ) => input[input[i+2]]=input[input[i]]*input[input[i+1]]
}

const firstTask = (input) => {

  input[1] = 12;
  input[2] = 2;
  let operation =0; 
  let currentOperation = input[operation];

  while(currentOperation !== 99){
    if( opcode[ currentOperation ]) {
      opcode[ currentOperation ]( operation + 1, input );
    }

    operation += 4;
    currentOperation = input[operation];
  }

  return input[0];

};


const secondTask = (input) => {
  return "day-2 second task";
};

console.log("First problem:", firstTask(data));
console.log("Second problem:", secondTask(data));

