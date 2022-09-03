import { configureStore } from '@reduxjs/toolkit';
import timerStateReducer from './features/timerStateSlice';
import totalTimeReducer from './features/totalTimeSlice';
import totalBreakTimeReducer from './features/totalBreakTimeSlice';
import currentMinuteReducer from './features/currentMinuteSlice';

const store = configureStore({
  reducer: {
    timerState: timerStateReducer,
    totalTime: totalTimeReducer,
    totalBreakTime: totalBreakTimeReducer,
    currentMinute: currentMinuteReducer
  }
});

type RootState = ReturnType<typeof store.getState>;
export const selectTimerState = (state:RootState) => state.timerState.value;
export const selectTotalTime = (state:RootState) => state.totalTime.value;
export const selectTotalBreakTime = (state:RootState) => state.totalBreakTime.value;
export const selectCurrentMinute = (state:RootState) => state.currentMinute.value;

export default store;