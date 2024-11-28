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
