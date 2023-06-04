import React, {useEffect, useState} from 'react';
import UserAccountSearch from "./UserAccountSearch";
import {connect} from "react-redux";
import {getMyFriendsList, getMyPendingFriendsList, getQueryProfile} from "../../../redux/reducers/user-account-reducer";

const UserAccountSearchContainer = (props) => {

    const TRAINERS = 'trainers';
    const EVERYBODY = 'everybody';
    const [selectedOption, setSelectedOption] = useState(TRAINERS);
    const [userSearchData, setUserSearchData] = useState();

    useEffect(() => {
        if(selectedOption === TRAINERS) {
            props.getQueryProfile('trainers')
        } else if(selectedOption === EVERYBODY) {
            props.getQueryProfile()
        }
    }, [selectedOption])

    const handleUserSearch = (e) => {
        setUserSearchData(e.target.value)
        if(selectedOption === TRAINERS) {
            props.getQueryProfile('trainers', e.target.value)
        } else if(selectedOption === EVERYBODY) {
            props.getQueryProfile(null, e.target.value)
        }
    }


    return (
        <UserAccountSearch profiles={props.profiles} trainersValue={TRAINERS}
                           everybodyValue={EVERYBODY} selectedOption={selectedOption}
                           setSelectedOption={setSelectedOption} userSearchData={userSearchData}
                           handleUserSearch={handleUserSearch}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profiles: state.userAccountPage.profiles
    }
}

export default connect(mapStateToProps, {getMyFriendsList, getMyPendingFriendsList, getQueryProfile})(UserAccountSearchContainer);