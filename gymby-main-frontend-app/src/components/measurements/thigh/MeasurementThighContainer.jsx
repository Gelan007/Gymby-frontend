import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementThigh from "./MeasurementThigh";

const MeasurementThighContainer = (props) => {
    const type = 7;
    const unit = 1;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementThigh measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.thigh
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementThighContainer);