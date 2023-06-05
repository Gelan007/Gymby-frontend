import React, {useEffect, useState} from 'react';
import ExerciseCreationModalWindowTemplate from "../template/ExerciseCreationModalWindowTemplate";
import ExerciseCreationModalProgramsListItem from "./ExerciseCreationModalProgramsListItem";
import s from './ExerciseCreationModalProgramsList.module.scss'

const ExerciseCreationModalProgramsList = ({isActive, setActive, buttonName, createExercise, getAllExercisesPrototype,
                                               exercisesPrototype, setExerciseCreationData, exerciseCreationData}) => {
    const [selectedExerciseName, setSelectedExerciseName] = useState()
    useEffect(() => {
        getAllExercisesPrototype()
    }, [])


    const exercisesByCategory = exercisesPrototype?.reduce((acc, exercise) => {
        const { category } = exercise;
        if (acc[category]) {
            acc[category].push(exercise);
        } else {
            acc[category] = [exercise];
        }

        return acc;
    }, {});



    return (
        <ExerciseCreationModalWindowTemplate isActive={isActive} setActive={setActive}
                                             buttonName={buttonName} createExercise={createExercise}
                                             creationData={exerciseCreationData} setCreationData={setExerciseCreationData}

        >
            <div className={s.programListItems}>
                {exercisesByCategory && Object.entries(exercisesByCategory)?.map(([category, exercises]) => (
                    <ExerciseCreationModalProgramsListItem isExpand={false} category={category}
                                                           exercises={exercises} setSelectedExercise={setSelectedExerciseName}
                                                           setExerciseCreationData={setExerciseCreationData} isActiveModal={isActive}
                    />
                ))}
            </div>
        </ExerciseCreationModalWindowTemplate>

    );
};

export default ExerciseCreationModalProgramsList;