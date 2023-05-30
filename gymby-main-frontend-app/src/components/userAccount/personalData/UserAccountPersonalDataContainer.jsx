import React, {useEffect} from 'react';
import UserAccountPersonalData from "./UserAccountPersonalData";
import {connect} from "react-redux";
import {getMyProfile, updateProfile} from "../../../redux/reducers/user-account-reducer";
import {useOidcAccessToken, useOidcIdToken, useOidcUser} from "@axa-fr/react-oidc";

const UserAccountPersonalDataContainer = (props) => {

    useEffect(() => {
        props.getMyProfile()
    }, [])

    return (
        <div>
            <UserAccountPersonalData
                myProfile={props.myProfile}
                updateProfile={props.updateProfile}
                {...props}
            />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfile: state.userAccountPage.myProfile
    }
}


export default connect(mapStateToProps, {updateProfile, getMyProfile})(UserAccountPersonalDataContainer);