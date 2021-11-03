//time complexity: O(nlogn)
function merge(arr1, arr2) {
  // Your code here
  let i = 0;
  let j = 0;
  let result = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      result = result.concat(arr2);
      break;
    } else if (arr2.length === 0) {
      result = result.concat(arr1);
      break;
    }
    if (arr1[i] < arr2[j]) {
      result.push(arr1.shift());
      i++;
    } else {
      result.push(arr2.shift());
    }
  }
  return result;
}

function mergeSort(arr) {
  //code here
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return arr;
  }
  const left = 0;
  const right = arr.length - 1;
  const middle = Math.ceil((left + right) / 2);
  const leftarr = arr.slice(left, middle);
  const rightarr = arr.slice(middle);
  return merge(mergeSort(leftarr), mergeSort(rightarr));
}

mergeSort([4, 1, 3, 9, 7]);
