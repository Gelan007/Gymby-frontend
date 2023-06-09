import React, {useEffect, useState} from 'react';
import s from './Statistics.module.scss'
import Card from "../card/Card";
import noteDoneIcon from '../../../assets/images/statistics/noteDone.svg'
import noteDumbbellIcon from '../../../assets/images/statistics/noteDumbbell.svg'
import stopwatchDumbbellIcon from '../../../assets/images/statistics/stopwatchDumbbell.svg'
import awardIcon from '../../../assets/images/statistics/award.svg'
import medalIcon from '../../../assets/images/statistics/medal.svg'
import { useTranslation } from 'react-i18next';
import ChartCard from "../chart/ChartCard";



const Statistics = ({countOfExecutedExercises, countOfTrainings, countOfExecutedApproaches,
                        maxApproachesCountPerTraining, maxTonnagePerTraining,maxExercisesCountPerTraining,
                        doneExercisesByDate, doneApproachesByDate,...props}) => {

    const {t} = useTranslation()
    const EXERCISES = 'EXERCISES';
    const APPROACHES = 'APPROACHES';
    const [selectedStatisticsChartItem, setSelectedStatisticsChartItem] = useState(EXERCISES)


    return (
        <div className={s.statistics}>
            <div className={s.topBlock}>
                <div className={s.topBlock__column}>
                    <Card isLightBlue={true} title={countOfExecutedExercises} icon={noteDoneIcon} text={t("statistics.cards.card1")}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card isLightWhiteBlue={true}  title={countOfTrainings} icon={noteDumbbellIcon} text={t("statistics.cards.card2")}/>
                </div>
                <div className={s.topBlock__column}>
                    <Card icon={stopwatchDumbbellIcon} title={countOfExecutedApproaches} text={t("statistics.cards.card3")}/>
                </div>
            </div>
            <div className={s.mediumBlock}>
                {selectedStatisticsChartItem === EXERCISES &&
                    <ChartCard selectedStatisticsChartItem={selectedStatisticsChartItem}
                               setSelectedStatisticsChartItem={setSelectedStatisticsChartItem}
                               data={doneExercisesByDate} APPROACHES={APPROACHES} EXERCISES={EXERCISES}
                    />
                    ||
                    selectedStatisticsChartItem === APPROACHES &&
                    <ChartCard selectedStatisticsChartItem={selectedStatisticsChartItem}
                               setSelectedStatisticsChartItem={setSelectedStatisticsChartItem}
                               data={doneApproachesByDate} APPROACHES={APPROACHES} EXERCISES={EXERCISES}
                    />
                }
            </div>
            <div className={s.bottomBlock}>
                <div className={s.bottomBlock__titleBlock}>
                    <div className={s.bottomBlock__titleBlock_icon}>
                        <img src={awardIcon} alt="awardIcon"/>
                    </div>
                    <span>{t("statistics.records.title")}</span>
                </div>
                <div className={s.bottomBlock__cardsBlock}>
                    <div className={s.bottomBlock__column}>
                        <Card isLightBlue={true} title={maxApproachesCountPerTraining} icon={medalIcon}
                              text={t("statistics.records.record1")}/>
                    </div>
                    <div className={s.bottomBlock__column}>
                        <Card isLightWhiteBlue={true} title={maxTonnagePerTraining} icon={medalIcon}
                              text={t("statistics.records.record2")}/>
                    </div>
                    <div className={s.bottomBlock__column}>
                        <Card icon={medalIcon} title={maxExercisesCountPerTraining}
                              text={t("statistics.records.record3")}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;