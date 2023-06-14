import React, {useEffect, useState} from 'react';
import UserAccountCoaching from "./UserAccountCoaching";
import {generateSignature, getData, privateKey, publicKey} from "../../../redux/reducers/subscription";
import UserAccountSubscriptions from "../subscriptions/UserAccountSubscriptions";
import {connect} from "react-redux";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";

const UserAccountCoachingContainer = (props) => {
    const [signature, setSignature] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        setData(getData(props.username))
        generateSignature(getData(props.username)).then(result => {
            setSignature(result)
        })
    }, [props.username])

    useEffect(() => {
        props.getMyProfile()
    }, [])

    return (
        <UserAccountCoaching data={data} signature={signature} isCoach={props.isCoach}/>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.userAccountPage.myProfile.username,
        isCoach: state.userAccountPage.myProfile.isCoach
    }
}

export default connect(mapStateToProps, {getMyProfile})(UserAccountCoachingContainer);