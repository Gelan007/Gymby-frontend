import React, {useEffect} from 'react';
import s from "./ProgramsProgramDay.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import Approach from "../../../general/approach/Approach";
import InputGrey from "../../../UI/inputs/InputGrey";
import ButtonBlue from "../../../UI/buttons/ButtonBlue";
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import {createProgramDay} from "../../../../redux/slices/program-slice";

const ProgramsProgramDay = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                setIsProgramEditing, isProgramAccessibleToEdit, getProgramById, deleteProgramDay}) => {

    const handleStartEditing = () => setIsProgramEditing(true)
    const handleEndEditing = () => {
        setIsProgramEditing(false)
    }

    return (
        <div className={s.program}>
            {isProgramAccessibleToEdit && (
                    isProgramEditing ?
                        <div className={s.program__titleEdit}>
                            <InputGrey style={{maxWidth: '550px', fontSize: '20px'}}/>
                            <div><ButtonGreen onClick={() => handleEndEditing()}>Завершити редагування</ButtonGreen></div>
                        </div>
                        :
                        <div className={s.program__titleEdit_default}>
                            <div className={s.program__title}>
                                {program?.name}
                            </div>
                            <div><ButtonGreen onClick={() => handleStartEditing()}>Редагувати</ButtonGreen></div>
                        </div>
                ) ||
                <div className={s.program__title}>
                    {program?.name}
                </div>
            }

            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel daysCount={program?.programDays.length} programId={programId}
                                          selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                                          isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                          getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                          program={program}
                />
                <div className={s.program__body}>
                    {isProgramEditing ?
                        <div className={s.button}>
                            <ButtonBlue>Додати вправу</ButtonBlue>
                        </div>
                        :
                        <span></span>
                    }

                    <div className={s.approaches}>
                        {program.programDays?.map((programDay, index) => {
                             if(index === selectedDay - 1) {
                                 return programDay.exercises?.map((exercise, i) => {
                                    return (
                                        <Approach  key={programDay.programDayId} isDrawControlIcons={false}
                                                       isWeight={false} isMark={false}
                                                       exercise={exercise} exerciseName={programDay.name}
                                                       exerciseId={programDay.programDayId}
                                        />

                                    )

                                })
                            }
                            return null;
                        })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramDay;