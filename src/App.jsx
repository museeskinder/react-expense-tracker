import s from './style.module.css'
import { ExpenseInput } from './assets/containers/ExpenseInput/ExpenseInput';
import { ExpenseList } from './assets/containers/ExpenseList/ExpenseList';
import { IncomeInput } from './assets/containers/IncomeInput/IncomeInput';
import { ExpenseTotal } from './assets/containers/ExpenseTotal/ExpenseTotal';

export function App() {
  return (
    <div className={s.container}>
      <div className={` row ${s.header}`}>
          Logo
        <div className={"col-3"}>
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div> 
      <div className={`row ${s.workspace}`}>
        <div className={`col-12 ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-12 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
