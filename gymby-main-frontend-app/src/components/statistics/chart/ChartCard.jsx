import React, {useEffect} from 'react';
import s from "./ChartCard.module.scss"
import ChartCardButton from "./button/ChartCardButton";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Dot, ResponsiveContainer} from 'recharts';
import noteDoneIcon from '../../../assets/images/statistics/noteDone.svg'
import stopwatchDumbbellIcon from '../../../assets/images/statistics/stopwatchDumbbell.svg'
import {useTranslation} from "react-i18next";

const ChartCard = ({selectedStatisticsChartItem,setSelectedStatisticsChartItem,data, EXERCISES, APPROACHES,...props}) => {
    const {t} = useTranslation()

    return (
        <div className={s.chartCard}>
            <span className={s.chartCard__title}></span>
            <div className={s.chart}>
                <ResponsiveContainer width="97%" aspect={3}>
                    <LineChart width={700} height={500} data={data} isAnimationActive={true} animationDuration={2}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="date"/>
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor: "#8884d7", color: "#fff"}} itemStyle={{color: "#fff"}}
                                 cursor={false}/>
                        <Legend/>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={true} animationDuration={2} strokeWidth="4"
                              dot={{fill: "#2e4355", stroke: "#8c88dc", strokeWidth: 2, r: 5}}
                              activeDot={{fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={s.buttonsBlock}>
                <div className={s.buttonsBlock__button} onClick={() => setSelectedStatisticsChartItem(EXERCISES)}>
                    <ChartCardButton icon={noteDoneIcon} text={t("statistics.charts.exercises")}
                                     isActive={selectedStatisticsChartItem === EXERCISES ? true : false}/>
                </div>
                <div className={s.buttonsBlock__button} onClick={() => setSelectedStatisticsChartItem(APPROACHES)}>
                    <ChartCardButton icon={stopwatchDumbbellIcon} text={t("statistics.charts.approaches")}
                                     isActive={selectedStatisticsChartItem === APPROACHES ? true : false}/>
                </div>
            </div>
        </div>
    );
};

export default ChartCard;