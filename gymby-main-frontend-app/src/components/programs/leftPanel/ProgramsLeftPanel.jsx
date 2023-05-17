import React from 'react';
import s from "./ProgramsLeftPanel.module.scss";
import ProgramsLeftPanelList from "./ProgramsLeftPanelList";


const ProgramsLeftPanel = () => {
    return (
        <div className={s.leftPanel}>
            <div className={s.leftPanel__container}>
                <div className={s.leftPanelList}>
                    <ProgramsLeftPanelList/>
                </div>
            </div>
        </div>
    );
};

export default ProgramsLeftPanel;