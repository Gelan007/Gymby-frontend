import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {measurementsAPI} from '../../api/measurements'

const MeasurementType = {
    Weight: 0,
    FatPercentage: 1,
    Neck: 2,
    Shoulders: 3,
    Forearms: 4,
    Chest: 5,
    Waist: 6,
    Thigh: 7,
    Hand: 8
};

const handleMeasurementsFulfilled = (state, action) => {
    const measurements = action.payload.measurements;
    // Очищаем текущие данные перед обновлением
    state.weight = [];
    state.fatPercentage = [];
    state.neck = [];
    state.shoulders = [];
    state.forearms = [];
    state.chest = [];
    state.waist = [];
    state.thigh = [];
    state.hand = [];
    state.photos.push(action.payload.photos)

    measurements.forEach((measurement) => {
        const { ...measurementData } = measurement;
        switch (measurement.type) {
            case MeasurementType.Weight:
                state.weight.push(measurementData);
                break;
            case MeasurementType.FatPercentage:
                state.fatPercentage.push(measurementData);
                break;
            case MeasurementType.Neck:
                state.neck.push(measurementData);
                break;
            case MeasurementType.Shoulders:
                state.shoulders.push(measurementData);
                break;
            case MeasurementType.Forearms:
                state.forearms.push(measurementData);
                break;
            case MeasurementType.Chest:
                state.chest.push(measurementData);
                break;
            case MeasurementType.Waist:
                state.waist.push(measurementData);
                break;
            case MeasurementType.Thigh:
                state.thigh.push(measurementData);
                break;
            case MeasurementType.Hand:
                state.hand.push(measurementData);
                break;
            default:
                break;
        }
    });
}


export const getMeasurements = createAsyncThunk('measurements/getMeasurements', async () => {
    const response = await measurementsAPI.getMeasurements();
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const addMeasurement = createAsyncThunk('measurements/addMeasurement', async (payload) => {
    const {date, type, value, unit, id} = payload
    const response = await measurementsAPI.addMeasurement(date, type, value, unit, id);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const editMeasurement = createAsyncThunk('measurements/editMeasurement', async (payload) => {
    const {date, type, value, unit, id} = payload
    const response = await measurementsAPI.editMeasurement(id, date, type, value, unit);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});

export const deleteMeasurement = createAsyncThunk('measurements/deleteMeasurement', async (payload) => {
    const {id} = payload
    const response = await measurementsAPI.deleteMeasurement(id);
    if (response.status >= 200 && response.status <= 204) {
        return response.data;
    } else {
        throw new Error('Failed to fetch measurements');
    }
});


const measurementsSlice = createSlice({
    name: 'measurements',
    initialState : {
        weight: [],
        fatPercentage: [],
        neck: [],
        shoulders: [],
        forearms: [],
        chest: [],
        waist: [],
        thigh: [],
        hand: [],
        photos: []
    },
    reducers: {
        /*setMeasurements: (state, action) => {
            // state.isActiveUABtn = action.payload
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMeasurements.fulfilled, handleMeasurementsFulfilled)
            .addCase(addMeasurement.fulfilled, handleMeasurementsFulfilled)
            .addCase(deleteMeasurement.fulfilled, handleMeasurementsFulfilled)
            .addCase(editMeasurement.fulfilled, handleMeasurementsFulfilled)
            /*.addCase(addMeasurement.fulfilled, (state, action) => {})*/
    }
})

export const {} = measurementsSlice.actions;
export default measurementsSlice.reducer;