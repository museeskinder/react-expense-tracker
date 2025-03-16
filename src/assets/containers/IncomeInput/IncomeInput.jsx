import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { addIncome } from '../../../store/expense/expense-slice';
import { useState } from "react";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const [income, setIncome] = useState();
  dispatch(addIncome(income));

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income: {income} </div>
      <div className="col-6">
        <input onChange={(e) => setIncome(e.target.value)} type="number" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
