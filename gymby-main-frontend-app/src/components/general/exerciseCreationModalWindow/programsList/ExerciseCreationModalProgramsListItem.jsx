import React, {useEffect, useState} from 'react';
import s from "./ExerciseCreationModalProgramsList.module.scss";
import plug from "../../../../assets/images/measurements/biceps.svg";
import arrowIcon from "../../../../assets/images/modal/bottomArrow.svg";
import SecondDegreeOfNestingExercise from "./SecondDegreeOfNestingExercise/SecondDegreeOfNestingExercise";
import {useTranslation} from "react-i18next";


const ExerciseCreationModalProgramsListItem = ({isExpand = false, setSelectedExerciseName, category, exercises,
                                                   setExerciseCreationData, isActiveModal, selectedExerciseId, setSelectedExerciseId, setExerciseName, exerciseName}) => {
    const [expand, setExpand] = useState(isExpand);
    const arrowExpandHandler = () => expand ? setExpand(false) : setExpand(true);


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

    useEffect(() => {
        setExpand(false)
    }, [isActiveModal])

    const textMap = {
        Arms: t("programs.categories.arms"),
        Legs: t("programs.categories.legs"),
        Shoulders: t("programs.categories.shoulders"),
        Chest: t("programs.categories.chest"),
        Back: t("programs.categories.back"),
        ABS: t("programs.categories.abs")
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
                                                           setExerciseName={setExerciseName}
                                                           selectedExerciseId={selectedExerciseId}
                                                           setSelectedExerciseId={setSelectedExerciseId}
                                                           id={exercise.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCreationModalProgramsListItem;