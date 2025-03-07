const bubbleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let didSwap = 0;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = 1;
      }
    }
    if (!didSwap) break;
  }
};
export default bubbleSort;
