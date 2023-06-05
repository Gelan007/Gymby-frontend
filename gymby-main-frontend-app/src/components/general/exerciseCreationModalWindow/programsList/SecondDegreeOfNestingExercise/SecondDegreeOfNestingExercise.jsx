import React from 'react';
import s from './SecondDegreeOfNestingExercise.module.scss'
import plug from "../../../../../assets/images/measurements/biceps.svg";

const SecondDegreeOfNestingExercise = ({name, setExerciseName, setSelectedExerciseId, selectedExerciseId, id}) => {
    const handleExerciseSelection = () => {
        setExerciseName(name)
        setSelectedExerciseId(id)
    }
    return (
        <div className={id === selectedExerciseId ? `${s.secondDegreeOfNestingExercise} ${s.chosen}` : s.secondDegreeOfNestingExercise}
             onClick={() => handleExerciseSelection()}
        >
            <div className={s.mainBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>{name}</div>
            </div>
        </div>
    );
};

export default SecondDegreeOfNestingExercise;