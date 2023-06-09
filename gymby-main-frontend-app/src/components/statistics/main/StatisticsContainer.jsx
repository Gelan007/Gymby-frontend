import React, {useEffect} from 'react';
import Statistics from "./Statistics";
import {connect} from "react-redux";
import {getAllNumberStatistics, getDoneApproachesByDate, getDoneExercisesByDate} from "../../../redux/slices/statistics-slice";

const StatisticsContainer = (props) => {

    useEffect(() => {
        props.getAllNumberStatistics()
    }, [])

    useEffect(() => {
        const dateNow = new Date()
        const dateMonthAgo = new Date()
        dateNow.setDate(dateNow.getDate() + 31)
        dateMonthAgo.setDate(dateMonthAgo.getDate() - 31)

        props.getDoneApproachesByDate({startDate: dateMonthAgo.toISOString(), endDate:dateNow.toISOString()})
        props.getDoneExercisesByDate({startDate: dateMonthAgo.toISOString(), endDate:dateNow.toISOString()})
    }, [])



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
        doneApproachesByDate: state.statistics.doneApproachesByDate,
        doneExercisesByDate: state.statistics.doneExercisesByDate
    }
}


export default connect(mapStateToProps, {getAllNumberStatistics, getDoneApproachesByDate, getDoneExercisesByDate})(StatisticsContainer);