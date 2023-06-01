import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";
import MeasurementChest from "./MeasurementChest";

const MeasurementChestContainer = (props) => {
    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementChest measurementsData={props.measurementsData}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.chest
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementChestContainer);