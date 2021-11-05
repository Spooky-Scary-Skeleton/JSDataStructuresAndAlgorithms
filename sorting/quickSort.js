//average time complexity: O(nlogn)
//worst is O(n^2) if the array is already almost sorted
function partition(arr, low, high) {
  // Your code here
  const pivot = arr[high];
  let index = low - 1;
  for (let i = low; i <= high - 1; i++) {
    if (arr[i] < pivot) {
      index++;
      const temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }
  const temp = arr[index + 1];
  arr[index + 1] = pivot;
  arr[high] = temp;
  return index + 1;
}

function quickSort(arr, low, high) {
  //code here
  if (low >= high) return;
  const pi = partition(arr, low, high);
  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
}

const test = [1, 4, 7, 2, 3, 9, 7, 5];
quickSort(test, 0, test.length - 1);
