const selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minEleIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minEleIndex]) minEleIndex = j;
    }
    [arr[i], arr[minEleIndex]] = [arr[minEleIndex], arr[i]];
  }
};

export default selectionSort;
