import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import thighs from "../../../assets/images/measurements/thighs.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementThigh = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={thighs}
                                       type={type} unit={unit} titleName={t("measurements.leftPanel.thigh")}/>
    );
};

export default MeasurementThigh;