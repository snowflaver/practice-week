// Arrow Functions(화살표 함수)

// 우리가 함수를 선언하는 방법
function 함수(매개변수) {
    // 내용 작성
    return
}
// 이 펑션이라는 함수이고 이걸 이렇게 사용안하면 이 함수가 어떻게 돌아가는지 파악이 안된다.
// 파악이 안되면 Arrow Functions을 왜 사용하는지 모르게 된다.

function mysum1(x, y) {
    return x + y
}
// 화살표 함수의 구조
// const 함수 = (매개변수) => {
//     return
// }

const mysum2 = (x, y) => {
    return x + y
}
// 만약에 return문이 한줄이라고 한다면 이를 생략해서 사용이 가능하다.
const mysum3 = (x, y) => x + y
// 이 때, 생략할 때는 반드시 중괄호를 제거해야 한다. 그리고 중괄호를 제거할 때는 return문이 없어야 한다.

console.log(mysum1(1, 6))
console.log(mysum2(1, 6))
console.log(mysum3(1, 6))