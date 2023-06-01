import React, {useState} from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import biceps from "../../../assets/images/measurements/biceps.svg";

const MeasurementsHand = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={biceps}/>
    );
};

export default MeasurementsHand;