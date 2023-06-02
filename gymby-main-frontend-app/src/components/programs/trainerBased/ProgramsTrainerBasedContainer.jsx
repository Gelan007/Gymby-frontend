import React, {useEffect} from 'react';
import ProgramsTrainerBased from "./ProgramsTrainerBased";
import ProgramsFree from "../free/ProgramsFree";
import {connect} from "react-redux";
import {getSharedPrograms, setPrograms} from "../../../redux/slices/program-slice";

const ProgramsTrainerBasedContainer = (props) => {
    useEffect(() => {
        props.getSharedPrograms()
        return () => {
            props.setPrograms([])
        }
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
export default connect(mapStateToProps, {getSharedPrograms, setPrograms})(ProgramsTrainerBasedContainer);