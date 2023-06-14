import {createSlice} from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState : {
        isActiveUABtn: !localStorage.getItem('gymby-localization') ? true : localStorage.getItem('gymby-localization') === 'ua' ? true : false,
        isActiveENGBtn: localStorage.getItem('gymby-localization') === 'eng' ? true : false
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