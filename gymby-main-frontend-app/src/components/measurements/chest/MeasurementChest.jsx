import React from 'react';
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";
import chest from "../../../assets/images/measurements/Chest.svg";
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import {useTranslation} from "react-i18next";

const MeasurementChest = ({measurementsData, type, unit}) => {
    const {t} = useTranslation()
    return (
        <MeasurementsMainItemContainer measurementsData={measurementsData} type={type} unit={unit}
                                       titleName={t("measurements.leftPanel.chest")} icon={chest} />
    );
};

export default MeasurementChest;