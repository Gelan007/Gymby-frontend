import React, {useEffect, useState} from 'react';
import UserAccountFriendsList from "./UserAccountFriendsList";
import {connect} from "react-redux";
import {getMyFriendsList, getMyPendingFriendsList, acceptFriendship, rejectFriendship,deleteFriendship} from "../../../redux/reducers/user-account-reducer";


const UserAccountFriendsListContainer = (props) => {
    const FRIENDS = 'friends';
    const REQUESTS = 'requests';
    const [selectedOption, setSelectedOption] = useState(FRIENDS);

    useEffect(() => {
        if(selectedOption === FRIENDS) {
            props.getMyFriendsList()
        } else if(selectedOption === REQUESTS) {
            props.getMyPendingFriendsList()
        }
    }, [selectedOption])

    return (
        <UserAccountFriendsList
            profiles={props.profiles} friendsValue={FRIENDS}
            requestsValue={REQUESTS} selectedOption={selectedOption}
            setSelectedOption={setSelectedOption} acceptFriendship={props.acceptFriendship}
            rejectFriendship={props.rejectFriendship} deleteFriendship={props.deleteFriendship}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles
    }
}

export default connect(mapStateToProps,
    {getMyFriendsList, getMyPendingFriendsList, acceptFriendship, rejectFriendship, deleteFriendship})
(UserAccountFriendsListContainer);