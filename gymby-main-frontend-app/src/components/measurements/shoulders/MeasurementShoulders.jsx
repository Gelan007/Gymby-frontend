import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import shoulder from "../../../assets/images/measurements/shoulder.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementShoulders = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} icon={shoulder}
                                       type={type} unit={unit} titleName= {t("measurements.leftPanel.shoulders")}/>
    );
};

export default MeasurementShoulders;