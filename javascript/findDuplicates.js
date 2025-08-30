function findDuplicates(size, arr) {
  // Only change code below this line
  let nums = '"';
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] == arr[j]) {
        if (nums[nums.length - 1] != '"') {
          nums += ' ' + arr[i];
        }
        else {
          nums += arr[i];
        }
        break;
      }
    }
  }
  return nums + '"';
  // Only change code above this line
}
console.log(findDuplicates(5, [2, 4, 2, 6, 3])); 
console.log(findDuplicates(6, [2, 4, 6, 3, 3, 2])); 