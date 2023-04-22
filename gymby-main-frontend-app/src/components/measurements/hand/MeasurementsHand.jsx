import React, {useState} from 'react';
import MeasurementsLeftPanel from "../leftPanel/MeasurementsLeftPanel";
import s from './MeasurementsHand.module.scss'
import MeasurementsItem from "../item/MeasurementsItem";
import biceps from '../../../assets/images/measurements/biceps.svg';
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import MeasurementsMainItem from "../measurementsMainItem/MeasurementsMainItem";

const MeasurementsHand = () => {
    return (
        <MeasurementsMainItem/>
    );
};

export default MeasurementsHand;