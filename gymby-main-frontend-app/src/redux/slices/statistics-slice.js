import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {statisticsAPI} from '../../api/statistics'


export const getAllNumberStatistics = createAsyncThunk('measurements/getAllNumberStatistics', async (payload) => {
    const response = await statisticsAPI.getAllNumberStatistics();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch statistics');
    }
});


const statisticsSlice = createSlice({
    name: 'statistics',
    initialState : {
        isLoading: true,
        countOfExecutedExercises: 0,
        countOfTrainings: 0,
        countOfExecutedApproaches: 0,
        maxApproachesCountPerTraining: 0,
        maxTonnagePerTraining: 0,
        maxExercisesCountPerTraining: 0,
    },
    reducers: {
        /*setMeasurements: (state, action) => {
            // state.isActiveUABtn = action.payload
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllNumberStatistics.fulfilled, (state, action) => {
                console.log(action.payload)

                state.countOfExecutedApproaches = action.payload.countOfExecutedApproaches
                state.maxApproachesCountPerTraining = action.payload.maxApproachesCountPerTraining
                state.сountOfExecutedExercises = action.payload.сountOfExecutedExercises
                state.сountOfTrainings = action.payload.сountOfTrainings
                state.maxTonnagePerTraining = action.payload.maxTonnagePerTraining
                state.maxExercisesCountPerTraining = action.payload.maxExercisesCountPerTraining
                state.isLoading = true;
            })

    }
})

export const {} = statisticsSlice.actions;
export default statisticsSlice.reducer;