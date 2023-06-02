import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementNeck from "./MeasurementNeck";

const MeasurementNeckContainer = (props) => {
    const type = 2;
    const unit = 1;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementNeck measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.neck
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementNeckContainer);