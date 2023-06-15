import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {programsAPI} from "../../api/programs";


const handleProgramsFulfilled = (state, action) => {
    const programData = action.payload;
    const formattedPrograms = programData.map(program => ({
        programId: program.id,
        name: program.name,
        description: program.description,
        level: program.level,
        type: program.type,
        isPublic: program.isPublic,
        marks: program.coachUsername ? [program.level, program.type, program.coachUsername] : [program.level, program.type]
    }));

    state.programs = formattedPrograms;
}

const handleProgramFulfilled = (state, action) => {
    const programData = action.payload;
    state.program = {
        programId: programData.id,
        name: programData.name,
        description: programData.description,
        level: programData.level,
        type: programData.type,
        marks: [programData.level, programData.type],
        programDays: programData.programDays.map((programDay) => ({
            programDayId: programDay.id,
            name: programDay.name,
            exercises: programDay.exercises.map((exercise) => ({
                exerciseId: exercise.id,
                name: exercise.name,
                exercisePrototypeId: exercise.exercisePrototypeId,
                approaches: exercise.approaches.map((approach) => ({
                    approachId: approach.id,
                    repeats: approach.repeats,
                    weight: approach.weight,
                    interval: approach.interval,
                    creationDate: approach.creationDate,
                })),
            })),
        })),
    };
}


const createInitialProgramData = (userName, userProgramsCount, dayName) => {
    const programData = {
        name: `Program from ${userName} ${userProgramsCount + 1}` ,
        description: "Program description",
        level: 'Intermediate',
        type: 'Endurance',
        programDays: [
            {
                name: `${dayName} 1`,
                exercises: [],
            },
        ],
    };

    return programData;
};

const createApproachInitialData = (programId, exerciseId) => {
    const data = {
        programId,
        exerciseId,
        repeats: 0,
        weight: 0,
        interval: 0
    };

    return data;
};

export const createProgram = createAsyncThunk('programs/createProgram', async (payload, {dispatch}) => {
    const programData = createInitialProgramData(payload.userName, payload.userProgramsCount, payload.dayName);
    const response = await programsAPI.createProgram(programData);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getPersonalPrograms())
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});


