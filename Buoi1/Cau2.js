function Cau2(arrA, arrB) {
    const freqMapA = new Map();
    arrA.forEach(value => {
        freqMapA.set(value, (freqMapA.get(value) || 0) + 1);
    });

    const intersectArr = [];
    arrB.forEach(value => {
        if (freqMapA.get(value)) {
            freqMapA.set(value, freqMapA.get(value) - 1);
            intersectArr.push(value);
        }
    });

    console.log(intersectArr);
}

let arrA = [1, 7, 4, 2, 3];
let arrB = [5, 2, 6, 3, 1];

// let arrA = [1, 2, 3, 1, 1];
// let arrB = [1, 2, 1];

Cau2(arrA, arrB)