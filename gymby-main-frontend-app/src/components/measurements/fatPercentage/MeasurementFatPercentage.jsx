import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import percentage from "../../../assets/images/measurements/percentage.svg";

const MeasurementFatPercentage = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={percentage}/>
    );
};

export default MeasurementFatPercentage;