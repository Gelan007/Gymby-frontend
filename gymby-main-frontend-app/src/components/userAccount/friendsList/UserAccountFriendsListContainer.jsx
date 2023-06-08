import React, {useEffect, useState} from 'react';
import UserAccountFriendsList from "./UserAccountFriendsList";
import {connect} from "react-redux";
import {
    getMyFriendsList, getMyPendingFriendsList, acceptFriendship,
    rejectFriendship, deleteFriendship, getQueryFriendsProfile, accessProgramToUserByUsername, setUserName, getMyProfile
} from "../../../redux/reducers/user-account-reducer";
import {
    getAllAvailableDiaries,
    getAllProgramsInDiary,
    getDiaryDay,
    setDiaryDay, setDiaryId,
    setSelectedProgramId, setAutoImportUserData, setDate,
    setSelectedProgramDay
} from "../../../redux/slices/diary-slice";
import {getPersonalPrograms} from "../../../redux/slices/diary-slice";


const UserAccountFriendsListContainer = (props) => {
    const FRIENDS = 'friends';
    const REQUESTS = 'requests';
    const [selectedOption, setSelectedOption] = useState(FRIENDS);
    const [userSearchData, setUserSearchData] = useState();

    const handleUserSearch = (e) => {
        setUserSearchData(e.target.value)
        if(selectedOption === FRIENDS) {
            props.getQueryFriendsProfile(null, e.target.value)
        } else if(selectedOption === REQUESTS) {
            props.getQueryFriendsProfile(null, e.target.value)
        }
    }

    useEffect(() => {
        if(selectedOption === FRIENDS) {
            props.getMyFriendsList()
        } else if(selectedOption === REQUESTS) {
            props.getMyPendingFriendsList()
        }
    }, [selectedOption])



    useEffect(() => {
        const initializeDate = new Date();
        initializeDate.setHours(0, 0, 0, 0);
        const isoDate = initializeDate.toISOString();
        props.setDate(isoDate);
    }, [])


    useEffect(() => {
        props.getDiaryDay({date: props.date, diaryId: props.diaryId})
    }, [props.date, props.diaryId])

    useEffect(() => {
        props.getAllAvailableDiaries()
        props.getPersonalPrograms()

        return () => {
            props.setDiaryDay({})
            props.setDiaryId()
            props.setUserName(null)
        }
    }, [])

    useEffect(() => {
        props.getMyProfile()
    }, [])


    return (
        <UserAccountFriendsList
            profiles={props.profiles} friendsValue={FRIENDS}
            requestsValue={REQUESTS} selectedOption={selectedOption}
            setSelectedOption={setSelectedOption} acceptFriendship={props.acceptFriendship}
            rejectFriendship={props.rejectFriendship} deleteFriendship={props.deleteFriendship}
            handleUserSearch={handleUserSearch} userSearchData={userSearchData}
            accessProgramToUserByUsername={props.accessProgramToUserByUsername} setUserName={props.setUserName}
            username={props.username} isUserCoach={props.isCoach} {...props}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles,
        date: state.diary.date,
        diaryId: state.diary.diaryId,
        selectedProgramId: state.diary.selectedProgramId,
        allProgramsInDiary: state.diary.allPersonalPrograms,
        selectedProgramDay: state.diary.selectedProgramDay,
        username: state.userAccountPage.userName,
        isCoach: state.userAccountPage.myProfile.isCoach
    }
}

export default connect(mapStateToProps,
    {getMyFriendsList, getMyPendingFriendsList, acceptFriendship,
        rejectFriendship, deleteFriendship, getQueryFriendsProfile, accessProgramToUserByUsername,
        getDiaryDay, getAllAvailableDiaries, getAllProgramsInDiary, setDiaryDay, setDiaryId,
        setSelectedProgramId, setAutoImportUserData, setDate, setUserName, getMyProfile, setSelectedProgramDay, getPersonalPrograms})
(UserAccountFriendsListContainer);