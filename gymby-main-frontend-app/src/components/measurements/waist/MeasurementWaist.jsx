import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import waistAndRuler from "../../../assets/images/measurements/waistAndRuler.svg";

const MeasurementWaist = ({measurementsData}) => {
    return (
        <MeasurementsMainItem measurementsData={measurementsData} icon={waistAndRuler}/>
    );
};

export default MeasurementWaist;