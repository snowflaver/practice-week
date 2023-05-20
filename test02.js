// var를 쓰면 안되는 이유
if (1 == 1) {
    // true일시 항상 이안으로 들어온다.
    var a = 3
    console.log('a', a)
}

console.log('바깥 a', a)
// block level scope
// 중괄호 안에서만 선언한 변수는 유효해야만 된다
// var는 block level scope가 아니기 때문에 어디서 선언했더라도 다른 데서도 사용될 수 있다.
// 따라서 헷갈릴 수도 있기 때문에   쓰면 안된다.
// 그래서 ES6 문법에서 이를 개선하기 위해서 var키워드 대신에 const와 let이 나왓다
