import React, {useEffect} from 'react';
import MeasurementChest from "../chest/MeasurementChest";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";

const MeasurementShouldersContainer = (props) => {
    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementChest measurementsData={props.measurementsData}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.shoulders
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementShouldersContainer);