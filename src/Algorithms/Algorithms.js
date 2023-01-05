// All algorithms return the array 'animations' to Visualiser.jsx
// The general structure of  the 'animations' array looks like this: [[index1, index2], [index2, index1], [index1, size]... ] 
// The first list contains the indexes of the array-bars to change to RED colour
// The second list contains the indexes of the array-bars to change back to TURQUOISE colour
// The third list contains changes to be made to the location and size of the array-bars 
// This pattern repeats until the sorting is done





// MERGE SORT
export function getMergeSort(array) {
    if (array.length <= 1) 
    return array;

    const animations = [];
    const auxiliaryArray = array.slice();

    doMergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function doMergeSort(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx)
    return;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    doMergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    doMergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);

    let i = startIdx;
    let j = middleIdx + 1;
    let k = startIdx;

    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);        // Turn the colours of current numbers that are being compared to red
        animations.push([i, j]);        // Turn the colours of current numbers that are being compared back to turquoise
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i], k, auxiliaryArray[i]]);        // Perform swap
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            animations.push([k, auxiliaryArray[j], k, auxiliaryArray[j]]);        // Perform swap
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push([i, i]);        // Turn the colours of current numbers that are being compared to red
        animations.push([i, i]);        // Turn the colours of current numbers that are being compared back to turquoise
        animations.push([k, auxiliaryArray[i], k, auxiliaryArray[i]]);        // Perform swap
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
        animations.push([j, j]);        // Turn the colours of current numbers that are being compared to red
        animations.push([j, j]);        // Turn the colours of current numbers that are being compared back to turquoise
        animations.push([k, auxiliaryArray[j], k, auxiliaryArray[j]]);        // Perform swap
        mainArray[k++] = auxiliaryArray[j++];
    }
}





// QUICK SORT
export function getQuickSort(array, startIdx, endIdx) {
    const animations = [];
    QuickSort(array, startIdx, endIdx, animations);
    return animations;
}

function QuickSort(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let partition = doQuickSort(array, startIdx, endIdx, animations);
        QuickSort(array, startIdx, partition - 1, animations);
        QuickSort(array, partition + 1, endIdx, animations);
        return animations;
    }
}

function doQuickSort(array, startIdx, endIdx, animations) {
    let pivot = array[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j <= endIdx - 1; j++) {
        
        animations.push([j, endIdx]);        // Turn the colours of current numbers that are being compared to red
        animations.push([j, endIdx]);        // Turn the colours of current numbers that are being compared back to turquoise
        animations.push([j, array[j], endIdx, array[endIdx]]);        // No swap yet, just to complete the 3rd list

        if (array[j] < pivot) {
            animations.pop(-1);        // Remove last list from animations to make space for the swap list

            i++;

            animations.push([i, array[j], j, array[i]]);        // Perform swap

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;

    animations.push([i, endIdx]);        // Turn the colours of current numbers that are being compared to red
    animations.push([i, endIdx]);        // Turn the colours of current numbers that are being compared back to turquoise
    animations.push([endIdx, array[i], i, array[endIdx]]);        // Perform swap

    let temp = array[i];
    array[i] = array[endIdx];
    array[endIdx] = temp;

    return i++;
}





// BUBBLE SORT
export function getBubbleSort(array) {
    const animations = [];
    doBubbleSort(array, animations);
    return animations;
}

function doBubbleSort(array, animations) {

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            animations.push([j, j+1]);
            animations.push([j, j+1]);
            animations.push([j, array[j], j+1, array[j+1]]);

            if (array[j] > array[j+1]) {

                animations.pop(-1);
                animations.push([j, array[j+1], j+1, array[j]]);

                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return animations;
}





// HEAP SORT
export function getHeapSort(array) {
    const animations = [];
    var N = array.length;

    for (let i = Math.floor(N/2) - 1; i >= 0; i--) {
        Heapify(array, N, i, animations);
    }

    for (let j = N - 1; j > 0; j--) {
        
        animations.push([0, j]);
        animations.push([0, j]);
        animations.push([0, array[j], j, array[0]]);
        
        const temp = array[0];
        array[0] = array[j];
        array[j] = temp;

        Heapify(array, j, 0, animations);
    }

    return animations;
}

function Heapify(array, N, i, animations) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    var max = i;

    if (left < N && array[left] > array[max]) {
        max = left; 
    }

    if (right < N && array[right] > array[max]) {
        max = right;
    }

    if (max !== i) {
        
        animations.push([i, max]);
        animations.push([i, max]);
        animations.push([i, array[max], max, array[i]]);
        
        const temp = array[i];
        array[i] = array[max];
        array[max] = temp;

        Heapify(array, N, max, animations);
    }

    return animations;
}





// SELECTION SORT
export function getSelectionSort(array) {
    const animations = [];
    doSelectionSort(array, animations);
    return animations;
}

function doSelectionSort(array, animations) {
    var N = array.length;

    for (let i = 0; i < N - 1; i++) {

        for (let j = i + 1; j < N; j++) {
            var min = i

            if (array[j] < array[min]) {

                animations.push([j, min]);
                animations.push([j, min]);
                animations.push([j, array[min], min, array[j]]);

                const temp = array[j];
                array[j] = array[min];
                array[min] = temp;
            }
        }
    }

    return animations;
}





// INSERTION SORT
export function getInsertionSort(array) {
    const animations = [];
    doInsertionSort(array, animations);
    return animations;
}

function doInsertionSort(array, animations) {
    var N = array.length;

    for (let i = 1; i < N ; i++) {
        var temp = array[i];
        let j = i - 1

        while (j >= 0 && temp <= array[j]) {

            animations.push([i, j]);
            animations.push([j, j]);
            animations.push([j+1, array[j], j+1, array[j]]);

            array[j+1] = array[j];

            j = j - 1;
        }

        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([j+1, temp, j+1, temp]);

        array[j+1] = temp;
    }

    return animations;
}