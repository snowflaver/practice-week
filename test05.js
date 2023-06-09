// Template Literals 문법

// `` = 백틱
// '', "" = 따옴표

// 백틱 안에는 자바스크립트 변수로 사용이 가능하다.

const testValue = '제어하는 값'
// ${변수명} = 플레이스홀더
console.log(`문자열 ${testValue} 입니다.`)
// 이와 같이 백틱을 사용해서 문자열과 플레이스홀더를 통해서 변수도 넣을수 있다.

// 템플릿 리터럴은 플레이스홀더를 사용해서 변수를 넣는 것도 의미가 있지만
// 멀티라인이라 해서 다양한 라인을 사용할 때 의미가 있다.

const testValue2 = `
가
나
다
라
마
바
사
아
`
// 따옴표을 사용할 때 불편한 +를 추가 안해줘도 되서 멀티라인을 지원해주는 백틱은 사용에 용이하다.
const 따옴표변수 = '1'
+ '2'
+ '3'
+ '4'