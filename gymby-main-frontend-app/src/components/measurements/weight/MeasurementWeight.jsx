import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import weight from "../../../assets/images/measurements/weight.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementWeight = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={weight}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.weight")}/>
    );
};

export default MeasurementWeight;