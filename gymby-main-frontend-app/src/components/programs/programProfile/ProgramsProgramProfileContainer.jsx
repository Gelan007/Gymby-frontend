import React, {useEffect} from 'react';
import ProgramsProgramProfile from "./ProgramsProgramProfile";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProgramById, setSelectedDay} from '../../../redux/slices/program-slice'
import NotFound from "../../notFound/NotFound";
import {getMyProfile} from "../../../redux/reducers/user-account-reducer";
import {urlPathForProgramCreation} from "../../../utils/routes/consts";

const ProgramsProgramProfileContainer = (props) => {
    const {programId} = useParams()

    useEffect(() => {
        props.getMyProfile()
    }, [])

    useEffect(() => {
        /*if('/' + programId !== urlPathForProgramCreation) {*/
            props.getProgramById({programId})
        /*}*/
    }, [])


    useEffect(() => {
        console.log(props.program?.programDays.length)
    }, [])

    const checkIfEditProgram = props.myProfile.isCoach && '/' + programId === urlPathForProgramCreation
    const checkIfProgramViewing = programId && '/' + programId !== urlPathForProgramCreation






    /*в этой компоненте запрос, записать в стор, и через пропсы прокинуть
    * презентационной компоненте ProgramsProgramProfile, а презентационная
    * в свою очередь прокинет уже в свой leftPanel для отрисовки дней и тд*/

    /*ЗАГЛУШКА ДЛЯ ТЕСТА! ПОТОМ НА СТОР ЗАМЕНИТЬ*/
    /*Не забыть selectedDay в store записать вместо leftPanelList, и тут его через пропсы передавать потом в ProgramsProgramProfile*/
    const programProfilePlug = {
        id: 11,
        title: '4-недільна програма на масу від Івана',
        marks: ['ектоморф', 'набір маси', 'середній'],
        days: [
            {approachTitle: "Жим штанги лежачи", weight: 40, repeats: 10},
            {approachTitle: "Присідання зі штангою", weight: 20, repeats: 25},
            {approachTitle: "Звичайні присідання", weight: 0, repeats: 50},
            {approachTitle: "Жим гантель ", weight: 25, repeats: 15},
        ]
    }


    return (
        <div>
            {
                props.myProfile.isRequestCompleted ? (

                        checkIfEditProgram ?
                    <ProgramsProgramProfile program={props.program} programId={programId}
                                            selectedDay={props.selectedDay} setSelectedDay={props.setSelectedDay}
                                            isProgramCreation={true}
                    />
                    :
                            checkIfProgramViewing ?
                        <ProgramsProgramProfile program={props.program} programId={programId}
                                                        selectedDay={props.selectedDay} setSelectedDay={props.setSelectedDay}
                                                        isProgramCreation={false}
                        />
                        :
                    <NotFound/>
                ) :
                    <div>Loading</div>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        selectedDay: state.program.selectedDay,
        program: state.program.program,
        myProfile: state.userAccountPage.myProfile
    }
}

export default connect(mapStateToProps, {setSelectedDay, getProgramById, getMyProfile})(ProgramsProgramProfileContainer);