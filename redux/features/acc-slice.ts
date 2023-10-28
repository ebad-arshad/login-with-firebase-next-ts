"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  name: string;
  email: string;
  uid: string;
}

const initialState: InitialState = {
  name: '',
  email: '',
  uid: ''
};

export const acc = createSlice({
  name: "accDetails",
  initialState,
  reducers: {
    // function(state, action: PayloadAction<string[]>) {}
    currentUser(state, action: PayloadAction<InitialState>) { }
  },
});

export const { currentUser } = acc.actions

export default acc.reducer;