import React from 'react';
import s from "./ProgramsProgramLeftPanel.module.scss";
import ProgramsProgramLeftPanelList from "./ProgramsProgramLeftPanelList";


const ProgramsProgramLeftPanel = ({daysCount, programId}) => {
    return (

        <div className={s.leftPanel}>
            <div className={s.leftPanel__container}>
                <div className={s.leftPanelList}>
                    <ProgramsProgramLeftPanelList daysCount={daysCount} programId={programId}/>
                </div>
            </div>
        </div>
    );
};

export default ProgramsProgramLeftPanel;