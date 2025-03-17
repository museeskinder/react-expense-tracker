import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpense, addIncome, incrementActionUsageCount} from "../expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    matcher: isAnyOf(addExpense, addIncome),
    effect: async (action, listenerAPI) => {
        listenerAPI.dispatch(incrementActionUsageCount())
    }
});