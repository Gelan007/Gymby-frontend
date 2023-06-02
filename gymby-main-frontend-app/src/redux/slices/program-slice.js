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
        marks: [program.level, program.type]
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
        /*setSelectedDay: (state, action) => {
            state.selectedDay = action.payload
        },*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProgramById.fulfilled, (state, action) => {
            const programData = action.payload;
            state.program = {
                programId: programData.programId,
                name: programData.name,
                description: programData.description,
                level: programData.level,
                type: programData.type,
                programDays: programData.programDays.map((programDay) => ({
                    programDayId: programDay.programDayId,
                    name: programDay.name,
                    exercises: programDay.exercises.map((exercise) => ({
                        exerciseId: exercise.exerciseId,
                        name: exercise.name,
                        exercisePrototypeId: exercise.exercisePrototypeId,
                        approaches: exercise.approaches.map((approach) => ({
                            approachId: approach.approachId,
                            repeats: approach.repeats,
                            weight: approach.weight,
                            creationDate: approach.creationDate,
                        })),
                    })),
                })),
            };
        })
            .addCase(getFreePrograms.fulfilled, handleProgramsFulfilled)
            .addCase(getPersonalPrograms.fulfilled, handleProgramsFulfilled)
            .addCase(getSharedPrograms.fulfilled, handleProgramsFulfilled)
    },
})

export const {} = programSlice.actions;
export default programSlice.reducer;