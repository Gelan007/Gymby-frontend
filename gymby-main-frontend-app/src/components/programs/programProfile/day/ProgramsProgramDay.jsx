import React from 'react';
import s from "./ProgramsProgramDay.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import Approach from "../../../general/approach/Approach";

const ProgramsProgramDay = ({program, programId, selectedDay}) => {
    return (
        <div className={s.program}>
            <div className={s.program__title}>
                {program?.title}
            </div>
            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel daysCount={program?.days.length} programId={programId}/>
                <div className={s.program__body}>
                    <div className={s.button}>
                        <ButtonOrange>Додати в обране</ButtonOrange>
                    </div>
                    <div className={s.approaches}>
                        <Approach/>
                        <Approach/>
                        <Approach/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramDay;