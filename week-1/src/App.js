// 가져오는 곳
import React from 'react';

// im(in) : 안쪽
// ex(out) : 바깥쪽

// port(항구)

// import : 가져오는 것
// export : 내보내는 것

// 컴포넌트 함수는 무조건 대문자로 시작해야 React에서 오류가 안난다.
// 이하 폴더 함수는 소문자로 시작하는 카멜 케이스로 작성을 해주면 된다. 예) function testCase () {}
// 카멜 케이스는 낙타의 혹모양을 닮앗다고해서 
function App() {
  // 여기는 자바스크립트를 사용할수 있는 영역
  const handleClick = () => {
    alert('클릭!')
  }
  return (
    // {/* 여기가 메인 화면 */}

    // HTML/JSX문법 사용할 수 있는 영역
    // JavaScript + XML(HTML) = JSX(작스)
    // 따라서 여기에도 자바스크립트 요소를 사용할 수가 있다.
    // 사용하는 방법은 중괄호를 사용해서 자바스크립트 요소를 사용할 수가 있다.
    <div
      style={
        // 자바스크립트 객체
        {
          height: '100vh',
          display: ' flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
    >
      <p>내가 만든 앱컴포넌트 입니다.</p>
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
}

// 내보내는 곳
export default App;
