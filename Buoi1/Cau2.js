function Cau2(arrA, arrB) {
    const intersectArr = arrA.filter(value => arrB.includes(value));

    console.log(intersectArr);
}

let arrA = [1, 7, 4, 2, 3];
let arrB = [5, 2, 6, 3, 1];

Cau2(arrA, arrB)