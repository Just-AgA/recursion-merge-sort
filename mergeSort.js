function mergeSort(array) {
    // Create midpoint so we can split the array as evenly as possible
    const midPoint = Math.floor(array.length / 2);
    const leftSide = array.slice(0, midPoint);
    const rightSide = array.slice(midPoint);

    if(array.length <= 1) return array;

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(arrayLeft, arrayRight) {
    // Create another array and two indexes
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the indexes and add to the array dpending on the comparison
    while(leftIndex < arrayLeft.length && rightIndex < arrayRight.length){
        if(arrayLeft[leftIndex] < arrayRight[rightIndex]){
            resultArray.push(arrayLeft[leftIndex]);
            leftIndex++;
        }else{
            resultArray.push(arrayRight[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements from either left array or right array (if any)
    return resultArray
    .concat(arrayLeft.slice(leftIndex))
    .concat(arrayRight.slice(rightIndex));
}

console.log(`Sorted array for [38, 27, 43, 3, 9, 82, 10] is ${mergeSort([38, 27, 43, 3, 9, 82, 10])}`);
console.log(`Sorted array for [3, 2, 1, 13, 8, 5, 0, 1] is ${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}`);
console.log(`Sorted array for [105, 79, 100, 110] is ${mergeSort([105, 79, 100, 110])}`);