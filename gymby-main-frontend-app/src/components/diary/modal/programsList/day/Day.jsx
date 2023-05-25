import React from 'react';
import dumbbell from '../../../../../assets/images/modal/dumbbell.svg'
import s from './Day.module.scss'
import { useTranslation } from 'react-i18next';

const Day = ({number = 1, isActive = false}) => {
    const {t} = useTranslation()
    return (
        <div className={s.dayBlock}>
            <div className={s.dumbbell}>
                <img src={dumbbell} alt="dumbbell"/>
            </div>
            <div className={isActive ? `${s.day} ${s.active}` : s.day}>{t("diary.modal.day")} {number}</div>
        </div>
    );
};

export default Day;