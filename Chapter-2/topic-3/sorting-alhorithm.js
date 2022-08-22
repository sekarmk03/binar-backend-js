/* bubbele sort */
function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {

            console.log("");
            console.log(arr);
            console.log("Bandingkan " + arr[j - 1] + " dengan " + arr[j]);

            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }

            console.log(arr);
        }

    }
}
bubbleSort([8, 6, 7, 20, 1]);





/* merge sort */
function mergeShort(arr) {
    var len = arr.length;
    if (len < 2) return arr;

    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeShort(left), mergeShort(right));
}
function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;

    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l).concat(right.slice(r)));
}
console.log(mergeShort([7, 5, 2, 4, 3, 9]));





/* quick sort */
function quickSort(Arr) {
    if (Arr.length <= 1) {
        return Arr;
    }

    const pivot = Arr[Arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    console.log("Arr awal :");
    console.log(Arr);
    console.log("");

    rightArr.push(pivot);
    for (let i = 0; i < Arr.length - 1; i++) {
        console.log(Arr[i] + " dibandingkan dengan " + pivot);
        if (Arr[i] < pivot) {
            leftArr.push(Arr[i]);
        }
        else {
            rightArr.push(Arr[i]);
        }
    }

    console.log("\nbagian kiri :");
    console.log(leftArr);
    console.log("");

    console.log("bagian kanan :");
    console.log(rightArr);
    console.log("");

    console.log("------------------------------\n");

    return [...quickSort(leftArr), ...quickSort(rightArr)];

}
quickSort([9, 4, 2, 7, 10, 1, 5]);





/* deret fibonacci */
function fibbonacci(number) {
    const arr = [];

    for (let i = 0; i <= number - 1; i++) {

        if (i > 1) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        } else {
            arr.push(1);
        }

    }

    return arr;
}

console.log(fibbonacci(10));