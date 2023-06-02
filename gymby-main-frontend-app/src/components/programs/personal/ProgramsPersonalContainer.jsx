import React, {useEffect} from 'react';
import ProgramsPersonal from "./ProgramsPersonal";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {getPersonalPrograms, setPrograms} from "../../../redux/slices/program-slice";

const ProgramsPersonalContainer = (props) => {
    useEffect(() => {
        props.getPersonalPrograms()
        return () => {
            props.setPrograms([])
        }
    }, [])

    return (
        <ProgramsPersonal programs={props.programs}/>
    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs
    }
}
export default connect(mapStateToProps, {getPersonalPrograms, setPrograms})(ProgramsPersonalContainer);