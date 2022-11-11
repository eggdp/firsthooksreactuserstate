import React, { useState } from "react";

//화살표 함수 쓰기
//useEffect험수는 return 까지 반환 후 마지막에 실행된다.
//useState
//useEffect
//useMemo
//useRef

// eslint-disable-next-line react-hooks/rules-of-hooks

const App = () => {
  const [list, setList] = useState([0, 10, 20]);
  const changeList = (index) => {
    const tempList = [...list];
    tempList[index] = tempList[index] + 1;
    setList(tempList);
  };
  return (
    <div>
      <div>{list[0]}</div>
      <div>{list[1]}</div>
      <div>{list[2]}</div>
      <button onClick={() => changeList(0)}>0번 버튼</button>
      <button onClick={() => changeList(1)}>1번 버튼</button>
      <button onClick={() => changeList(2)}>2번 버튼</button>
    </div>
  );
};
export default App;

// 함수 두줄이상은 {}로 감싸기
// const func = () => {
//   console.lop("test");
//   return true;
// };

//usestate = 변수 count 변하는함수 setCount가 필요함
// const [count, setCount] = useState(10);

// const changeCount = (num) => {
//   setCount((prev) => prev + num);
// };

// return (
//   <div>
//     <div>{count}</div>
//     <button onClick={() => changeCount(-1)}>감소</button>
//     <button onClick={() => changeCount(1)}>증가</button>
//   </div>
// );

//화면이 로딩되면 한번 실행되고 count 값이 변경될때 마다 실행된다.
// useEffect(() => {
//   console.log("화면 로딩 완료");
// }, [count]);

// console.log("테스트1");

// const inputRef = useRef();

// return (
//   <div>
//     <input ref={inputRef} />
//     <button
//       onClick={() => {
//         alert(inputRef.current.value);
//         inputRef.current.value = "";
//         inputRef.current.focus();
//       }}
//     >
//       인풋 내용 체크
//     </button>
