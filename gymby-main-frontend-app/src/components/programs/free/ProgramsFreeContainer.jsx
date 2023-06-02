import React, {useEffect} from 'react';
import ProgramsFree from "./ProgramsFree";
import {connect} from "react-redux";
import {getFreePrograms} from "../../../redux/slices/program-slice";

const ProgramsFreeContainer = (props) => {
    useEffect(() => {
        props.getFreePrograms()
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
export default connect(mapStateToProps, {getFreePrograms})(ProgramsFreeContainer);