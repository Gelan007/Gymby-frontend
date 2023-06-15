import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {statisticsAPI} from '../../api/statistics'


export const getAllNumberStatistics = createAsyncThunk('measurements/getAllNumberStatistics', async (payload) => {
    const response = await statisticsAPI.getAllNumberStatistics();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch statistics');
    }
});

export const getDoneExercisesByDate = createAsyncThunk('measurements/getDoneExercisesByDate', async (payload) => {
    const response = await statisticsAPI.getDoneExercisesByDate(payload.startDate, payload.endDate);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch statistics');
    }
});


export const getDoneApproachesByDate = createAsyncThunk('measurements/getDoneApproachesByDate', async (payload) => {
    const response = await statisticsAPI.getDoneApproachesByDate(payload.startDate, payload.endDate);
    if (response.status >= 200 && response.status <= 300) {
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
        doneExercisesByDate: [],
        doneApproachesByDate: []
    },
    reducers: {
        /*setMeasurements: (state, action) => {
            // state.isActiveUABtn = action.payload
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllNumberStatistics.fulfilled, (state, action) => {
                state.countOfExecutedApproaches = action.payload.countOfExecutedApproaches
                state.maxApproachesCountPerTraining = action.payload.maxApproachesCountPerTraining
                state.сountOfExecutedExercises = action.payload.сountOfExecutedExercises
                state.сountOfTrainings = action.payload.сountOfTrainings
                state.maxTonnagePerTraining = action.payload.maxTonnagePerTraining
                state.maxExercisesCountPerTraining = action.payload.maxExercisesCountPerTraining
                state.isLoading = true;
            })
            .addCase(getDoneExercisesByDate.fulfilled, (state, action) => {
                const sortedData = action.payload.sort((a, b) => new Date(a.date) - new Date(b.date));
                state.doneExercisesByDate = sortedData
            })
            .addCase(getDoneApproachesByDate.fulfilled, (state, action) => {
                const sortedData = action.payload.sort((a, b) => new Date(a.date) - new Date(b.date));
                state.doneApproachesByDate = sortedData
            })

    }
})

export const {} = statisticsSlice.actions;
export default statisticsSlice.reducer;