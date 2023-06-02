import React from 'react';
import {connect} from "react-redux";
import {addMeasurement, deleteMeasurement, editMeasurement} from "../../../redux/slices/measurements-slice";
import MeasurementsMainItem from "./MeasurementsMainItem";

const MeasurementsMainItemContainer = (props) => {

    return (
        <MeasurementsMainItem addMeasurement={props.addMeasurement}
                              deleteMeasurement={deleteMeasurement}
                              editMeasurement={editMeasurement}
                              {...props}
        />
    );
};
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps,{addMeasurement, deleteMeasurement, editMeasurement})(MeasurementsMainItemContainer);