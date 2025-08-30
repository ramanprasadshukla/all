
  function findFactors(num) {
    // Only change code below this line
    let sum=1
    for (let i=2; i<=num; i++){
      if(num%i==0){
        sum=sum+","+" "+i
      }
    }
    return console.log("["+sum+"]")
    // Only change code above this line
  }
findFactors(12);
