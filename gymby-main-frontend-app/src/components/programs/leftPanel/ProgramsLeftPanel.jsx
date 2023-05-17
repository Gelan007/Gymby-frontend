import React from 'react';
import s from "../../measurements/leftPanel/MeasurementsLeftPanel.module.scss";
import ProgramsLeftPanelList from "./ProgramsLeftPanelList";


const ProgramsLeftPanel = () => {
    return (
        <div className={s.leftPanel__container}>
            <div className={s.leftPanelList}>
                <ProgramsLeftPanelList/>
            </div>
        </div>
    );
};

export default ProgramsLeftPanel;