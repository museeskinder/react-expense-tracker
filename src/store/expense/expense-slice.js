import { createSlice, current } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState : {
        expenseList : [{name: 'apple', price: 100}]
    },
    reducers : {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload)
        }
    }
});

export const { addExpense } = expenseSlice.actions; 