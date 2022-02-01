const arrTest2 = [1, -15, 8, -3, 10];

// function plusGrandNb(arr) {
//     //
//     let nbMax = 0;
//     //
//     for (i = 0; i < arr.length; i++) {
//         //
//         if (arr[i] < nbMax) {
//             nbMax = arr[i];
//         }
//         //
//     }
//     return nbMax;
// }
// console.log(plusGrandNb(arrTest));
// attention : nombre le moins grand
function toto(arr) {
    let nbMin = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < nbMin) {
            nbMin = arr[i];
        }
    }
    return nbMin;
}
console.log(toto(arrTest2));