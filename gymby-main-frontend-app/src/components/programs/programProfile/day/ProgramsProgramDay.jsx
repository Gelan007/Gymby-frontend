import React from 'react';
import s from "./ProgramsProgramDay.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import Approach from "../../../general/approach/Approach";
import InputGrey from "../../../UI/inputs/InputGrey";
import ButtonBlue from "../../../UI/buttons/ButtonBlue";

const ProgramsProgramDay = ({program, programId, selectedDay, setSelectedDay, isProgramCreation}) => {
    return (
        <div className={s.program}>
            {isProgramCreation ?
                <div className={s.program__title}>
                    <InputGrey style={{maxWidth: '550px', fontSize: '20px'}}/>
                </div>
                :
                <div className={s.program__title}>
                    {program?.title}
                </div>
            }

            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel daysCount={program?.days.length} programId={programId}
                                          selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                                          isProgramCreation={isProgramCreation}
                />
                <div className={s.program__body}>
                    {isProgramCreation ?
                        <div className={s.button}>
                            <ButtonBlue>Додати вправу</ButtonBlue>
                        </div>
                        :
                        <span></span>
                    }

                    <div className={s.approaches}>
                        <Approach isDrawControlIcons={false} isWeight={false} isMark={false}/>
                        <Approach isDrawControlIcons={false} isWeight={false} isMark={false}/>
                        <Approach isDrawControlIcons={false} isWeight={false} isMark={false}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramDay;