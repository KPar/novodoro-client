import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface totalBreakTimeSliceState {
    value: number;
}
const initialState: totalBreakTimeSliceState = {
    value: 5
}

export const totalBreakTimeSlice = createSlice({
    name: "totalBreakTime",
    initialState,
    reducers: {
        setTotalTime: (state,action: PayloadAction<number>)=> {
            state.value = action.payload;
        }
    }
});

export const {setTotalTime} = totalBreakTimeSlice.actions;

export default totalBreakTimeSlice.reducer;