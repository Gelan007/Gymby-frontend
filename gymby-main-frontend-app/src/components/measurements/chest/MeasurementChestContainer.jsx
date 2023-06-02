import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementChest from "./MeasurementChest";

const MeasurementChestContainer = (props) => {
    const type = 5;
    const unit = 2;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementChest measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.chest
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementChestContainer);