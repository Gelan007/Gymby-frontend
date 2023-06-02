import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementForearms from "./MeasurementForearms";

const MeasurementForearmsContainer = (props) => {
    const type = 4;
    const unit = 1;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementForearms measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.forearms
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementForearmsContainer);