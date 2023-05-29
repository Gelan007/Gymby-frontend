import React from 'react';
import UserAccountPersonalData from "./UserAccountPersonalData";
import {connect} from "react-redux";
import {setFirstName, setUserName} from "../../../redux/reducers/user-account-reducer";

const UserAccountPersonalDataContainer = (props) => {
    return (
        <div>
            <UserAccountPersonalData
                myProfile={props.myProfile}
                {...props}
            />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfile: state.userAccountPage.myProfile
    }
}


export default connect(mapStateToProps, {setFirstName})(UserAccountPersonalDataContainer);