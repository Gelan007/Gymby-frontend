import React from 'react';
import UserAccountFriendsList from "./UserAccountFriendsList";
import {connect} from "react-redux";

const UserAccountFriendsListContainer = (props) => {
    return (
        <UserAccountFriendsList profiles={props.profiles}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles
    }
}

export default connect(mapStateToProps, {})(UserAccountFriendsListContainer);