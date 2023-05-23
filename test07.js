// 전개연산자(Spread Operator)
// ...(전개연산자)를 의미한다.

// CASE 1
let [name, ...rest] = ['rutan', 21, 'hwasung']
// ...은 나머지 전부를 가져오라는 뜻을 가지고 있다.
console.log('name', name)
console.log('rest', rest)
// 이렇게 찍어보면 
// name rutan
// rest [ 21, 'hwasung' ]
// 이러한 값이 출력이된다.
// 확인해보면 전개연사자로 찍혀있으면 그 부분은 나머지를 가진 배열이 된다.

// CASE 2
let names = ["Steve", "John"]

let students = ["Tom", ...names, ...names]

console.log('students', students)
// 콘솔을 찍어보면
// students [ 'Tom', 'Steve', 'John', 'Steve', 'John' ]
// 우리가 원하는 한 배열안에 객체가 담겨져 나온다.
// 전개연산자를 사용안하고 출력을 한다면
// students [ 'Tom', ['Steve', 'John'], ['Steve', 'John'] ]
// 이렇게 배열안에 배열을 가진채로 출력이된다.
// 이것으로 전개연산자를 사용을 한다면 배열의 구조를 분해해서 할당을 하게 된다는걸 알 수 있다.