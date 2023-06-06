import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import forearm from "../../../assets/images/measurements/forearm.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementForearms = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={forearm}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.forearms")}/>
    );
};

export default MeasurementForearms;