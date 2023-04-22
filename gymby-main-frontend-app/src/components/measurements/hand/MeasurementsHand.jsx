import React from 'react';
import MeasurementsLeftPanel from "../leftPanel/MeasurementsLeftPanel";
import s from './MeasurementsHand.module.scss'

const MeasurementsHand = () => {
    return (
        <div className={s.measurementsHand}>
            <MeasurementsLeftPanel/>
            <div className={s.measurementsHand__body}>

            </div>
        </div>
    );
};

export default MeasurementsHand;