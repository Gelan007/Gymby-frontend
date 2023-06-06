import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {diaryAPI} from '../../api/diary'
import {programsAPI} from "../../api/programs";


const createApproachInitialData = (exerciseId) => {
    const data = {
        exerciseId,
        repeats: 0,
        weight: 0,
        interval: 0
    };

    return data;
};



export const getDiaryDay = createAsyncThunk('diary/getDiaryDay', async (payload) => {
    const response = await diaryAPI.getDiaryDay(payload.date, payload.diaryDay);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const createExercise = createAsyncThunk('diary/createExercise', async (payload, {dispatch}) => {
    const response = await diaryAPI.createExercise(payload.diaryId, payload.exercisePrototypeId, payload.date, payload.name);
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllExercisesPrototype = createAsyncThunk('diary/getAllExercisesPrototype', async (payload) => {
    const response = await programsAPI.getAllExercisesPrototype();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});

export const deleteExercise = createAsyncThunk('diary/deleteExercise', async (payload, {dispatch}) => {
    const response = await diaryAPI.deleteExercise(payload.exerciseId);
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const deleteApproach = createAsyncThunk('diary/deleteApproach', async (payload, {dispatch}) => {
    const response = await diaryAPI.deleteApproach(payload.approachId);
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const createApproach = createAsyncThunk('diary/createApproach', async (payload, {dispatch}) => {
    const approachData = createApproachInitialData(payload.exerciseId)
    const response = await diaryAPI.createApproach(approachData.exerciseId,approachData.repeats,approachData.weight );
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const updateApproach = createAsyncThunk('diary/updateApproach', async (payload, {dispatch}) => {
    const response = await diaryAPI.updateApproach(payload.exerciseId, payload.approachId, payload.repeats, payload.weight, payload.isDone, payload.interval);
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllProgramsInDiary = createAsyncThunk('diary/getAllProgramsInDiary', async (payload, {dispatch}) => {
    const response = await diaryAPI.getAllProgramsInDiary();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const importProgramDay = createAsyncThunk('diary/importProgramDay', async (payload, {dispatch}) => {
    const response = await diaryAPI.importProgramDay(payload.diaryId, payload.programId, payload.programDayId, payload.date);
    if (response.status >= 200 && response.status <= 204) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});

const diarySlice = createSlice({
    name: 'diary',
    initialState : {
        diaryDay: {
            DiaryDayId: '',
            ProgramDayId: '',
            Date: '',
            Exercises: [],
        },
        date: null,
        diaryId: null,
        loading: false,
        error: null,
        exercisesPrototype: [],
        exerciseCreationData: {
            programId: '',
            exercisePrototypeId: '',
            programDayId: '',
            name: ''
        }
    },
    allProgramsInDiary: [],
    selectedProgramDay: '',
    selectedProgramId: '',
    reducers: {
        setDiaryDay: (state, action) => {
            state.diaryDay = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setExerciseCreationData: (state, action) => {
            state.exerciseCreationData = {
                ...state.exerciseCreationData,
                ...action.payload
            };
        },
        setSelectedProgramDay: (state, action) => {
            state.selectedProgramDay = action.payload
        },
        setSelectedProgramId: (state, action) => {
            state.selectedProgramId = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDiaryDay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDiaryDay.fulfilled, (state, action) => {
                state.diaryDay = action.payload;
                state.loading = false;
            })
            .addCase(getAllExercisesPrototype.fulfilled, (state, action) => {
                state.exercisesPrototype = action.payload;
                state.loading = false;
            })
            .addCase(getAllProgramsInDiary.fulfilled, (state, action) => {
                state.allProgramsInDiary = action.payload;
                action.payload.map((program,index) => {
                    state.allProgramsInDiary[index].marks = [program.level, program.type];
                })
                state.loading = false;
            });

    }
})

export const {setDiaryDay, setDate, setExerciseCreationData, setSelectedProgramDay, setSelectedProgramId} = diarySlice.actions;
export default diarySlice.reducer;