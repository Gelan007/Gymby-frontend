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
        marks: [program.level, program.type],
    }));

    state.programs = formattedPrograms;

}

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

const programSlice = createSlice({
    name: 'program',
    initialState : {
        programs: [],
        isLoading: false,
        selectedDay: 0,
        program: {
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProgramById.fulfilled, (state, action) => {
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
            });
    }
})

export const {setPrograms, setSelectedDay} = programSlice.actions;
export default programSlice.reducer;