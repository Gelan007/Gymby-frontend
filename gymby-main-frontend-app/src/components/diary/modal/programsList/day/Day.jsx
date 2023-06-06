import React from 'react';
import dumbbell from '../../../../../assets/images/modal/dumbbell.svg'
import s from './Day.module.scss'
import { useTranslation } from 'react-i18next';

const Day = ({number = 1, isActive = false, dayName,programDayId, setSelectedProgramDay,
                 selectedProgramDay, setSelectedProgramId, programId}) => {
    const {t} = useTranslation()
    const handleSelectedProgramId = () => {
        setSelectedProgramDay(programDayId)
        setSelectedProgramId(programId)
    }
    return (
        <div className={s.dayBlock} onClick={() => handleSelectedProgramId()}>
            <div className={s.dumbbell}>
                <img src={dumbbell} alt="dumbbell"/>
            </div>
            <div className={selectedProgramDay === programDayId ? `${s.day} ${s.active}` : s.day}>{dayName}{/*{t("diary.modal.day")} {number}*/}</div>
        </div>
    );
};

export default Day;