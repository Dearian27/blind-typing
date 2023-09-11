import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice';
import TextSlice from './slices/TextSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    text: TextSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch