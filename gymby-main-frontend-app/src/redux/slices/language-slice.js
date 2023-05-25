import {createSlice} from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState : {
        isActiveUABtn: true,
        isActiveENGBtn: false
    },
    reducers: {
        setIsActiveUABtn: (state, action) => {
            state.isActiveUABtn = action.payload
        },
        setIsActiveENGBtn: (state, action) => {
            state.isActiveENGBtn = action.payload
        }
    }

})

export const {setIsActiveUABtn, setIsActiveENGBtn} = languageSlice.actions;
export default languageSlice.reducer;