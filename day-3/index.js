const fs=require('fs');
let data=fs.readFileSync(`${__dirname}/data.txt`,'utf-8');


 const parsDirectionsAndSteps = cord => cord.split( "," ).map(( ds ) => {
  return [ ds.match( /([A-Z])/g )[0].toLowerCase(), Number( ds.match( /([0-9]+)/g )[0] ) ]
});

const[firstWiresPath, secondWiresPath] = data.split( "\n" ).map( parsDirectionsAndSteps )


const fillWiresOnMap = ( wiresPath ) => {
  const coordinates_all = new Map();


  wiresPath.forEach((path,pathId) => {
    let x = 0;
    let y = 0;
    const moveFunction={
      r: () => x++,
      l: () => x--,
      u: () => y++,
      d: () => y--,
    }
    let totalSteps = 0;
    path.forEach((move)=>{
      const [direction, steps] = move;
      for( let i=0; i < steps; i++ ){
        totalSteps++;

        moveFunction[direction]();

        let cord=`${x},${y}`;

        if(!(coordinates_all.has(cord))){
          coordinates_all.set(`${x},${y}`, [0, totalSteps, pathId]);
        }
        else {
          const [, prevSteps, prevCordId] = coordinates_all.get(`${x},${y}`)  
          if (prevCordId !== pathId) {
            coordinates_all.set(`${x},${y}`, [1, prevSteps + totalSteps]);
          }
        }
      }
    })

  });

  return coordinates_all;
};


const firstTask = ( input ) => {
  const intersections = fillWiresOnMap( [ firstWiresPath, secondWiresPath ] );
  const distance = []
    intersections.forEach(([value], key) => {
    if (value > 0) {
      const [x, y] = key.split(",").map(Number);
      distance.push(Math.abs(x) + Math.abs(y));
    }
  });
  return Math.min( ...distance );

};


const secondTask = (input) => {
  const intersections = fillWiresOnMap([firstWiresPath,secondWiresPath]);
  const steps=[];
  intersections.forEach(([value,totalSteps], key) => {
        if (value > 0) {
          steps.push(totalSteps);
    }
  });



  return  Math.min( ...steps );
};

console.log( "First task:", firstTask( data ));
console.log( "Second task:", secondTask( data ));

