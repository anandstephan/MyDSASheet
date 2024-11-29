//find Duplicates

// nums = [1,2,3,1]

//Question 1 Contains Duplicate
let checkDuplicateOrNot = (nums) => {
  //Brutce Force
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) return true;
  //     }
  //   }
  //   return false;
  //Better
  //Taking O(n) space
  //   let freq = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (freq[nums[i]] !== undefined) {
  //       return false;
  //     } else freq[nums[i]] = 1;
  //   }
  //   return true;
};
// console.log(checkDuplicateOrNot(["a", "b", 3, 1]));

//Question 2 Valid Anagram

let checkAnagram = (str1, str2) => {
  // Optimal Approach

  let freqMap = {},
    freqMap1 = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (freqMap[str1[i]]) {
      freqMap[str1[i]] += 1;
    } else {
      freqMap[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (freqMap1[str2[i]]) {
      freqMap1[str2[i]] += 1;
    } else {
      freqMap1[str2[i]] = 1;
    }
  }

  let keys = Object.keys(freqMap);
  for (let i = 0; i < keys.length; i++) {
    if (freqMap[keys[i]] !== freqMap1[keys[i]]) return false;
  }
  return true;
};

// console.log(checkAnagram("racecar", "carrace1"));

// Question 3 Two Sum

let twoSum = (arr, k) => {
  //Brute Force
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === k) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // Sorting Take O(nlogn) + O(n)
  //   let i = 0;
  //   let j = arr.length - 1;
  //   while (i <= j) {
  //     if (arr[i] + arr[j] === k) {
  //       return true;
  //     }
  //     if (arr[i] + arr[j] > k) j--;
  //     else i++;
  //   }
  //   return false;
  //HashMap Solution
};

// console.log(twoSum([2, 7, 11, 15], 9));

//Question 4 Product Array Except itself

let productExceptSelf = function (nums) {
  //Brtuce Force
  //   let ans = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     let prod = 1;
  //     for (let j = 0; j < nums.length; j++) {
  //       if (i == j) continue;
  //       prod *= nums[j];
  //     }
  //     ans.push(prod);
  //   }
  //   return ans;
  // Optimal Approacth
  //   let prefix = [1];
  //   let suffix = new Array(nums.length);
  //   let ans = [];
  //   suffix[nums.length - 1] = 1;
  //   for (let i = 1; i < nums.length; i++) {
  //     prefix[i] = nums[i - 1] * prefix[i - 1];
  //   }
  //   for (let i = nums.length - 2; i >= 0; i--) {
  //     suffix[i] = suffix[i + 1] * nums[i + 1];
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     ans.push(prefix[i] * suffix[i]);
  //   }
  //   console.log(ans);
  // yeh kaam kyu kra solution kyunki prefixsum mein usko chor ke peeche hai saare prod and suffix mein usko chor ke aagye ke
};

// console.log(productExceptSelf([1, 2, 3, 4]));

//Question 5 Maximum Subarray
// Kadane Algo o(n)
let maximumSubArray = function (nums) {
  let currSum = 0;
  let oSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currSum >= 0) {
      currSum += nums[i];
    } else {
      currSum = nums[i];
    }
    oSum = Math.max(currSum, oSum);
  }
  return oSum;
};

// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Question 6
