import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementWaist from "./MeasurementWaist";

const MeasurementWaistContainer = (props) => {
    const type = 6;
    const unit = 1;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementWaist measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.waist
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementWaistContainer);