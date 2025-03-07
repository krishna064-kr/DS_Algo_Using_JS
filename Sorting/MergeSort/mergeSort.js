const merge = (arr, low, mid, high) => {
    const leftArr = [], rightArr = [], n1 = mid - low + 1, n2 = high - mid;
    let i=0, j=0, k=low;
    for( ;i<n1;i++) leftArr[i] = arr[low+i];
    for( ;j<n2;j++) rightArr[j] = arr[mid+j+1];
    i=0,j=0;
    while(i<n1 && j<n2){
        arr[k] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];
        k += 1;
    }
    while(i<n1){
        arr[k] = leftArr[i];
        i += 1;
        k += 1;
    }
    while(j<n2){
        arr[k] = rightArr[j];
        j += 1;
        k += 1;
    }
}
const mergeSort = (arr, low = 0, high = arr.length-1) => {
    if(low<high){
        let mid = low + Math.floor((high-low)/2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid+1, high);
        merge(arr, low, mid, high);
    }
    return;
}

export default mergeSort;