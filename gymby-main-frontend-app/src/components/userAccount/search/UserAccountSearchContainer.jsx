import React from 'react';
import UserAccountSearch from "./UserAccountSearch";
import {connect} from "react-redux";

const UserAccountSearchContainer = (props) => {
    return (
        <UserAccountSearch profiles={props.profiles}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles
    }
}

export default connect(mapStateToProps, {})(UserAccountSearchContainer);