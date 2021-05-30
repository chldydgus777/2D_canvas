
//과제 2
// (* n값은 배열의 index 입니다.)

const A = [1, 2, 3, 4];
console.log( A[1].value )
function test(arr) {
const res = [
    arr[1]
];


return res;
}

const T = test(A);

// 조건 1.  T[n].value() === A[n]            // true
// 조건 2.  T[n].value === T[n+1].value      // true
// 조건 3.  !T[n].hasOwnProperty("value")    // true
// 조건 4.  !T[n+1].hasOwnProperty("value")  // true