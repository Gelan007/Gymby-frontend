import React from 'react';
import UserAccountProfile from "./UserAccountProfile";
import {connect} from "react-redux";

const UserAccountProfileContainer = (props) => {
    return (
        <UserAccountProfile myProfile={props.myProfile} {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        myProfile: state.userAccountPage.myProfile
    }
}

export default connect(mapStateToProps, {}) (UserAccountProfileContainer);