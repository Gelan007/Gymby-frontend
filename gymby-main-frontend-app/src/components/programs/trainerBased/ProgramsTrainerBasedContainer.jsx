import React, {useEffect} from 'react';
import ProgramsTrainerBased from "./ProgramsTrainerBased";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {getSharedPrograms} from "../../../redux/slices/program-slice";

const ProgramsTrainerBasedContainer = (props) => {
    useEffect(() => {
        props.getSharedPrograms()
    }, [])

    return (
        <ProgramsTrainerBased programs={props.programs}/>
    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs
    }
}
export default connect(mapStateToProps, {getSharedPrograms})(ProgramsTrainerBasedContainer);