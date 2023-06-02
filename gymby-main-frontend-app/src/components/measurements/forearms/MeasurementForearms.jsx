import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import forearm from "../../../assets/images/measurements/forearm.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";

const MeasurementForearms = ({measurementsData, type, unit}) => {
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={forearm} type={type} unit={unit}/>
    );
};

export default MeasurementForearms;