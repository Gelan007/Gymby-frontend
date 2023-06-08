import React, {useEffect, useState} from 'react';
import UserAccountSubscriptions from "./UserAccountSubscriptions";
import {getData, generateSignature} from "../../../redux/reducers/subscription";
import {connect} from "react-redux";

const UserAccountSubscriptionsContainer = (props) => {
    const [signature, setSignature] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        setData(getData(props.username))
        generateSignature(getData(props.username)).then(result => {
            setSignature(result)
        })
    }, [props.username])

   /* useEffect(() => {

    }, [])*/

    return (
        <UserAccountSubscriptions data={data} signature={signature}/>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.userAccountPage.myProfile.username
    }
}

export default connect(mapStateToProps, {})(UserAccountSubscriptionsContainer);