import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {diaryAPI} from '../../api/diary'
import {programsAPI} from "../../api/programs";
import {friendsAPI} from "../../api/friends";
import {getProgramById} from "./program-slice";


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
    const response = await diaryAPI.getDiaryDay(payload.date, payload.diaryId);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const createExercise = createAsyncThunk('diary/createExercise', async (payload, {dispatch}) => {
    const response = await diaryAPI.createExercise(payload.diaryId, payload.exercisePrototypeId, payload.date, payload.name);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllExercisesPrototype = createAsyncThunk('diary/getAllExercisesPrototype', async (payload) => {
    const response = await programsAPI.getAllExercisesPrototype();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});

export const deleteExercise = createAsyncThunk('diary/deleteExercise', async (payload, {dispatch}) => {
    const response = await diaryAPI.deleteExercise(payload.exerciseId);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const deleteApproach = createAsyncThunk('diary/deleteApproach', async (payload, {dispatch}) => {
    const response = await diaryAPI.deleteApproach(payload.approachId);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const createApproach = createAsyncThunk('diary/createApproach', async (payload, {dispatch}) => {
    const approachData = createApproachInitialData(payload.exerciseId)
    const response = await diaryAPI.createApproach(approachData.exerciseId,approachData.repeats,approachData.weight );
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const updateApproach = createAsyncThunk('diary/updateApproach', async (payload, {dispatch}) => {
    const response = await diaryAPI.updateApproach(payload.exerciseId, payload.approachId, payload.repeats, payload.weight, payload.isDone, payload.interval);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllProgramsInDiary = createAsyncThunk('diary/getAllProgramsInDiary', async (payload, {dispatch}) => {
    const response = await diaryAPI.getAllProgramsInDiary();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getPersonalPrograms = createAsyncThunk('diary/getPersonalPrograms', async () => {
    const response = await programsAPI.getPersonalPrograms();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const importProgramDay = createAsyncThunk('diary/importProgramDay', async (payload, {dispatch}) => {
    const response = await diaryAPI.importProgramDay(payload.diaryId, payload.programId, payload.programDayId, payload.date);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const importProgramAutomatically = createAsyncThunk('diary/importProgramAutomatically', async (payload, {dispatch}) => {
    const response = await diaryAPI.importProgramAutomatically(payload.diaryId, payload.programId,payload.startDate, payload.daysOfWeek);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getDiaryDay({date: payload.date, diaryId: payload.diaryId}))
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllFriendsTrainers = createAsyncThunk('diary/getAllFriendsTrainers', async (payload, {dispatch}) => {
    const response = await friendsAPI.getQueryFriendsProfile('trainers', null)
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const takeAccessToMyDiaryByUserName = createAsyncThunk('diary/takeAccessToMyDiaryByUserName', async (payload, {dispatch}) => {
    const response = await diaryAPI.accessToMyDiaryByUserName(payload.username)
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getAllAvailableDiaries = createAsyncThunk('diary/getAllAvailableDiaries', async (payload, {dispatch}) => {
    const response = await diaryAPI.getAllAvailableDiaries()
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch diary');
    }
});
export const getQueryProgram = createAsyncThunk('diary/getQueryProgram', async (payload, {dispatch}) => {
    const response = await programsAPI.getQueryProgram(payload.query);
    if (response.status >= 200 && response.status <= 300) {
        return response.data
    } else {
        throw new Error('Failed to fetch diary');
    }
});


const diarySlice = createSlice({
    name: 'diary',
    initialState : {
        diaryDay: {
            diaryDayId: '',
            programDayId: '',
            date: '',
            exercises: [],
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
        },
        allProgramsInDiary: [],
        selectedProgramDay: '',
        selectedProgramId: '',
        autoImportUserData: {
            date: new Date().getDate(),
            formattedDate: new Date().getDate(),
            daysOfWeek: []
        },
        listOfMyTrainerFriends: [],
        allAvailableDiaries: [],
        allPersonalPrograms: []
    },

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
        setAutoImportUserData:  (state, action) => {
            state.autoImportUserData = action.payload
        },
        setAllAvailableDiaries:  (state, action) => {
            state.allAvailableDiaries = action.payload
        },
        setDiaryId:  (state, action) => {
            state.diaryId = action.payload
        },
        setAllExercisesPrototype: (state, action) => {
            state.exercisesPrototype = action.payload
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
            })
            .addCase(getPersonalPrograms.fulfilled, (state, action) => {
                state.allPersonalPrograms = action.payload;
                action.payload.map((program,index) => {
                    state.allPersonalPrograms[index].marks = [program.level, program.type];
                })
                state.loading = false;
            })
            .addCase(getAllFriendsTrainers.fulfilled, (state, action) => {
                state.listOfMyTrainerFriends = action.payload.map((item) => ({
                    value: item.username,
                    name: item.username,
                }));
                state.loading = false;
            })
            .addCase(getAllAvailableDiaries.fulfilled, (state, action) => {
                const diaries = action.payload.map((item) => ({
                    value: item.diaryId,
                    name: item.name,
                }));
                localStorage.getItem('gymby-localization') === 'eng' ?
                    diaries.unshift({ value: false, name: 'My diary'})
                    :
                diaries.unshift({ value: false, name: 'Мій щоденник' });

                state.allAvailableDiaries = diaries;
                state.loading = false;
            })
            .addCase(getQueryProgram.fulfilled, (state, action) => {
                state.allProgramsInDiary = action.payload;
                action.payload.map((program,index) => {
                    state.allProgramsInDiary[index].marks = [program.level, program.type];
                })
                state.loading = false;
            })

    }
})

export const {setDiaryDay, setDate,setDiaryId, setExerciseCreationData, setSelectedProgramDay,
    setSelectedProgramId, setAutoImportUserData, setAllAvailableDiaries, setAllExercisesPrototype} = diarySlice.actions;
export default diarySlice.reducer;