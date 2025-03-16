import { createSlice, current } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState : {
        income: 0,
        expenseList : []
    },
    reducers : {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload)
        },
        addIncome: (currentSlice, action) => {
            currentSlice.income = action.payload;
        }
    }
});

export const { addExpense, addIncome } = expenseSlice.actions; 