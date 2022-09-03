import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface currentMinuteSliceState {
    value: number;
}
const initialState: currentMinuteSliceState = {
    value: 0
}

export const currentMinuteSlice = createSlice({
    name: "currentMinute",
    initialState,
    reducers: {
        setCurrentMinute: (state,action: PayloadAction<number>)=> {
            state.value = action.payload;
        },
        incrementCurrentMinute: (state,action: PayloadAction<number>)=> {
            state.value = state.value + action.payload;
        }

    }
});

export const {setCurrentMinute, incrementCurrentMinute} = currentMinuteSlice.actions;

export default currentMinuteSlice.reducer;