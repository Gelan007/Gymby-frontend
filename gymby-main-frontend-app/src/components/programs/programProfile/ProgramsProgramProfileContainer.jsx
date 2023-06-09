import React, {useEffect} from 'react';
import ProgramsProgramProfile from "./ProgramsProgramProfile";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {
    getProgramById,
    setSelectedDay,
    setIsProgramEditing,
    createProgramDay,
    getPersonalPrograms,
    setIsProgramAccessibleToEdit,
    deleteProgramDay,
    updateProgramDay,
    setProgramWithEmptyValues,
    createExercise,
    getAllExercisesPrototype,
    setExerciseCreationData, createApproach, deleteApproach, updateApproach, deleteExercise, updateProgram
}
    from '../../../redux/slices/program-slice'
import NotFound from "../../notFound/NotFound";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";
import {urlPathForProgramCreation} from "../../../utils/routes/consts";
import {CircularProgress} from "@mui/material";

const ProgramsProgramProfileContainer = (props) => {
    const {programId} = useParams()

    useEffect(() => {
        props.getMyProfile()
        props.getPersonalPrograms()
    }, [])

    useEffect(() => {
        props.getProgramById({programId})
    }, [])

    useEffect(() => {
        return () => {
            props.setIsProgramEditing(false)
            props.setIsProgramAccessibleToEdit(false)
        }
    }, [])

    useEffect(() => {
        if(props.isLoading) {
            props.programs?.forEach(program => {
                if (program.programId === programId) {
                    props.setIsProgramAccessibleToEdit(true)
                }
            })
        }
    }, [props.isLoading])





    const checkIfEditProgram = props.myProfile.isCoach && '/' + programId === urlPathForProgramCreation
    const checkIfProgramViewing = programId && '/' + programId !== urlPathForProgramCreation


    return (
        <div>
            {
                props.myProfile.isRequestCompleted ? (
                            checkIfProgramViewing ?
                        <ProgramsProgramProfile program={props.program} programId={programId}
                                                selectedDay={props.selectedDay} setSelectedDay={props.setSelectedDay}
                                                isProgramEditing={props.isProgramEditing} createProgramDay={props.createProgramDay}
                                                setIsProgramEditing={props.setIsProgramEditing}
                                                isProgramAccessibleToEdit={props.isProgramAccessibleToEdit} getProgramById={props.getProgramById}
                                                deleteProgramDay={props.deleteProgramDay} updateProgramDay={props.updateProgramDay}
                                                createExercise={props.createExercise} getAllExercisesPrototype={props.getAllExercisesPrototype}
                                                exercisesPrototype={props.exercisesPrototype}
                                                setExerciseCreationData={props.setExerciseCreationData} exerciseCreationData={props.exerciseCreationData}
                                                {...props}
                        />
                        :
                    <NotFound/>
                ) :
                    <div><CircularProgress /></div>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        selectedDay: state.program.selectedDay,
        program: state.program.program,
        myProfile: state.userAccountPage.myProfile,
        isProgramEditing: state.program.isProgramEditing,
        isProgramAccessibleToEdit: state.program.isProgramAccessibleToEdit,
        programs: state.program.programs,
        isLoading: state.program.isLoading,
        isProgramLoading: state.program.program.isLoading,
        exercisesPrototype: state.program.exercisesPrototype,
        exerciseCreationData: state.program.exerciseCreationData
    }
}

export default connect(mapStateToProps,
    {setSelectedDay, getProgramById, getMyProfile, setIsProgramEditing, createProgramDay,
        getPersonalPrograms, setIsProgramAccessibleToEdit, deleteProgramDay, updateProgramDay, setProgramWithEmptyValues,
        createExercise, getAllExercisesPrototype, setExerciseCreationData, createApproach, deleteApproach, updateApproach,
        deleteExercise, updateProgram})
(ProgramsProgramProfileContainer);