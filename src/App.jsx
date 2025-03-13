import s from './style.module.css'
import { ExpenseInput } from './assets/components/ExpenseInput/ExpenseInput';

export function App() {
  return (
    <div className={s.container}>
      <div className={` row ${s.header}`}>
          Logo
        <div className={"col-3"}>
        </div>
        <div className={`col-9 ${s.income_input}`}>
          Income Input
        </div>
      </div> 
      <div className={`row ${s.workspace}`}>
        <div className={`col-12 ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-12 col-md-6 col-lg-4 ${s.expense_list}`}>
          Expense History
          <div className={`col-12 ${s.expense_total}`}>
            Expense Total
          </div>
        </div>
      </div>
    </div>
  );
}
