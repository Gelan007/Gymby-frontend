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
        <div>
            {props.isLoading ?
                <span>Loading...</span>
                :
                <ProgramsTrainerBased programs={props.programs}/>
            }
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        programs: state.program.programs,
        isLoading: state.program.isLoading
    }
}
export default connect(mapStateToProps, {getSharedPrograms, setPrograms})(ProgramsTrainerBasedContainer);