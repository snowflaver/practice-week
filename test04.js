// 얕은 복사

const obj1 = {
    value1: 10,
}

const obj2 = obj1   // 1번째 방벙

const obj3 = JSON.parse(JSON.stringify(obj1))   // 새로운 주소값에 배열을 

obj1.value1 += 1

// 1번째 방법
    // 만약 복사한 obj2를 바꾼다면?
    // 예상 : obj2가 바뀌면 되는 간단한 것
    // 실제 : obj1도 함께 바뀌어 버린다.
    // 이유 : obj1에 있는 주소값을 저장한 것이고, 주소값은 value: 10 이라는 객체를 가진 메모리를 바라보고있다.
        // 그러니 obj2도 obj1을 가져왓으니 주소값이 동일한 값이 된다.
        // 따라서 obj2의 value에 +1을 하면 같은 주소값을 가지고있기 때문에 둘다 +1이 되는 것이다.
        // 이런 현상을 우리는 '얕은복사'라고 한다.
        // 이 현상을 우리는 방지하는 것이 매우 중요하다.

console.log('obj1', obj1)
console.log('obj2', obj2)
console.log('obj3', obj3)

// JSON.parse() : json형태로 풀었다가 다시 json형태로 묶어주는 함수
// JSON.stringify() : json형태가 아닌, stringify 문자열로 풀엇다가 다시 문자열로 묶어주는 함수
// 즉 새로운 배열을 만들어 내는 것
// 이렇게 하면 기존의 함수를 지킬수가 있다.
// 지킬수 있는 방법은 여러가지가 있다. 이건 그 방법들중 한 가지다.