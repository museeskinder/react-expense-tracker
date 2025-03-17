import { createSlice, current } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState : {
        income: 0,
        expenseList : [],
        actionUsageCount: 0,
    },
    reducers : {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload)
        },
        addIncome: (currentSlice, action) => {
            currentSlice.income = action.payload;
        },
        incrementActionUsageCount: currentSlice => currentSlice.actionUsageCount++
    }
});

export const { addExpense, addIncome,  incrementActionUsageCount} = expenseSlice.actions; 