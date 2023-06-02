import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import chest from "../../../assets/images/measurements/Chest.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";

const MeasurementChest = ({measurementsData, type, unit}) => {
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} type={type} unit={unit} icon={chest}/>
    );
};

export default MeasurementChest;