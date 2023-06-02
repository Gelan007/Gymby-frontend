import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import waistAndRuler from "../../../assets/images/measurements/waistAndRuler.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";

const MeasurementWaist = ({measurementsData, type, unit}) => {
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={waistAndRuler} type={type} unit={unit}/>
    );
};

export default MeasurementWaist;