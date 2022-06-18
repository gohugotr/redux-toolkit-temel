import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 20,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementSenBelirle: (state, action) => {
      state.value = state.value + action.payload
    },
  },
})

export const { increment, decrement, incrementSenBelirle } = counterSlice.actions

export default counterSlice.reducer;