import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import waistAndRuler from "../../../assets/images/measurements/waistAndRuler.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementWaist = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={waistAndRuler}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.waist")}/>
    );
};

export default MeasurementWaist;