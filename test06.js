// 배열/객체 비구조화 (Array/Object Destructuring)
// '구조분해 할당'이라고도 한다.

// De(out, 반대) + structur(구조) + ing = 구조를 분해한다.
// 배열의 구조및 객체의 구조를 분해한다.

// 객체의 구조분해
const person = {
    name: 'rutan',
    age: '21',
}
// 위는 객체로된 변수
// 아래는 name, age를 구조분해한 변수
const { name, age, notFound } = person

console.log('name', name)
console.log('age', age)
console.log('notFound', notFound)

// 배열의 구조분해
const testArr = [1, 2, 3, 4, 5]

const [one, two, three, four, five, six] = testArr

console.log('one', one)
console.log('two', two)
console.log('three', three)
console.log('four', four)
console.log('five', five)
console.log('six', six)

// 객체는 키값을 배열은 위치가 맞아야 구조분해가 된다.