// var twoSum = function(nums, target) {

//     let numMap = {}

//     for (let i = 0; i < nums.length; i++) {
//        let complement = target - nums[i]
//        if (complement in numMap) {
//         return [[numMap[complement],i], target]
//        }
// numMap[nums[i]] = i
//     }
//     return [[], target]

// }

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
