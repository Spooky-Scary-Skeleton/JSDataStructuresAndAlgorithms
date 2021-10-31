//time complexity: O(n^2)
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = Infinity;
    let smallidx;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < smallest) {
            smallest = arr[j];
            smallidx = j;
        }
    }
    const temp = arr[i];
    arr[i] = arr[smallidx];
    arr[smallidx] = temp;
}
}
