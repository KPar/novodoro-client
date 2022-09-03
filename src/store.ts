import { configureStore } from '@reduxjs/toolkit';
import timerStateReducer from './features/timerStateSlice';

const store = configureStore({
  reducer: {
    timerState: timerStateReducer,
  }
});

type RootState = ReturnType<typeof store.getState>;
export const selectTimerState = (state:RootState) => state.timerState.value;

export default store;