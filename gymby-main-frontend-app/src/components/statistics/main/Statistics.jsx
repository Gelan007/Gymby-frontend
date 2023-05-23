import React from 'react';
import s from './Statistics.module.scss'
import Card from "../card/Card";
import noteDoneIcon from '../../../assets/images/statistics/noteDone.svg'
import noteDumbbellIcon from '../../../assets/images/statistics/noteDumbbell.svg'
import stopwatchDumbbellIcon from '../../../assets/images/statistics/stopwatchDumbbell.svg'
import awardIcon from '../../../assets/images/statistics/award.svg'
import medalIcon from '../../../assets/images/statistics/medal.svg'
import { useTranslation } from 'react-i18next';



const Statistics = () => {

    const {t} = useTranslation()

    return (
        <div className={s.statistics}>
            <div className={s.topBlock}>
                <div className={s.topBlock__column}>
                    <Card isLightBlue={true} icon={noteDoneIcon} text={t("statistics.cards.card1")}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card isLightWhiteBlue={true} icon={noteDumbbellIcon} text={t("statistics.cards.card2")}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card icon={stopwatchDumbbellIcon} text={t("statistics.cards.card3")}/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;