import React, {useEffect} from 'react';
import MeasurementsHand from "./MeasurementsHand";
import {measurementsAPI} from "../../../api/measurements";
import {connect} from "react-redux";
import {useOidcFetch} from "@axa-fr/react-oidc";

const MeasurementsHandContainer = (props) => {

    useEffect(() => {
        measurementsAPI.getMeasurements().then(data => console.log(data))
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