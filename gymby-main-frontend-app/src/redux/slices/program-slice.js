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
                exercises: [
                   /* {
                        programDayId: "your_program_day_id",
                        date: "your_date_time",
                        name: "your_exercise_name",
                        exercisePrototypeId: "your_exercise_prototype_id",
                        approaches: [
                            {
                                repeats: 10,
                                weight: 20.5,
                                isDone: true,
                                creationDate: "your_date_time",
                            },
                        ],
                    },*/
                ],
            },
        ],
    };

    return programData;
};

export const createProgram = createAsyncThunk('programs/createProgram', async (payload) => {
    const programData = createInitialProgramData(payload.userName, payload.userProgramsCount, payload.dayName);
    const response = await programsAPI.createProgram(programData);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});


export const getProgramById = createAsyncThunk('programs/getProgramById', async (payload) => {
    const response = await programsAPI.getProgramById(payload.programId);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const getFreePrograms = createAsyncThunk('programs/getFreePrograms', async () => {
    const response = await programsAPI.getFreePrograms();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});
export const getSharedPrograms = createAsyncThunk('programs/getSharedPrograms', async () => {
    const response = await programsAPI.getSharedPrograms();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});
export const getPersonalPrograms = createAsyncThunk('programs/getPersonalPrograms', async () => {
    const response = await programsAPI.getPersonalPrograms();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const createProgramDay = createAsyncThunk('programs/createProgramDay', async (payload) => {
    const response = await programsAPI.createProgramDay(payload.programId, payload.name);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const updateProgramDay = createAsyncThunk('programs/updateProgramDay', async (payload) => {
    const response = await programsAPI.updateProgramDay(payload.programDayId, payload.programId, payload.name);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const deleteProgramDay = createAsyncThunk('programs/deleteProgramDay', async (payload) => {
    const response = await programsAPI.deleteProgramDay(payload.programDayId, payload.programId);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
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
    }
})

export const {setPrograms, setSelectedDay, setIsProgramEditing, setIsProgramAccessibleToEdit, setProgramWithEmptyValues} = programSlice.actions;
export default programSlice.reducer;