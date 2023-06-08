import React, {useEffect, useState} from 'react';
import UserAccountSubscriptions from "./UserAccountSubscriptions";
import {data, generateSignature} from "../../../redux/reducers/subscription";

const UserAccountSubscriptionsContainer = () => {
    const [signature, setSignature] = useState()
    useEffect(() => {
        generateSignature(data).then(result => {
            setSignature(result)
        })
    }, [])

    return (
        <UserAccountSubscriptions data={data} signature={signature}/>
    );
};

export default UserAccountSubscriptionsContainer;