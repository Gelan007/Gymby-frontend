import React, {useState} from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import biceps from "../../../assets/images/measurements/biceps.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementsHand = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={biceps}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.hand")}/>
    );
};

export default MeasurementsHand;