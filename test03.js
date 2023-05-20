// 자바스크립트에서 말하는 object
// key : 'value' = pair

// {
//     key: 'value',
//     key1: 'value1',
// }

// 이렇게 key : 'value' 는 한쌍으로 이루어진 페어다.

const age = 21

const testObj = {
    name : 'failed',
    // key는 변수가 아니다. 변수와는 전혀 다른것이다.
    // ES6문법에서는 key와 value가 같은 모양일때 이를 생략할 수 있게 지원 해준다.
    // 즉, 생략해도 똑같다.
    age,
    // 이걸 생략해서 표현한다고해서 단축속성으로 표현한다.

    company : 'none',
    // key : 'value'에서 'value'에 함수도 사용가능하다.
    dosomething : () => {}
    // 함수가 가능하니 화살표 함수도 가능하다.
    // 그러니 value형태는 어떠한 것도 올 수 있다는걸 기억해두면 좋다.
}



