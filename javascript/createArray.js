// function createArray(num){
//     //Only change code below this line
//     let arr = [num];
//     let i = 0;
//     let n = 1;
//     while(i<num){
//     arr[i] = n;
//       i++;
//       n++;
//     }
//     return arr
    
//     //Only change code above this line
//   }
//   console.log(createArray(5));
//   console.log(createArray(10));


  function createArray(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
      array.push(i);
    }
    return array;
  }
  
  // Example usage:
  console.log(createArray(5)); // Output: [1, 2, 3, 4, 5]