import React, {useEffect} from 'react';
import UserAccountPersonalDataContainer
    from "../../components/userAccount/personalData/UserAccountPersonalDataContainer";
import {useNavigate } from "react-router-dom";
import {USER_ACCOUNT_PERSONAL_DATA_ROUTE} from "../../utils/routes/consts";


const UserAccountPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(USER_ACCOUNT_PERSONAL_DATA_ROUTE)
    }, [])

    return (
        <UserAccountPersonalDataContainer/>
    );
};

export default UserAccountPage;