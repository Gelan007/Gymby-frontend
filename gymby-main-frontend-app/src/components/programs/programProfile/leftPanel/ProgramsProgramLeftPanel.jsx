import React from 'react';
import s from "./ProgramsProgramLeftPanel.module.scss";
import ProgramsProgramLeftPanelList from "./ProgramsProgramLeftPanelList";


const ProgramsProgramLeftPanel = ({daysCount, programId, setSelectedDay, selectedDay}) => {
    return (

        <div className={s.leftPanel}>
            <div className={s.leftPanel__container}>
                <div className={s.leftPanelList}>
                    <ProgramsProgramLeftPanelList daysCount={daysCount} programId={programId} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                </div>
            </div>
        </div>
    );
};

export default ProgramsProgramLeftPanel;