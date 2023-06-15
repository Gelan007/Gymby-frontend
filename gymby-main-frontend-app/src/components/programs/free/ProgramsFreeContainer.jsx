import React, {useEffect} from 'react';
import ProgramsFree from "./ProgramsFree";
import {connect} from "react-redux";
import {getFreePrograms, setPrograms} from "../../../redux/slices/program-slice";
import {CircularProgress} from "@mui/material";

const ProgramsFreeContainer = (props) => {
    useEffect(() => {
        props.getFreePrograms()
        return () => {
            props.setPrograms([])
        }
    }, [])

    return (
        <div>
            {props.isLoading ?
                <span><CircularProgress /></span>
                :
                <ProgramsFree programs={props.programs}/>
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
export default connect(mapStateToProps, {getFreePrograms, setPrograms})(ProgramsFreeContainer);