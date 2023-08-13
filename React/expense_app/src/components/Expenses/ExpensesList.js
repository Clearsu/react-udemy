import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found in selected year.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // 리액트가 각 요소를 식별할 수 있도록 매핑 시에는 항상 key를 추가해야 한다.
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
