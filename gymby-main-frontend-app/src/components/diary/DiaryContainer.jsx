import React, {useEffect} from 'react';
import Diary from "./Diary";
import {connect} from "react-redux";
import {
    getDiaryDay,
    setDiaryDay,
    setDate,
    createExercise,
    getAllExercisesPrototype, setExerciseCreationData,
    deleteExercise, deleteApproach, createApproach, updateApproach
} from "../../redux/slices/diary-slice";

const DiaryContainer = (props) => {

    useEffect(() => {
        props.getDiaryDay({date: props.date})
    }, [props.date])

    return (
        <Diary {...props}/>
    );
};

let mapStateToProps = (state) => {
    return {
        diaryDay: state.diary.diaryDay,
        date: state.diary.date,
        exercisesPrototype: state.diary.exercisesPrototype,
        exerciseCreationData: state.diary.exerciseCreationData,
        diaryId: state.diary.diaryId,

    }
}

export default connect(mapStateToProps,
    {getDiaryDay, setDiaryDay, setDate, createExercise, getAllExercisesPrototype, setExerciseCreationData,
        deleteExercise, deleteApproach, createApproach, updateApproach })
(DiaryContainer);