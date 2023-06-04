import React from 'react';
import s from './SecondDegreeOfNestingExercise.module.scss'
import plug from "../../../../../assets/images/measurements/biceps.svg";

const SecondDegreeOfNestingExercise = ({isChosen}) => {
    return (
        <div className={isChosen ? `${s.secondDegreeOfNestingExercise} ${s.chosen}` : s.secondDegreeOfNestingExercise}>
            <div className={s.mainBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>Підйом штанги на біцепс</div>
            </div>
        </div>
    );
};

export default SecondDegreeOfNestingExercise;