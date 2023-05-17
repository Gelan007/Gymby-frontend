import React, {useEffect} from 'react';
import MeasurementsHand from "./MeasurementsHand";
import {profileAPI} from "../../../api/measurements";

const MeasurementsHandContainer = () => {
    useEffect(() => {
        profileAPI.getMeasurements().then(data => console.log(data))
    }, [])

    return (
        <MeasurementsHand/>
    );
};

export default MeasurementsHandContainer;