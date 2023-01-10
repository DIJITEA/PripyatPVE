import { configureStore } from '@reduxjs/toolkit'
// ...
import counterSlice from './actions/counterSlice'
import LangStateSlice from './actions/textDataHandler'
const store = configureStore({
  reducer: {
    counter: counterSlice,
    lang: LangStateSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;