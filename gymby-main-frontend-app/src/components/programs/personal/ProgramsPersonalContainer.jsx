import React, {useEffect} from 'react';
import ProgramsPersonal from "./ProgramsPersonal";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {getPersonalPrograms} from "../../../redux/slices/program-slice";

const ProgramsPersonalContainer = (props) => {
    useEffect(() => {
        props.getPersonalPrograms()
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
export default connect(mapStateToProps, {getPersonalPrograms})(ProgramsPersonalContainer);