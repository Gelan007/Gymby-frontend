import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState : {
        selectedDay: 0,
    },
    reducers: {
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload
        },

    }

})

export const {setSelectedDay} = profileSlice.actions;
export default profileSlice.reducer;