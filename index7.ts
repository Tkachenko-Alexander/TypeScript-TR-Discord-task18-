function merge(arr1: number[], arr2: number[]): number[]{
    let mergedArray:number[] = [];
    let i=0;
    let j=0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j])
        j++
    }

    return mergedArray    
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    

    let merged = merge(nums1, nums2);
    let n = merged.length;
    let middleIndex = n / 2;
    let median = n % 2 == 0
    ? ( merged[middleIndex - 1] + merged[middleIndex]) / 2
    : merged[Math.round(middleIndex) - 1];

    return median
};

;