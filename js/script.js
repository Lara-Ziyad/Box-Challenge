

 function onSubmit(){

  //SELECT INPUTS DATA
  const input = document.getElementById('textArea').value;

  //MANIPULATE INPUTS DATA
  const dataArray = input.split('\n')
  const dataNestArray = dataArray.map (arr => arr.split(' '))
  const boxesArray = dataNestArray.map (box => box.slice(0,3))
  const boxesVolumes = boxesArray.map(box => box.reduce ((acc,dim) => acc *= dim))
  const cubesNumNesArray = dataNestArray.map (box => box.slice(3))

  //CREATE FUNCTION TO CREATE POWER 2 ARRAY 
  const powerOfTow = (arr) => 
              {
      const arrayLength= arr.length
      const cubesDimArray = 
             Array(arrayLength).fill('')
             .map((dim,i) => Math.pow(2,i))
          return cubesDimArray 
              }

  //CREATE POWER 2 ARRAY AND ESTIMATE THE VOLUME OF IT
  const CubesDimNesArray = cubesNumNesArray. map (cube =>  powerOfTow (cube))
  const cubeVolNesArray= CubesDimNesArray.map ((dim) =>dim.map((d) =>Math.pow(d,3)) )
  
  //CREATE ARRAY WITH THE TOTAL OF THE CUBES VOLUMES   
  const totalCubesVolArray = cubesNumNesArray.map((num,i ) =>
               {
      const cubeVolArray = cubeVolNesArray[i]
      const cubesVolArray  = num.map((cube,i) => Number(cube)* cubeVolArray [i])
      const totalCubesVol = cubesVolArray  != []? 
      cubesVolArray .reduce((acc,tot) => acc += tot): null
      return totalCubesVol
             })
 
    
    const  minCubesNum = boxesVolumes.map ((box,i) => {

      
      let cubes = 0
      //CONDITION:
      //IF THE BOX VOLUME IS LESS THAN THE CUBE VOLUME
      if (box > totalCubesVolArray[i] ){
        cubes= -1;
       }



      //***** */ In the commented code below, 
      //******i tried to use the map to loop the array and but i can't break the loop
      //***** */ so i used the for loop

      //  else {
      //   const cubeNumberArr = cubesNumNesArray[i]
      //   const cubesNumReverse = cubeNumberArr.reverse()
      //   const cubesDimArr =  CubesDimNesArray [i]
      //   const cubesDimReverse = cubesDimArr.reverse() 
      //   const cubes= cubesNumReverse.map((cubeNum,y) => {
      //     const cubeNumber =+cubeNum
      //     const cubesDim = cubesDimReverse [y]
      //     const eachCubesVolumes = cubeNumber * Math.pow (cubesDim,3)
      //     let filledVolume = box- eachCubesVolumes 
      //     if (filledVolume < 0){    
      //       return  Math.floor( box / Math.pow(cubesDim,3))        
      //        }
      //         else {            
      //          box =  filledVolume ;
      //          return cubeNumber; 
      //        }  
      //   })
      //     return cubes.reduce((acc,i) => acc+i)
      //  } 
      //IF THE BOX VOLUME IS MORE THAN THE CUBE VOLUME
       else { 

        // USED FOR LOOP INSTEAD OF MAP BECAUSE I CAN'T BREAK THE LOOP WWITH MAP
       for( y = cubesNumNesArray[i].length-1 ; y >= 0 ; y--) {
        //  DISTRUSTED CUBES ARRAY TO GET THE CUBE NUMBERS
        const cubeNumber = +cubesNumNesArray[i][y]
         //DISTRUSTED CUBES DIMENSIONS  TO GET THE POWER TO CUBES DIMENSIONS
        const cubesDim = CubesDimNesArray [i][y]

        // ESTIMATE EACH CUBE VOLUME
        const eachCubesVolumes = cubeNumber * Math.pow (cubesDim,3)
        // ESTIMATE THE FILLED BOX VOLUME
        let filledVolume = box- eachCubesVolumes 

        // IF THE FILLED BOX VOLUME IS LESS THAN ZERO THE CUBE NUMBER IS TEH VOLUME OF THE BOX DIVIDED BY THE CUBE VOLUME AND BREAK THE LOOP -DON'T LOOP THE REST OF THE CUBES
         if (filledVolume < 0){
            cubes += Math.floor( box / Math.pow(cubesDim,3))  
          break;  
         }
        // IF THE FILLED BOX VOLUME IS MORE THAN ZERO THE CUBE NUMBER IS THE MINIMUM AND LOOP CONTINUES TO THE SECOND GROUP OF CUBES AND CHANGE THE BOX VOLUME
         else {
         cubes += cubeNumber
         box =  filledVolume ; 
        } 
       }
      return cubes; 
     }
      return cubes; 
    }
   )
    console.log(minCubesNum );
    // ADD THE RESULTS TO THE HTML
    document.getElementById('result').innerHTML=minCubesNum.join(" <br> ");

  }

  






     
      
    
    




   
