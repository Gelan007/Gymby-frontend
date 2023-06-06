import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import percentage from "../../../assets/images/measurements/percentage.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementFatPercentage = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={percentage}
                                       type={type} unit={unit} titleName= {t("measurements.leftPanel.fatPersent")}/>
    );
};

export default MeasurementFatPercentage;