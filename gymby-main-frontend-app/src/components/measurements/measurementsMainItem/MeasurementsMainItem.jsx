import React, {useState} from 'react';
import s from "./MainItem.module.scss";
import MeasurementsLeftPanel from "../leftPanel/MeasurementsLeftPanel";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import MeasurementsItem from "../item/MeasurementsItem";
import biceps from "../../../assets/images/measurements/biceps.svg";
import { useTranslation } from 'react-i18next';
import {deleteMeasurement} from "../../../redux/slices/measurements-slice";

const MeasurementsMainItem = ({measurementsData, icon, addMeasurement, deleteMeasurement, type, unit = 1}) => {

    const {t} = useTranslation()
    const LIST = 'list';
    const CHART = 'chart';
    const [selectedOption, setSelectedOption] = useState(LIST);
    const listOptionHandle = () => setSelectedOption(LIST);
    const chartOptionHandle = () => setSelectedOption(CHART);

    const handleAddButton = () => {
        const date = new Date()
        const isoDate = date.toISOString();
        addMeasurement({date: isoDate, type, value: '0', unit})
    }


    return (
        <div className={s.measurementsMainItem}>
            <MeasurementsLeftPanel/>
            <div className={s.measurementsMainItem__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__title}>Рука</div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === LIST ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={listOptionHandle}>{t("measurements.list")}</span>

                        <span className={selectedOption === CHART ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={chartOptionHandle}>{t("measurements.chart")}</span>
                    </div>
                    <div className={s.navBlock__button}>
                        <ButtonGreen onClick={(() => handleAddButton())}>{t("measurements.add")}</ButtonGreen>
                    </div>
                </div>
                <div className={s.itemsList}>
                    {measurementsData?.map((measurement) => (
                        <MeasurementsItem key={measurement.id} icon={icon} measurements={measurement.value}
                                          changesValue={'+1,2'} date={measurement.date}
                                          days={'31'} measurementUnit={measurement.unit}
                                          addMeasurement={addMeasurement} deleteMeasurement={deleteMeasurement}
                                          measurementId={measurement.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeasurementsMainItem;