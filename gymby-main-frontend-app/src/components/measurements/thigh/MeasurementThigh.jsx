import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import thighs from "../../../assets/images/measurements/thighs.svg";

const MeasurementThigh = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={thighs}/>
    );
};

export default MeasurementThigh;