import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface totalTimeSliceState {
    value: number;
}
const initialState: totalTimeSliceState = {
    value: 25
}

export const totalTimeSlice = createSlice({
    name: "totalTime",
    initialState,
    reducers: {
        setTotalTime: (state,action: PayloadAction<number>)=> {
            state.value = action.payload;
        }
    }
});

export const {setTotalTime} = totalTimeSlice.actions;

export default totalTimeSlice.reducer;