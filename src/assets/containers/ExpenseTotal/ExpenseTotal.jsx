import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector(store => store.EXPENSE.income);
  const expenseList = useSelector(store => store.EXPENSE.expenseList);

  const totalExpense = expenseList.reduce((accumutator, expense) => {
    return Number.parseFloat(accumutator) + Number.parseFloat(expense.price);
  },0)

  const remainingIncome = Number.parseFloat(income) - totalExpense;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>${totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{ remainingIncome  }$</div>
      </div>
    </div>
  );
}
