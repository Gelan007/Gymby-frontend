import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import shoulder from "../../../assets/images/measurements/shoulder.svg";

const MeasurementShoulders = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={shoulder}/>
    );
};

export default MeasurementShoulders;