function Cau1(arrA) {
    const uniqueArr = [...new Set(arrA)];
    uniqueArr.sort((a, b) => b - a);

    console.log(uniqueArr);
}

let arrA = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

Cau1(arrA);