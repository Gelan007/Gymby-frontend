import React, {useEffect} from 'react';
import ProgramsFree from "./ProgramsFree";
import {connect} from "react-redux";
import {getFreePrograms, setPrograms} from "../../../redux/slices/program-slice";

const ProgramsFreeContainer = (props) => {
    useEffect(() => {
        props.getFreePrograms()
        return () => {
            props.setPrograms([])
        }
    }, [])

    return (
        <ProgramsFree programs={props.programs}/>
    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs
    }
}
export default connect(mapStateToProps, {getFreePrograms, setPrograms})(ProgramsFreeContainer);