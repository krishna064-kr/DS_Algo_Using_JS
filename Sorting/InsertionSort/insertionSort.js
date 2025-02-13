const insertionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
};

export default insertionSort;