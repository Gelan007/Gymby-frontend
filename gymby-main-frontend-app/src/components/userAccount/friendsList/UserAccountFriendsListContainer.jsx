import React, {useEffect} from 'react';
import UserAccountFriendsList from "./UserAccountFriendsList";
import {connect} from "react-redux";
import {getMyFriendsList} from "../../../redux/reducers/user-account-reducer";

const UserAccountFriendsListContainer = (props) => {
    useEffect(() => {
        props.getMyFriendsList()
    }, [])
    useEffect(() => {
        console.log(props.profiles)
    }, [props.profiles])

    return (
        <UserAccountFriendsList profiles={props.profiles}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles
    }
}

export default connect(mapStateToProps, {getMyFriendsList})(UserAccountFriendsListContainer);