import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {MEASUREMENTS_HAND_ROUTE} from "../../utils/routes/consts";
import MeasurementsHandContainer from "../../components/measurements/hand/MeasurementsHandContainer";

const MeasurementsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(MEASUREMENTS_HAND_ROUTE)
    }, [])

    return (
        <MeasurementsHandContainer/>
    );
};

export default MeasurementsPage;