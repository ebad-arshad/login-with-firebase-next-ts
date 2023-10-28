"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accReducer from "./features/acc-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  acc: accReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;