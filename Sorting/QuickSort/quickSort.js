function partition(arr,low, high){
    // 1st element of Arr is the pivote element;
    let pivote = arr[low], i=low+1; 
    for(let j=i;j<=high;j++){
        if(arr[j]<pivote){
            //swap if element of Arr is less than pivote element;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
        }
    }
    i -= 1;
    //swap the 1st(pivote) element with is appropriate index to fix this position in Arr; 
    [arr[i],arr[low]] = [pivote, arr[i]];
    return i;
}

function quickSort(arr, low=0, high=arr.length-1){
    if(low<high){
        //partition will place the 1st element on its appropriate place and return its index;
        let pivoteIndex = partition(arr,low, high);
        //again apply quickSort on both the divided sub array;
        quickSort(arr, low, pivoteIndex-1);
        quickSort(arr, pivoteIndex+1, high);
    }
    return;
}

export default quickSort;