export const getProgramById = createAsyncThunk('programs/getProgramById', async (payload) => {
    const response = await programsAPI.getProgramById(payload.programId);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const getFreePrograms = createAsyncThunk('programs/getFreePrograms', async () => {
    const response = await programsAPI.getFreePrograms();
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const getSharedPrograms = createAsyncThunk('programs/getSharedPrograms', async () => {
    const response = await programsAPI.getSharedPrograms();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const getPersonalPrograms = createAsyncThunk('programs/getPersonalPrograms', async () => {
    const response = await programsAPI.getPersonalPrograms();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const createProgramDay = createAsyncThunk('programs/createProgramDay', async (payload) => {
    const response = await programsAPI.createProgramDay(payload.programId, payload.name);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const updateProgramDay = createAsyncThunk('programs/updateProgramDay', async (payload) => {
    const response = await programsAPI.updateProgramDay(payload.programDayId, payload.programId, payload.name);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const deleteProgramDay = createAsyncThunk('programs/deleteProgramDay', async (payload) => {
    const response = await programsAPI.deleteProgramDay(payload.programDayId, payload.programId);
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const deleteProgram = createAsyncThunk('programs/deleteProgram', async (payload, {dispatch}) => {
    const response = await programsAPI.deleteProgram(payload);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getPersonalPrograms())
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const createExercise = createAsyncThunk('programs/createExercise', async (payload, {dispatch}) => {
    const response = await programsAPI.createExercise(payload.programId, payload.exercisePrototypeId, payload.programDayId, payload.name);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const deleteExercise = createAsyncThunk('programs/deleteExercise', async (payload, {dispatch}) => {
    const response = await programsAPI.deleteExercise(payload.programId, payload.exerciseId);
    if (response.status >= 200 && response.status < 300) {
        dispatch(getProgramById({programId: payload.programId}))
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const getAllExercisesPrototype = createAsyncThunk('programs/getAllExercisesPrototype', async (payload) => {
    const response = await programsAPI.getAllExercisesPrototype();
    if (response.status >= 200 && response.status <= 300) {
        return response.data;
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const createApproach = createAsyncThunk('programs/createApproach', async (payload, {dispatch}) => {
    const approachData = createApproachInitialData(payload.programId, payload.exerciseId)
    const response = await programsAPI.createApproach(approachData.programId, approachData.exerciseId,approachData.repeats,approachData.weight, approachData.interval);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const deleteApproach = createAsyncThunk('programs/deleteApproach', async (payload, {dispatch}) => {

    const response = await programsAPI.deleteApproach(payload.programId, payload.exerciseId, payload.approachId);

    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const updateApproach = createAsyncThunk('programs/updateApproach', async (payload, {dispatch}) => {
    const response = await programsAPI.updateApproach(payload.programId, payload.exerciseId, payload.approachId, payload.repeats, payload.weight, payload.isDone, payload.interval);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});

export const updateProgram = createAsyncThunk('programs/updateProgram', async (payload, {dispatch}) => {
    const response = await programsAPI.updateProgram(payload.programId, payload.name, payload.description, payload.level, payload.type);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});
export const getQueryProgram = createAsyncThunk('programs/getQueryProgram', async (payload, {dispatch}) => {
    const response = await programsAPI.getQueryProgram(payload.query);
    if (response.status >= 200 && response.status <= 300) {
        dispatch(getProgramById({programId: payload.programId}))
    } else {
        throw new Error('Failed to fetch programs');
    }
});


const programSlice = createSlice({
    name: 'program',
    initialState : {
        programs: [],
        isLoading: false,
        selectedDay: 0,
        isProgramEditing: false,
        isProgramAccessibleToEdit: false,
        program: {
            isProgramLoading: false,
            programId: '',
            name: '',
            description: '',
            level: '',
            type: '',
            programDays: [
                {
                    programDayId: '',
                    name: '',
                    exercises: [
                        {
                            exerciseId: '',
                            name: '',
                            exercisePrototypeId: '',
                            approaches: [
                                {
                                    approachId: '',
                                    repeats: 0,
                                    weight: 0.0,
                                    creationDate: '',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        exercisesPrototype: [],
        exerciseCreationData: {
            programId: '',
            exercisePrototypeId: '',
            programDayId: '',
            name: ''
        }

    },
    reducers: {
        setPrograms: (state, action) => {
            state.programs = action.payload
        },
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload
        },
        setIsProgramEditing: (state, action) => {
            state.isProgramEditing = action.payload
        },
        setIsProgramAccessibleToEdit: (state, action) => {
            state.isProgramAccessibleToEdit = action.payload
        },
        setExerciseCreationData: (state, action) => {
            state.exerciseCreationData = {
                ...state.exerciseCreationData,
                ...action.payload
            };
        },
        setProgramWithEmptyValues: (state, action) => {
            const defaultValues = {
                isProgramLoading: false,
                programId: '',
                name: '',
                description: '',
                level: '',
                type: '',
                programDays: [
                    {
                        programDayId: '',
                        name: '',
                        exercises: [
                            {
                                exerciseId: '',
                                name: '',
                                exercisePrototypeId: '',
                                approaches: [
                                    {
                                        approachId: '',
                                        repeats: 0,
                                        weight: 0.0,
                                        creationDate: '',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            }

            state.program = defaultValues
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProgramById.fulfilled, (state, action) => {
                handleProgramFulfilled(state, action)
                state.isLoading = true;
            })
            .addCase(createProgram.fulfilled, (state, action) => {
                handleProgramFulfilled(state, action)
                state.isLoading = false;
            })
            .addCase(getFreePrograms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPersonalPrograms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSharedPrograms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFreePrograms.fulfilled, (state, action) => {
                handleProgramsFulfilled(state, action);
                state.isLoading = false;
            })
            .addCase(getPersonalPrograms.fulfilled, (state, action) => {
                handleProgramsFulfilled(state, action);
                state.isLoading = false;
            })
            .addCase(getSharedPrograms.fulfilled, (state, action) => {
                handleProgramsFulfilled(state, action);
                state.isLoading = false;
            })
            .addCase(getFreePrograms.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getPersonalPrograms.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getSharedPrograms.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(createProgramDay.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(deleteProgram.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(getAllExercisesPrototype.fulfilled, (state, action) => {
                state.isLoading = false;
                state.exercisesPrototype = action.payload;
            })
    }
})

export const {setPrograms, setSelectedDay, setIsProgramEditing, setIsProgramAccessibleToEdit,
    setProgramWithEmptyValues, setExerciseCreationData} = programSlice.actions;
export default programSlice.reducer;