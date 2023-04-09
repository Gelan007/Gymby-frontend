import React from 'react';
import UserAccountPersonalData from "./UserAccountPersonalData";
import {connect} from "react-redux";
import {setUserName} from "../../../redux/reducers/user-account-reducer";

const UserAccountPersonalDataContainer = (props) => {
    return (
        <div>
            <UserAccountPersonalData
                userName={props.userName}
            />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        userName: state.userAccountPage.userName
    }
}


export default connect(mapStateToProps, {setUserName})(UserAccountPersonalDataContainer);