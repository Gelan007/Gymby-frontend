import React from 'react';
import s from "./MeasurementsItem.module.scss";

import editIcon from "../../../assets/images/general/icons/editIcon.png";
import deleteIcon from "../../../assets/images/general/icons/basketWhiteBackground2.svg";
import dumbbellPlugIcon from "../../../assets/images/general/dumbbell.svg";
import { useTranslation } from 'react-i18next';

const MeasurementsItem = ({icon = dumbbellPlugIcon, measurements , changesValue, date, days}, ...props) => {
    const {t} = useTranslation()
    return (
        <div className={s.measurementsItem}>
            <div className={s.measurementsItem__body}>
                <div className={s.mainIcon}>
                    <img src={icon} alt="avatar"/>
                </div>
                <div className={s.measurements}>
                    {measurements} {t("measurements.item.centimeter")} 
                </div>
                <div className={s.differences}>
                    {changesValue} {t("measurements.item.centimeter")} 
                </div>
                <div className={s.fullDate}>{date}</div>
                <div className={s.days}>{days} {t("measurements.item.daysAgo")}</div>
                <div className={s.buttonsBlock}>
                    <div className={s.editButton}>
                        <img src={editIcon} alt="editButton"/>
                    </div>
                    <div className={s.deleteButton}>
                        <img src={deleteIcon} alt="deleteButton"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeasurementsItem;