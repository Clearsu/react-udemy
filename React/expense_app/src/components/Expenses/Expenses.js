import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

// 'key'는 React에서 리스트 아이템을 렌더링할 때 각 아이템을 고유하게 식별하는
// 역할을 합니다. React는 Virtual DOM을 사용하여 효율적인 업데이트를 수행하는데,
// 리스트의 아이템을 렌더링할 때 'key'를 사용하여 이전 상태와 새로운 상태의 아이템을
// 비교하고 업데이트 결정을 내립니다. 'key'를 사용하지 않으면 React가 변경된 아이템을
// 찾는 과정에서 비효율적인 렌더링과 성능 저하가 발생할 수 있습니다.
// 실제로 'key'의 역할을 이해하기 위해서는 React의 Virtual DOM 작동 방식을
// 이해하는 것이 중요합니다. 간단히 설명하자면:
// 1. 리스트의 각 아이템에는 고유한 'key'가 있어야 합니다.
//      이 'key'는 리스트 아이템을 React 내부에서 고유하게 식별하는 역할을 합니다.
// 2. 리스트를 업데이트할 때 React는 이전 상태의 Virtual DOM과 새로운 상태의
//      Virtual DOM을 비교합니다.
// 3. 'key'를 사용하여 React는 변경된 아이템을 더 빠르게 찾아낼 수 있습니다.
//      'key'가 없으면 React는 리스트 전체를 비교해야 하므로 성능이 저하될 수 있습니다.
// 4. 'key'를 사용하면 변경된 아이템만 업데이트하고 필요한 경우 추가 렌더링을
//      최소화하여 성능을 향상시킵니다.
// 따라서, 위의 코드에서 'key'를 사용하여 각 비용 항목을 고유하게 식별하는 것은
// React의 효율적인 렌더링과 성능 최적화를 위해 필요한 작업입니다.
// 'key'가 제공되면 React는 변경된 항목을 효율적으로 관리하고,
// 이전 상태와 새로운 상태 간의 차이를 파악하여 필요한 부분만 업데이트합니다.
