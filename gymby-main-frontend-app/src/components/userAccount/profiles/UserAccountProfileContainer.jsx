import React, {useEffect, useState} from 'react';
import UserAccountProfile from "./UserAccountProfile";
import {connect} from "react-redux";
import {getProfileByUserName, setProfile} from "../../../redux/reducers/user-account-reducer";
import {useParams} from "react-router-dom";
import {getAllAvailableDiaries} from "../../../redux/slices/diary-slice";

const UserAccountProfileContainer = (props) => {
    const {username} = useParams()

    useEffect(() => {
        props.getProfileByUserName(username)
        props.getAllAvailableDiaries()
        return () => {
            props.setProfile('', '', '',
                '', '', '',
                '', '', '', '', [], [], false)
        }
    }, [])

    return (
        <UserAccountProfile profile={props.profile} isRequestCompleted={props.profile.isRequestCompleted} {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        //myProfile: state.userAccountPage.myProfile
        profile: state.userAccountPage.profile,
        allAvailableDiaries: state.diary.allAvailableDiaries

    }
}

export default connect(mapStateToProps, {getProfileByUserName, setProfile, getAllAvailableDiaries}) (UserAccountProfileContainer);