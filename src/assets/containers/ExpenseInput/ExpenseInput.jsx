import { useState } from "react";
import { addExpense } from "../../../store/expense/expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  let [id, setId] = useState(0)

  const submit = (e) => {
    setId(id += 1);
    e.preventDefault();
    dispatch(addExpense({id: id, name: name, price: price}));
  };

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button  type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
