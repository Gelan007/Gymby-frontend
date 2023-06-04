import React, {useEffect, useState} from 'react';
import s from "./ExerciseCreationModalProgramsList.module.scss";
import plug from "../../../../assets/images/measurements/biceps.svg";
import arrowIcon from "../../../../assets/images/modal/bottomArrow.svg";
import SecondDegreeOfNestingExercise from "./SecondDegreeOfNestingExercise/SecondDegreeOfNestingExercise";
import {useTranslation} from "react-i18next";


const ExerciseCreationModalProgramsListItem = ({isExpand = false, setSelectedExerciseName, category, exercises,
                                                   setExerciseCreationData}) => {
    const [expand, setExpand] = useState(isExpand);
    const arrowExpandHandler = () => expand ? setExpand(false) : setExpand(true);
    const [exerciseName, setExerciseName] = useState()
    const {t} = useTranslation()

    useEffect(() => {
        exercises?.map((exercise) => {
            if(exercise.name === exerciseName) {
                setExerciseCreationData({
                    exercisePrototypeId: exercise.id,
                    name: exerciseName
                })
            }
        })

    }, [exerciseName])

    const textMap = {
        Arms: t("programs.categories.arms"),
        Legs: t("programs.categories.legs")
    };

    return (
        <div className={expand ? `${s.exerciseItem} ${s.active}` : s.exerciseItem}>
            <div className={s.exerciseItem__body}>
                <div className={expand ? s.topBlock : `${s.topBlock} ${s.hidden}`}>
                    <div className={s.exerciseIcon}>
                        <img src={plug} alt="icon"/>
                    </div>
                    <div className={s.titleBlock}>
                        <div className={s.title}> {textMap[category] ? textMap[category] : category}</div>
                    </div>
                    <div className={expand ? `${s.arrowIcon} ${s.rotate}` : s.arrowIcon}
                         onClick={arrowExpandHandler}
                    >
                        <img src={arrowIcon} alt="arrow"/>
                    </div>
                </div>
                <div className={expand ? `${s.bottomBlock} ${s.active}` : `${s.bottomBlock}` }>
                    <div className={s.bottomBlock__daysBlock} >
                        {exercises.map(exercise => (
                            <SecondDegreeOfNestingExercise key={exercise.id} name={exercise.name}
                                                           exerciseName={exerciseName}
                                                           setExerciseName={setExerciseName}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCreationModalProgramsListItem;