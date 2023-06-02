import React, {useState} from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import biceps from "../../../assets/images/measurements/biceps.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";

const MeasurementsHand = ({measurementsData, type, unit}) => {
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={biceps} type={type} unit={unit}/>
    );
};

export default MeasurementsHand;