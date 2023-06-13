import React, {useEffect, useState} from 'react';
import UserAccountSubscriptions from "./UserAccountSubscriptions";
import {getData, generateSignature, publicKey, privateKey} from "../../../redux/reducers/subscription";
import {connect} from "react-redux";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";

const UserAccountSubscriptionsContainer = (props) => {
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
    useEffect(() => {
        console.log(publicKey)
        console.log(privateKey)
    }, [publicKey, privateKey])

    return (
        <UserAccountSubscriptions data={data} signature={signature} isCoach={props.isCoach}/>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.userAccountPage.myProfile.username,
        isCoach: state.userAccountPage.myProfile.isCoach
    }
}

export default connect(mapStateToProps, {getMyProfile})(UserAccountSubscriptionsContainer);