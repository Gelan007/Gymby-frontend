import React from 'react';
import s from "./ProgramsProgramLeftPanel.module.scss";
import ProgramsProgramLeftPanelList from "./ProgramsProgramLeftPanelList";


const ProgramsProgramLeftPanel = ({daysCount, programId, setSelectedDay, selectedDay, isProgramEditing,
                                      createProgramDay, getProgramById, deleteProgramDay, program}) => {
    return (
        <div className={s.leftPanel}>
            <div className={s.leftPanel__container}>
                <div className={s.leftPanelList}>
                    <ProgramsProgramLeftPanelList daysCount={daysCount} programId={programId}
                                                  selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                                                  isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                                  getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                                  program={program}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgramsProgramLeftPanel;