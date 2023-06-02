import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementWeight from "./MeasurementWeight";

const MeasurementWeightContainer = (props) => {
    const type = 0;
    const unit = 0;

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementWeight measurementsData={props.measurementsData}  type={type} unit={unit}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.weight
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementWeightContainer);