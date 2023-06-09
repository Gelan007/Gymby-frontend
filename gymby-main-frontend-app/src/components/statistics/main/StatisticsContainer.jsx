import React, {useEffect} from 'react';
import Statistics from "./Statistics";
import {connect} from "react-redux";
import {getAllNumberStatistics} from "../../../redux/slices/statistics-slice";

const StatisticsContainer = (props) => {

    useEffect(() => {
        props.getAllNumberStatistics()
    }, [])

    useEffect(() => {
        console.log(props.obj)
    }, [props.obj])

    return (
        <Statistics {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        countOfExecutedExercises: state.statistics.сountOfExecutedExercises,
        countOfTrainings: state.statistics.сountOfTrainings,
        countOfExecutedApproaches: state.statistics.countOfExecutedApproaches,
        maxApproachesCountPerTraining: state.statistics.maxApproachesCountPerTraining,
        maxTonnagePerTraining: state.statistics.maxTonnagePerTraining,
        maxExercisesCountPerTraining: state.statistics.maxExercisesCountPerTraining,
    }
}


export default connect(mapStateToProps, {getAllNumberStatistics})(StatisticsContainer);