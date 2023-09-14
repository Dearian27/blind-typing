import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';
import TextSlice from './slices/TextSlice';
import SettingsSlice from './slices/SettingsSlice';
import StatsSlice from './slices/StatsSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    text: TextSlice,
    settings: SettingsSlice,
    stats: StatsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;