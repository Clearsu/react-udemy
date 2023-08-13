import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // method 1
  const [enteredTitle, setEnteredTitle] = useState(""); // 초기 상태는 빈 문자열이므로
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // method 2
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // 호출 시 event 객체 자동으로 생성
  // const titleChangeHandler = (event) => {
  //   // method 1
  //   setEnteredTitle(event.target.value);

  // method 2
  // 객체 스프레드 연산자를 통한 얕은 복사가 일어나기 때문에, React의 비동기 업데이트로
  // 예기치 못한 값의 변경 일어날 수 있음
  // setUserInput({
  //   ...userInput, // 얕은 복사
  //   enteredTitle: event.target.value,
  // });

  // method 3
  // 숫자 증감 등, 이전 상태에 의존해 상태를 변경할 때는 아래와 같은 코드가 안전
  // 내부 화살표함수에서 제공하는 상태 스냅샷이 항상 최신 상태 스냅샷이 되도록 보장
  // 화살표 함수에서 객체가 리턴되며 깊은 복사가 일어나기 때문
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  // };
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // setUserInput({
  //   ...userInput, // 얕은 복사
  //   enteredAmount: event.target.value,
  // });
  // };
  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // setUserInput({
  //   ...userInput, // 이전 값으로 덮어쓰기
  //   enteredDate: event.target.value,
  // });
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 기본 동작인 GET 요청 막음
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // 부모 컴포넌트로 데이타 전달
    props.onStopEditing();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // form element 안에서 submit button이 클릭되면 이 요소 자체에서 이벤트를 발생시킴
  // 그래서 <form> 안에 리스너 등록
  // 브라우저의 기본 동작 : 페이지에 요청 다시 보내서 리로드
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_controls">
          <lable>Title</lable>
          <input
            type="text"
            value={enteredTitle} // two way binding : 입력란 비우기 위해 상태가 바뀌면 input 요소도 바꿔줌
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense_controls">
          <lable>Amount</lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense_controls">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2023-08-11"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
