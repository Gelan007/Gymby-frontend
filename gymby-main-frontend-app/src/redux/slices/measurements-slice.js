import {createSlice} from "@reduxjs/toolkit";

const measurementsSlice = createSlice({
    name: 'measurements',
    initialState : {

    },
    reducers: {
        setIsActiveUABtn: (state, action) => {
            state.isActiveUABtn = action.payload
        }
    }

})

export const {setIsActiveUABtn, setIsActiveENGBtn} = measurementsSlice.actions;
export default measurementsSlice.reducer;