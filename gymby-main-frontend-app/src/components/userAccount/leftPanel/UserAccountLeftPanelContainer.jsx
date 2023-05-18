import React from 'react';
import UserAccountLeftPanel from "./UserAccountLeftPanel";
import {useOidc} from "@axa-fr/react-oidc";

const UserAccountLeftPanelContainer = (props) => {
    const { logout } = useOidc();

    return (
        <UserAccountLeftPanel logout={logout} {...props}/>
    );
};

export default UserAccountLeftPanelContainer;