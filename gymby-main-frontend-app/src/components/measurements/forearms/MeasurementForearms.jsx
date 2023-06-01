import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import forearm from "../../../assets/images/measurements/forearm.svg";

const MeasurementForearms = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={forearm}/>
    );
};

export default MeasurementForearms;