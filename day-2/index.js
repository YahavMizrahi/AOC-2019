const fs = require('fs');
let data = fs.readFileSync( `${__dirname}/data.txt`,'utf-8' );
data = data.split(",").map(num => +num); // convert to number


const opcode = {
  1 : ( i, input ) => input[ input[ i + 2 ]] = input[ input[i]] + input[ input[ i + 1 ]],
  2 : ( i, input ) => input[ input[ i + 2 ]] = input[ input[i]] * input[ input[ i + 1 ]]
}

const firstTask = ([...input],noun=12,verb=2) => {

  input[1] = noun;
  input[2] = verb;
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


const secondTask = ( input ) => {
  for( let i = 0; i < 100; i++){
    for( let j = 0; j < 100; j++){
      if( firstTask( input, i, j ) === 19690720) return 100 * i + j;
    }
  }
};

console.log("First problem:", firstTask(data));
console.log("Second problem:", secondTask(data));

