function quickSort(array) {
    if (array.length === 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }

    // for (let i = 0; i, array.length - 1; i++) {
    //     if (array[i] < pivot) {
    //         leftArr.push(aaray[i]);
    //     } else {
    //         rightArr.push(el);
    //     }
    // }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}

const arr = ["Eggs", "Rice", "Avocado", "Carrot", "Brocolli", "Banana", "Oats", "Corn"]

console.log(quickSort(arr));