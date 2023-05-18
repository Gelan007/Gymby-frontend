import React from 'react';
import dumbbell from '../../../../../assets/images/modal/dumbbell.svg'
import s from './Day.module.scss'

const Day = ({number = 1, isActive = false}) => {
    return (
        <div className={s.dayBlock}>
            <div className={s.dumbbell}>
                <img src={dumbbell} alt="dumbbell"/>
            </div>
            <div className={isActive ? `${s.day} ${s.active}` : s.day}>День {number}</div>
        </div>
    );
};

export default Day;