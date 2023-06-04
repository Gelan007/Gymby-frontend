import React from 'react';
import ExerciseCreationModalWindowTemplate from "../template/ExerciseCreationModalWindowTemplate";
import ExerciseCreationModalProgramsListItem from "./ExerciseCreationModalProgramsListItem";
import s from './ExerciseCreationModalProgramsList.module.scss'

const ExerciseCreationModalProgramsList = ({isActive, setActive, buttonName}) => {
    return (
        <ExerciseCreationModalWindowTemplate isActive={isActive} setActive={setActive} buttonName={buttonName}>
            <div className={s.programListItems}>
                <ExerciseCreationModalProgramsListItem isExpand={false}/>
                <ExerciseCreationModalProgramsListItem isExpand={false}/>
                <ExerciseCreationModalProgramsListItem/>
            </div>
        </ExerciseCreationModalWindowTemplate>

    );
};

export default ExerciseCreationModalProgramsList;