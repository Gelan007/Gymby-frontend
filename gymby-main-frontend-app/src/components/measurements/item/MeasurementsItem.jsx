import React, {useEffect, useState} from 'react';
import s from "./MeasurementsItem.module.scss";

import editIcon from "../../../assets/images/general/icons/editIcon.png";
import deleteIcon from "../../../assets/images/general/icons/basketWhiteBackground2.svg";
import dumbbellPlugIcon from "../../../assets/images/general/dumbbell.svg";
import applyIcon from '../../../assets/images/general/icons/applyGreen.svg'
import { useTranslation } from 'react-i18next';
import InputGrey from "../../UI/inputs/InputGrey";
import SelectSimple from "../../UI/select/SelectSimple";



const MeasurementsItem = ({icon = dumbbellPlugIcon, measurements , changesValue, date, days, measurementUnit, ...props}) => {
    const {t} = useTranslation()
    const [isEditMode, setIsEditMode] = useState(false)
    const editModeHandler = () => isEditMode ?  setIsEditMode(false) : setIsEditMode(true);

    const getMeasurementUnitForDisplaying = () => {
        if(measurementUnit === 0) {
            return 'кг'
        } else if (measurementUnit === 1) {
            return t("measurements.item.centimeter")
        } else if (measurementUnit === 2) {
            return '%'
        }
    }

    return (
        <div className={s.measurementsItem}>
            <div className={s.measurementsItem__body}>
                <div className={s.mainIcon}>
                    <img src={icon} alt="avatar"/>
                </div>
                {isEditMode ?
                    <div className={s.measurements}>
                        <InputGrey value={measurements}
                                   style={{height: "35px", minWidth: "80px", maxWidth: "100px"}}
                        />
                        <span>{getMeasurementUnitForDisplaying()}</span>
                    </div>
                    :
                    <div className={s.measurements}>
                        {measurements} {t("measurements.item.centimeter")}
                    </div>
                }

                <div className={s.differences}>
                    {changesValue} {t("measurements.item.centimeter")} 
                </div>
                {isEditMode ?
                    <div className={s.fullDate}><input type="date"/></div>
                    :
                    <div className={s.fullDate}>{date}</div>
                }
                
                <div className={s.days}>{days} {t("measurements.item.daysAgo")}</div>
                <div className={s.buttonsBlock}>
                    {isEditMode ?
                        <div className={s.applyButton} onClick={editModeHandler}>
                            <img src={applyIcon} alt="applyButton"/>
                        </div>
                        :
                        <div className={s.editButton} onClick={editModeHandler}>
                            <img src={editIcon} alt="editButton"/>
                        </div>
                    }
                    {isEditMode ?
                        <div className={s.deleteButton} onClick={() => {}}>
                            <img src={deleteIcon} alt="deleteButton"/>
                        </div>
                        :
                        <div className={s.defaultBasketOpacity}>
                            <img src={deleteIcon} alt="deleteButton"/>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default MeasurementsItem;