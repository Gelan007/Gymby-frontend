import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementFatPercentage from "./MeasurementFatPercentage";

const MeasurementFatPercentageContainer = (props) => {
    const type = 1;
    const unit = 2;
    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementFatPercentage measurementsData={props.measurementsData} type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.fatPercentage
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementFatPercentageContainer);