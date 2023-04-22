import React from 'react';
import s from "./MeasurementsItem.module.scss";

import editIcon from "../../../assets/images/general/icons/editIcon.png";
import deleteIcon from "../../../assets/images/general/icons/basketWhiteBackground2.svg";
import dumbbellPlugIcon from "../../../assets/images/general/dumbbell.svg";

const MeasurementsItem = ({icon = dumbbellPlugIcon, measurements , changesValue, date, days}, ...props) => {
    return (
        <div className={s.measurementsItem}>
            <div className={s.measurementsItem__body}>
                <div className={s.mainIcon}>
                    <img src={icon} alt="avatar"/>
                </div>
                <div className={s.measurements}>
                    {measurements}
                </div>
                <div className={s.differences}>
                    {changesValue}
                </div>
                <div className={s.fullDate}>{date}</div>
                <div className={s.days}>{days}</div>
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