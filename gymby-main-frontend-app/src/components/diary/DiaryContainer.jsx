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
    takeAccessToMyDiaryByUserName, getAllAvailableDiaries,
    setAllAvailableDiaries, setDiaryId, getQueryProgram, setAllExercisesPrototype
} from "../../redux/slices/diary-slice";
import {getMyProfile, updateProfile, addProfilePhoto, deleteProfilePhoto} from "../../redux/reducers/user-account-reducer";


const DiaryContainer = (props) => {
    const [inputUserData, setInputUserData] = useState('')
    const [userModalProgramSearch, setUserModalProgramSearch] = useState('')
    const [userModalExerciseSearch, setUserModalExerciseSearch] = useState('')

    useEffect(() => {
        const initializeDate = new Date();
        initializeDate.setHours(0, 0, 0, 0);
        const isoDate = initializeDate.toISOString();
        props.setDate(isoDate);
    }, [])


    useEffect(() => {
        //setDiaryId(inputUserData.diary)
        props.getDiaryDay({date: props.date, diaryId: props.diaryId})
    }, [props.date, props.diaryId])

    useEffect(() => {
        props.getAllAvailableDiaries()
        props.getAllProgramsInDiary()

        return () => {
            props.setDiaryDay({})
            props.setDiaryId()
        }
    }, [])


    useEffect(() => {
        props.getMyProfile()
        props.getAllFriendsTrainers()
    }, [])

    useEffect(() => {
        searchExercisesPrototype();
    }, [userModalExerciseSearch])

    const getDiaryQueryProgram = (e) => {
        const result = e.target.value
        setUserModalProgramSearch(result)
        props.getQueryProgram({query: result})
    }

    const searchExercisesPrototype = () => {
        if(userModalExerciseSearch !== ''){
            props.setAllExercisesPrototype(props.exercisesPrototype.filter(prototype => prototype.category.includes(userModalExerciseSearch)));
        } else if(userModalExerciseSearch === ''){
            props.getAllExercisesPrototype()
        }
    }

    return (
        <Diary inputUserData={inputUserData} setInputUserData={setInputUserData}
               userModalProgramSearch={userModalProgramSearch} setUserModalProgramSearch={setUserModalProgramSearch}
               getDiaryQueryProgram={getDiaryQueryProgram} searchExercisesPrototype={searchExercisesPrototype}
               userModalExerciseSearch={userModalExerciseSearch} {...props} setUserModalExerciseSearch={setUserModalExerciseSearch}/>
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
        listOfMyTrainerFriends: state.diary.listOfMyTrainerFriends,
        allAvailableDiaries: state.diary.allAvailableDiaries,
        isCoach: state.userAccountPage.myProfile.isCoach,

    }
}

export default connect(mapStateToProps,
    {getDiaryDay, setDiaryDay, setDate, createExercise, getAllExercisesPrototype, setExerciseCreationData,
        deleteExercise, deleteApproach, createApproach, updateApproach, getAllProgramsInDiary,
        setSelectedProgramDay, importProgramDay,setSelectedProgramId,setAutoImportUserData, importProgramAutomatically,getAllFriendsTrainers,
        takeAccessToMyDiaryByUserName, getAllAvailableDiaries, setAllAvailableDiaries, setDiaryId,
        getQueryProgram, setAllExercisesPrototype,getMyProfile})
(DiaryContainer);