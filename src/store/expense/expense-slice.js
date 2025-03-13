import { createSlice } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState : {
        expenseList : [{name: 'apple', price: 100}]
    }
});