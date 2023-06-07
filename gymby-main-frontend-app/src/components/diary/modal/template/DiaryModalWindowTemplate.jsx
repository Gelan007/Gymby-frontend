import React, {useEffect, useState} from 'react';
import s from './DiaryModalWindowTemplate.module.scss'
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg"
import ButtonGreen from "../../../UI/buttons/ButtonGreen";


const DiaryModalWindowTemplate = ({isActive, setActive, children, buttonName = 'Add',
                                      importProgramDay, selectedProgramDay, date, diaryId,
                                      selectedProgramId, isAutoImport = false, autoImportUserData, setAutoImportUserData, importProgramAutomatically}) => {

    const newDate = new Date(date);
    const initialDay = newDate.getDate().toString().padStart(2, "0");
    const initialMonth = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const initialYear = newDate.getFullYear().toString();
    const formattedInitialDate = `${initialDay}.${initialMonth}.${initialYear}`;

    const newDateConverter = (newDate) => new Date(newDate);

    useEffect(() => {
        setAutoImportUserData({
            date: date,
            formattedDate: newDateConverter(date).toISOString().slice(0, 10)})
    }, [date, isAutoImport])

   /* useEffect(() => {
        console.log(autoImportUserData)
    }, [autoImportUserData])*/

    const handleInputDateChange = (event) => {
        const newDate = newDateConverter(event.target.value)
        const isoDate = newDate.toISOString();
        setAutoImportUserData({...autoImportUserData, date: isoDate, formattedDate: event.target.value});
    };


    const handleButtonAdd = () => {
        if(isAutoImport) {
            importProgramAutomatically({diaryId, programId: selectedProgramId, date,
                startDate: autoImportUserData && autoImportUserData.date, daysOfWeek:autoImportUserData.daysOfWeek })
            setActive(false)
        } else {
            importProgramDay({diaryId, programId: selectedProgramId, programDayId: selectedProgramDay, date})
            setActive(false)
        }
    }

    const handleCheckboxChange = (day) => {
        const updatedDays = autoImportUserData.daysOfWeek ? [...autoImportUserData.daysOfWeek] : [];
        const index = updatedDays.indexOf(day);
        if (index !== -1) {
            updatedDays.splice(index, 1);
        } else {
            updatedDays.push(day);
        }
        setAutoImportUserData({...autoImportUserData, daysOfWeek:updatedDays})
    };

    return (
        <ModalWindow isActive={isActive} setActive={setActive} isBiggerModalWindow={isAutoImport} widthVW={isAutoImport ? 65 : 50}>
            {isAutoImport ?
                <div className={s.diaryModalWindowTemplate}>
                    <div className={s.topBlock}>
                        <div className={s.topBlock__leftBlock}>
                            <div className={s.search_autoImport}>
                                <InputGreySearch placeholder="пошук"/>
                            </div>
                            <div className={s.date}>
                                <span>Початкова дата: </span>
                                <input type="date"
                                       value={autoImportUserData && autoImportUserData.formattedDate}
                                       onChange={(e) => handleInputDateChange(e)}
                                />
                            </div>
                        </div>
                        <div className={s.topBlock__rightBlock}>
                           <span>Оберіть свій графік тренувань</span>
                            <div className={s.topBlock__rightBlock__columnBlock}>
                                <div className={s.topBlock__rightBlock__column}>
                                    <div className={s.topBlock__rightBlock__row}>
                                        <input
                                            type="checkbox"
                                            checked={autoImportUserData && autoImportUserData.monday}
                                            onChange={() => handleCheckboxChange('Monday')}
                                        />
                                        <label>Monday</label>
                                    </div>
                                    <div className={s.topBlock__rightBlock__row}>
                                        <input
                                            type="checkbox"
                                            checked={autoImportUserData && autoImportUserData.tuesday}
                                            onChange={() => handleCheckboxChange('Tuesday')}
                                        />
                                        <label>Tuesday</label>
                                    </div>
                                    <div className={s.topBlock__rightBlock__row}>
                                        <input
                                            type="checkbox"
                                            checked={autoImportUserData && autoImportUserData.wednesday}
                                            onChange={() => handleCheckboxChange('Wednesday')}
                                        />
                                        <label>Wednesday</label>
                                    </div>
                                </div>
                                <div className={s.topBlock__rightBlock__column}>
                                   <div className={s.topBlock__rightBlock__row}>
                                       <input
                                           type="checkbox"
                                           checked={autoImportUserData && autoImportUserData.thursday}
                                           onChange={() => handleCheckboxChange('Thursday')}
                                       />
                                       <label>Thursday</label>
                                   </div>
                                   <div className={s.topBlock__rightBlock__row}>
                                       <input
                                           type="checkbox"
                                           checked={autoImportUserData && autoImportUserData.friday}
                                           onChange={() => handleCheckboxChange('Friday')}
                                       />
                                       <label>Friday</label>
                                   </div>
                                </div>
                                <div className={s.topBlock__rightBlock__column}>
                                    <div className={s.topBlock__rightBlock__row}>
                                        <input
                                            type="checkbox"
                                            checked={autoImportUserData && autoImportUserData.saturday}
                                            onChange={() => handleCheckboxChange('Saturday')}
                                        />
                                        <label>Saturday</label>
                                    </div>
                                    <div className={s.topBlock__rightBlock__row}>
                                        <input
                                            type="checkbox"
                                            checked={autoImportUserData && autoImportUserData.sunday}
                                            onChange={() => handleCheckboxChange('Sunday')}
                                        />
                                        <label>Sunday</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.close}
                             onClick={() => setActive(false)}
                        >
                            <img src={closeIcon} alt="close"/>
                        </div>
                    </div>
                    <div className={s.bottomBlock}>
                        {children}
                    </div>
                    <div className={s.button}>
                        <ButtonGreen onClick={() => handleButtonAdd()}>{buttonName}</ButtonGreen>
                    </div>
                </div>
                :
                <div className={s.diaryModalWindowTemplate}>
                    <div className={s.topBlock}>
                        <div className={s.search}>
                            <InputGreySearch placeholder="пошук"/>
                        </div>
                        <div className={s.date}>
                            {formattedInitialDate}
                        </div>
                        <div className={s.close}
                             onClick={() => setActive(false)}
                        >
                            <img src={closeIcon} alt="close"/>
                        </div>
                    </div>
                    <div className={s.bottomBlock}>
                        {children}
                    </div>
                    <div className={s.button}>
                        <ButtonGreen onClick={() => handleButtonAdd()}>{buttonName}</ButtonGreen>
                    </div>
                </div>
            }
        </ModalWindow>
    );
};

export default DiaryModalWindowTemplate;