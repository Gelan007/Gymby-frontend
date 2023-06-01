import React, {useState} from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";


const MeasurementsHand = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData}/>
    );
};

export default MeasurementsHand;