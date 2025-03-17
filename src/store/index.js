import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middlewares/logger-middleware";

const combinedReducers = combineReducers({
    EXPENSE: expenseSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducers = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware)
});
const persistedStore = persistStore(store);

export { store, persistedStore };