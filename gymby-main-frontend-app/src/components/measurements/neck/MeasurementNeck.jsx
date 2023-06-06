import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import neck from "../../../assets/images/measurements/neck.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementNeck = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={neck}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.neck")}/>
    );
};

export default MeasurementNeck;