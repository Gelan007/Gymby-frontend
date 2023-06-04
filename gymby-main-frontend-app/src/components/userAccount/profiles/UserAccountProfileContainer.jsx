import React, {useEffect, useState} from 'react';
import UserAccountProfile from "./UserAccountProfile";
import {connect} from "react-redux";
import {getProfileByUserName, setProfile} from "../../../redux/reducers/user-account-reducer";
import {useParams} from "react-router-dom";

const UserAccountProfileContainer = (props) => {
    const {username} = useParams()

    useEffect(() => {
        props.getProfileByUserName(username)

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
        profile: state.userAccountPage.profile

    }
}

export default connect(mapStateToProps, {getProfileByUserName, setProfile}) (UserAccountProfileContainer);