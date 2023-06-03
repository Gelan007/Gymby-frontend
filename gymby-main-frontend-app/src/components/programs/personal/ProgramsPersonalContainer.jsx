import React, {useEffect} from 'react';
import ProgramsPersonal from "./ProgramsPersonal";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {createProgram, getPersonalPrograms, setPrograms} from "../../../redux/slices/program-slice";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";

const ProgramsPersonalContainer = (props) => {

    useEffect(() => {
        props.getMyProfile()
        props.getPersonalPrograms()
        return () => {
            props.setPrograms([])
        }
    }, [])


    return (
        <div>
            {props.isLoading && props.isRequestCompleted ?
                    <span>Loading...</span>
                    :
                <ProgramsPersonal programs={props.programs} createProgram={props.createProgram} userName={props.userName}/>
            }
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs,
        isLoading: state.program.isLoading,
        userName: state.userAccountPage.myProfile.username,
        isRequestCompleted: state.userAccountPage.myProfile.isRequestCompleted
    }
}
export default connect(mapStateToProps, {getPersonalPrograms, setPrograms, createProgram, getMyProfile})(ProgramsPersonalContainer);