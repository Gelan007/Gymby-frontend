import React, {useEffect} from 'react';
import UserAccountPersonalData from "./UserAccountPersonalData";
import {connect} from "react-redux";
import {getMyProfile, updateProfile, addProfilePhoto, deleteProfilePhoto} from "../../../redux/reducers/user-account-reducer";
import {useOidcAccessToken, useOidcIdToken, useOidcUser} from "@axa-fr/react-oidc";
import {getAllAvailableDiaries} from "../../../redux/slices/diary-slice";

const UserAccountPersonalDataContainer = (props) => {

    useEffect(() => {
        props.getMyProfile()
        props.getAllAvailableDiaries()
    }, [])


    return (
        <div>
            <UserAccountPersonalData
                myProfile={props.myProfile}
                updateProfile={props.updateProfile}
                addProfilePhoto={props.addProfilePhoto}
                deleteProfilePhoto={props.deleteProfilePhoto}
                {...props}
            />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfile: state.userAccountPage.myProfile,
        allAvailableDiaries: state.diary.allAvailableDiaries
    }
}


export default connect(mapStateToProps, {updateProfile, getMyProfile, addProfilePhoto, deleteProfilePhoto, getAllAvailableDiaries})
(UserAccountPersonalDataContainer);