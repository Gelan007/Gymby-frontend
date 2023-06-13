import React, {useEffect, useState} from 'react';
import s from "./MeasurementsItem.module.scss";

import editIcon from "../../../assets/images/general/icons/editIcon.png";
import deleteIcon from "../../../assets/images/general/icons/basketWhiteBackground2.svg";
import dumbbellPlugIcon from "../../../assets/images/general/dumbbell.svg";
import applyIcon from '../../../assets/images/general/icons/applyGreen.svg'
import { useTranslation } from 'react-i18next';
import InputGrey from "../../UI/inputs/InputGrey";
import SelectSimple from "../../UI/select/SelectSimple";



const MeasurementsItem = ({icon = dumbbellPlugIcon, measurements,
                              changesValue, date,
                              days, measurementUnit,measurementType,
                              deleteMeasurement, measurementId,
                              editMeasurement, ...props}) => {
    const {t} = useTranslation()
    const [isEditMode, setIsEditMode] = useState(false)
    const [measurementsUserInput, setMeasurementsUserInput] = useState({value: '', date: ''})
    const editModeHandler = () => isEditMode ?  setIsEditMode(false) : setIsEditMode(true);

    const newDateConverter = (newDate) => new Date(newDate);
    const [formattedInitialDate, setFormattedInitialDate] = useState(newDateConverter(date).toISOString().slice(0, 10))
    const [dateToForbidSelectFutureDates, setDateToForbidSelectFutureDates] = useState()
    useEffect(() => {
        const dateNow = new Date()
        dateNow.setDate(dateNow.getDate() + 1)
        setDateToForbidSelectFutureDates(dateNow.toISOString().split('T')[0])
    }, [])


    useEffect(() => {
        let newDate = newDateConverter(date);
        //newDate.setDate(newDate.getDate() + 1);
        setFormattedInitialDate(newDate.toISOString().slice(0, 10))
    }, [date])

    useEffect(() => {
        let dateWithExtraMinuteForCorrectDisplaying = newDateConverter(date);
        dateWithExtraMinuteForCorrectDisplaying.setTime(dateWithExtraMinuteForCorrectDisplaying.getTime() + 10 * 60 * 60 * 1000)
        //let newDate = newDateConverter(date);
        //newDate.setDate(newDate.getDate() + 1);
        setMeasurementsUserInput({value: measurements, date: dateWithExtraMinuteForCorrectDisplaying.toISOString(), formattedDate: newDateConverter(date).toISOString().slice(0, 10)})
    }, [measurements, date])

    const getMeasurementUnitForDisplaying = () => {
        if(measurementUnit === 0) {
            return t("measurements.item.kilogram")
        } else if (measurementUnit === 1) {
            return t("measurements.item.centimeter")
        } else if (measurementUnit === 2) {
            return '%'
        }
    }

    const handleInputDateChange = (event) => {
        const newDate = newDateConverter(event.target.value)
        newDate.setTime(newDate.getTime() + 3 * 60 * 60 * 1000)
        const isoDate = newDate.toISOString();
        setMeasurementsUserInput({...measurementsUserInput, date: isoDate, formattedDate: event.target.value});
    };

    const handleDeleteButton = () => deleteMeasurement({id: measurementId})
    const handleApplyButton = () => {
        editMeasurement({
            date: measurementsUserInput.date, type: measurementType,
            value: measurementsUserInput.value, unit: measurementUnit,
            id:measurementId
        })
        editModeHandler()
    }

    const valueInputChangeHandler = (e) => {
        const decimalNumbers = /^\d*\.?\d*$/; // Регулярное выражение для проверки на числа с десятичной точкой
        const inputValue = e.target.value;

        if (inputValue === '' || decimalNumbers.test(inputValue)) {
            if(measurementsUserInput.value <= 3000) {
                setMeasurementsUserInput({...measurementsUserInput, value: inputValue})
            } else if (measurementsUserInput.value >= 3000){
                setMeasurementsUserInput({...measurementsUserInput, value: measurements})
            }
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
                        <InputGrey value={measurementsUserInput.value}
                                   onChange={(e) => valueInputChangeHandler(e)}
                                   style={{height: "35px", minWidth: "60px", maxWidth: "80px"}}
                        />
                        <span> {getMeasurementUnitForDisplaying()}</span>
                    </div>
                    :
                    <div className={s.measurements}>
                        {measurements} {getMeasurementUnitForDisplaying()}
                    </div>
                }

                <div className={s.differences}>
                    {changesValue > 0 ? `+${changesValue}` : `${changesValue}`} <span>{getMeasurementUnitForDisplaying()}</span>
                </div>
                {isEditMode ?
                    <div className={s.fullDate}>
                        <input type="date"
                               max={dateToForbidSelectFutureDates}
                               value={measurementsUserInput.formattedDate}
                               onChange={(e) => handleInputDateChange(e)}
                        />
                    </div>
                    :
                    <div className={s.fullDate}>{formattedInitialDate}</div>
                }
                
                <div className={s.days}>{days} {t("measurements.item.daysAgo")}</div>
                <div className={s.buttonsBlock}>
                    {isEditMode ?
                        <div className={s.applyButton} onClick={handleApplyButton}>
                            <img src={applyIcon} alt="applyButton"/>
                        </div>
                        :
                        <div className={s.editButton} onClick={editModeHandler}>
                            <img src={editIcon} alt="editButton"/>
                        </div>
                    }
                    {isEditMode ?
                        <div className={s.deleteButton} onClick={handleDeleteButton}>
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