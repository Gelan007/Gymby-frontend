import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import weight from "../../../assets/images/measurements/weight.svg";

const MeasurementWeight = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={weight}/>
    );
};

export default MeasurementWeight;