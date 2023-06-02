import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementShoulders from "./MeasurementShoulders";

const MeasurementShouldersContainer = (props) => {
    const type = 3;
    const unit = 1;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementShoulders measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.shoulders
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementShouldersContainer);