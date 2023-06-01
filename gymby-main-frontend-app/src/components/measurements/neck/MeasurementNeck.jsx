import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import neck from "../../../assets/images/measurements/neck.svg";

const MeasurementNeck = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={biceps}/>
    );
};

export default MeasurementNeck;