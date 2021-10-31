//the input array should have been already sorted in order othrwise it won't work
//time complexity: O(logn)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while(start <= end) {
      const middle = Math.floor((start + end) / 2);
      console.log(start, middle, end, nums[middle]);
      if (nums[middle] === target) {
          return middle
      } else if (middle > target) {
          end = middle - 1;
          continue;
      } else {
          start = middle + 1;
          continue
      }
  }
  return -1;
};
