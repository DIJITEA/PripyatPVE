import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface LangState {
  value: string;
}

// Define the initial state using that type
const initialState: LangState = {
  value: "RU",
};

export const LangStateSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state) => {
      if (state.value === "RU") {
        state.value = "EN";
      } else{
        state.value = "RU";
      }
    },
  },
});

export const { incrementByAmount } = LangStateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default LangStateSlice.reducer;
