import React from 'react';
import dumbbell from '../../../../../assets/images/modal/dumbbell.svg'
import s from './Day.module.scss'

const Day = ({number = 1}) => {
    return (
        <div className={s.dayBlock}>
            <div className={s.dumbbell}>
                <img src={dumbbell} alt="dumbbell"/>
            </div>
            <div className={s.day}>День {number}</div>
        </div>
    );
};

export default Day;