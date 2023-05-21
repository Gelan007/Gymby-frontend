import React from 'react';
import s from './Statistics.module.scss'
import Card from "../card/Card";
import noteDoneIcon from '../../../assets/images/statistics/noteDone.svg'
import noteDumbbellIcon from '../../../assets/images/statistics/noteDumbbell.svg'
import stopwatchDumbbellIcon from '../../../assets/images/statistics/stopwatchDumbbell.svg'
import awardIcon from '../../../assets/images/statistics/award.svg'
import medalIcon from '../../../assets/images/statistics/medal.svg'



const Statistics = () => {
    return (
        <div className={s.statistics}>
            <div className={s.topBlock}>
                <div className={s.topBlock__column}>
                    <Card isLightBlue={true} icon={noteDoneIcon} text={'Кількість виконаних вправ'}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card isLightWhiteBlue={true} icon={noteDumbbellIcon} text={'Кількість тренувань'}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card icon={stopwatchDumbbellIcon} text={'Кількість виконаних підходів'}/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;