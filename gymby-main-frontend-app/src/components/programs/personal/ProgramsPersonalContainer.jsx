import React, {useEffect} from 'react';
import ProgramsPersonal from "./ProgramsPersonal";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {createProgram, getPersonalPrograms, setPrograms, setIsProgramAccessibleToEdit, deleteProgram} from "../../../redux/slices/program-slice";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";
import {CircularProgress} from "@mui/material";

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
                    <span><CircularProgress /></span>
                    :
                <ProgramsPersonal programs={props.programs} createProgram={props.createProgram}
                                  userName={props.userName} deleteProgram={props.deleteProgram}
                                  getPersonalPrograms={props.getPersonalPrograms} isCoach={props.isCoach}
                />
            }
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs,
        isLoading: state.program.isLoading,
        userName: state.userAccountPage.myProfile.username,
        isRequestCompleted: state.userAccountPage.myProfile.isRequestCompleted,
        isProgramAccessibleToEdit: state.program.isProgramAccessibleToEdit,
        isCoach: state.userAccountPage.myProfile.isCoach

    }
}
export default connect(mapStateToProps, {getPersonalPrograms, setPrograms, createProgram, getMyProfile, deleteProgram})(ProgramsPersonalContainer);