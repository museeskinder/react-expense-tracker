import { createSlice, current } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState : {
        expenseList : [{name: 'apple', price: 100}]
    },
    reducers : {
        addExpense: (currentSlice) => {
            currentSlice.expenseList.push({name: 'orange', price: '20'})
        }
    }
});

export const { addExpense } = expenseSlice.actions; 