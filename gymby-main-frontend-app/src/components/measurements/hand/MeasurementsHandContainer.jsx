import React, {useEffect} from 'react';
import MeasurementsHand from "./MeasurementsHand";
import {profileAPI} from "../../../api/measurements";
import {connect} from "react-redux";
import {useOidcFetch} from "@axa-fr/react-oidc";

const MeasurementsHandContainer = (props) => {
    // const { fetch } = useOidcFetch();
    useEffect(() => {
        profileAPI.getMeasurements(fetch).then(data => console.log(data))
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