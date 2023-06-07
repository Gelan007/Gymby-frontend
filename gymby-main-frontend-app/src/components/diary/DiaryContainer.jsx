import React, {useEffect, useState} from 'react';
import Diary from "./Diary";
import {connect} from "react-redux";
import {
    getDiaryDay,
    setDiaryDay,
    setDate,
    createExercise,
    getAllExercisesPrototype,
    setExerciseCreationData,
    deleteExercise,
    deleteApproach,
    createApproach,
    updateApproach,
    getAllProgramsInDiary,
    setSelectedProgramDay,
    importProgramDay,
    setSelectedProgramId,
    setAutoImportUserData,
    importProgramAutomatically,
    getAllFriendsTrainers,
    takeAccessToMyDiaryByUserName
} from "../../redux/slices/diary-slice";


const DiaryContainer = (props) => {

    useEffect(() => {
        const initializeDate = new Date();
        initializeDate.setHours(0, 0, 0, 0);
        const isoDate = initializeDate.toISOString();
        props.setDate(isoDate);
    }, [])


    useEffect(() => {
        props.getDiaryDay({date: props.date})
    }, [props.date])

    useEffect(() => {
        props.getAllProgramsInDiary()
    }, [])

    useEffect(() => {
        props.getAllFriendsTrainers()
    }, [])

    useEffect(() => {
        console.log(props.listOfMyTrainerFriends)
    }, [props.listOfMyTrainerFriends])

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
        allProgramsInDiary: state.diary.allProgramsInDiary,
        selectedProgramDay: state.diary.selectedProgramDay,
        selectedProgramId: state.diary.selectedProgramId,
        autoImportUserData: state.diary.autoImportUserData,
        listOfMyTrainerFriends: state.diary.listOfMyTrainerFriends

    }
}

export default connect(mapStateToProps,
    {getDiaryDay, setDiaryDay, setDate, createExercise, getAllExercisesPrototype, setExerciseCreationData,
        deleteExercise, deleteApproach, createApproach, updateApproach, getAllProgramsInDiary,
        setSelectedProgramDay, importProgramDay,setSelectedProgramId,setAutoImportUserData, importProgramAutomatically,getAllFriendsTrainers,
        takeAccessToMyDiaryByUserName})
(DiaryContainer);