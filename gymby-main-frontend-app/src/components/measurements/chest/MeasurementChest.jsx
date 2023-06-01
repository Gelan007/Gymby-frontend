import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import chest from "../../../assets/images/measurements/Chest.svg";

const MeasurementChest = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={chest}/>
    );
};

export default MeasurementChest;