//과제 2

const A = [1, 2, 3, 4];

function test(arr) {
    const res = [];
// class 표현식 
    ( a = class {
        // 생성자 class 안에 한개만 존재 가능
        constructor(b) {
            this.b = b;
        }
        value() {
            return this.b;
        }
    }
    ),
    // map 함수로
    // constructor() new로 호출
    arr.map((i) => res.push(new a(i)));
    
    return res;
}
const T = test(A);
console.log(T)


console.log(T[3].value() === A[3]) // 조건 1 ture
console.log(T[3].value === T[3].value ) // 조건 2 true
console.log(!T[3].hasOwnProperty("value") ) // 조건 3 true
console.log(!T[3].hasOwnProperty("value")) // 조건 4 true 