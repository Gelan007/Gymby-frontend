import React, {useEffect, useState} from 'react';
import ExerciseCreationModalWindowTemplate from "../template/ExerciseCreationModalWindowTemplate";
import ExerciseCreationModalProgramsListItem from "./ExerciseCreationModalProgramsListItem";
import s from './ExerciseCreationModalProgramsList.module.scss'

const ExerciseCreationModalProgramsList = ({isActive, setActive, buttonName, createExercise, getAllExercisesPrototype, exercisesPrototype}) => {
    const [selectedExerciseName, setSelectedExerciseName] = useState()
    useEffect(() => {
        getAllExercisesPrototype()
    }, [])
    useEffect(() => {
        console.log(exercisesPrototype)
    }, [exercisesPrototype])

    // Создаем объект для группировки по категориям
    const exercisesByCategory = exercisesPrototype?.reduce((acc, exercise) => {
        const { category } = exercise;

        // Если категория уже существует, добавляем объект в соответствующий массив
        if (acc[category]) {
            acc[category].push(exercise);
        } else {
            // Если категория не существует, создаем новый массив с объектом
            acc[category] = [exercise];
        }

        return acc;
    }, {});



    return (
        <ExerciseCreationModalWindowTemplate isActive={isActive} setActive={setActive}
                                             buttonName={buttonName} createExercise={createExercise}

        >
            <div className={s.programListItems}>
                {exercisesByCategory && Object.entries(exercisesByCategory)?.map(([category, exercises]) => (
                    <ExerciseCreationModalProgramsListItem isExpand={false} category={category}
                                                           exercises={exercises} setSelectedExercise={setSelectedExerciseName}/>
                ))}
            </div>
        </ExerciseCreationModalWindowTemplate>

    );
};

export default ExerciseCreationModalProgramsList;