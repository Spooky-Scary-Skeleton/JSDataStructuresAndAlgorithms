class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    //Use bubble up!
    if (this.values.length === 0) {
      this.values.push(value);
      return;
    }

    this.values.push(value);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0) {
      if (this.values[parentIndex] < value) {
        const temp = this.values[parentIndex];
        this.values[parentIndex] = value;
        this.values[currentIndex] = temp;
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      } else {
        break;
      }
    }

    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) {
      return null;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const maxValue = this.values.shift();
    const newHead = this.values.pop();
    this.values.unshift(newHead);

    let currentIndex = 0;

    const sinkDown = (currentIndex) => {
      const childIndex1 = 2 * currentIndex + 1;
      const childIndex2 = 2 * currentIndex + 2;
      while (
        childIndex1 < this.values.length ||
        childIndex2 < this.values.length
      ) {
        if (
          newHead < this.values[childIndex1] &&
          this.values[childIndex1] >
            (this.values[childIndex2] ? this.values[childIndex2] : -Infinity) //this.values[childIndex] could be undefined
        ) {
          const temp = this.values[childIndex1];
          this.values[childIndex1] = newHead;
          this.values[currentIndex] = temp;
          currentIndex = childIndex1;
          sinkDown(currentIndex);
        } else if (
          newHead < this.values[childIndex2] &&
          this.values[childIndex2] >
            (this.values[childIndex1] ? this.values[childIndex1] : -Infinity)
        ) {
          const temp = this.values[childIndex2];
          this.values[childIndex2] = newHead;
          this.values[currentIndex] = temp;
          currentIndex = childIndex2;
          sinkDown(currentIndex);
        }
        break;
      }
    };

    sinkDown(currentIndex);
    console.log(this.values);
    return maxValue;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(100);
maxBinaryHeap.insert(97);
maxBinaryHeap.insert(81);
maxBinaryHeap.insert(70);
maxBinaryHeap.insert(58);
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);

//case1
//console.log(maxBinaryHeap.insert(55)); //result should be [55, 39, 41, 18, 27, 12, 33];

//case2
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
