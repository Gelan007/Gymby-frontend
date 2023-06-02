import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import weight from "../../../assets/images/measurements/weight.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";

const MeasurementWeight = ({measurementsData, type, unit}) => {
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={weight} type={type} unit={unit}/>
    );
};

export default MeasurementWeight;