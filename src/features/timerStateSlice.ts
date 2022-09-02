import { createSlice} from "@reduxjs/toolkit";

type timerState = "inactive" | "active" | "paused" | "completed" | "break" | "completed break"

interface timerStateSliceState {
    value: timerState;
}
const initialState: timerStateSliceState = {
    value: "inactive"
}

export const timerStateSlice = createSlice({
    name: "timerState",
    initialState,
    reducers: {
        setTimerState: (state,action)=> {
            state.value = action.payload;
        }
    }
});

export const {setTimerState} = timerStateSlice.actions;

export default timerStateSlice.reducer;