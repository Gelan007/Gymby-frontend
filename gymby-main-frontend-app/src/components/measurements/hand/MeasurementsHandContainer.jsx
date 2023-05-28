import React, {useEffect} from 'react';
import MeasurementsHand from "./MeasurementsHand";
import {profileAPI} from "../../../api/measurements";
import {connect} from "react-redux";

const MeasurementsHandContainer = (props) => {
    useEffect(() => {
        profileAPI.getMeasurements(props.accessToken).then(data => console.log(data))
    }, [])

    return (
        <MeasurementsHand/>
    );
};
const mapStateToProps = (state) => {
    return {
        accessToken: state.auth.accessToken
    }
}
export default connect(mapStateToProps,{})(MeasurementsHandContainer);