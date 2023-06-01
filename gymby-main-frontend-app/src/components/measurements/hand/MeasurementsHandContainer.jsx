import React, {useEffect} from 'react';
import MeasurementsHand from "./MeasurementsHand";
import {measurementsAPI} from "../../../api/measurements";
import {connect} from "react-redux";
import {getMeasurements} from "../../../redux/slices/measurements-slice";

const MeasurementsHandContainer = (props) => {

    useEffect(() => {
        props.getMeasurements()
    }, [])

    return (
        <MeasurementsHand measurementsData={props.measurementsData}/>
    );
};
const mapStateToProps = (state) => {
    return {
        measurementsData: state.measurements.hand
    }
}

export default connect(mapStateToProps,{getMeasurements})(MeasurementsHandContainer);