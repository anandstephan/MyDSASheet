//Question 1 Floor in a Sorted Array

let floorInArray = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return high;
};

// console.log(floorInArray([9447, 12742, 13149, 17504, 24413, 26747], 2449));


//Question 2 
// let 