//find the max length number

function radixSort(array) {
  const maxLength = Math.max(...array).toString().length;

  for (let j = 0; j < maxLength; j++) {
    const bucket = [];

    for (let i = 0; i < 10; i++) {
      bucket[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
      const numberString = array[i].toString();
      const singleNumber =
        numberString.length - 1 - j < 0
          ? undefined
          : numberString[numberString.length - 1 - j];

      if (singleNumber !== undefined) {
        bucket[singleNumber].push(array[i]);
        continue;
      }

      bucket[0].push(array[i]);
    }

    for (const numArray of bucket) {
      array = array.concat(numArray);
    }

    array.splice(0, array.length / 2);
  }

  return array;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
