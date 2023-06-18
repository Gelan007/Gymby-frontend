import React, {useEffect, useState} from 'react';
import s from "./ProgramsProgramDay.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import Approach from "../../../general/approach/Approach";
import InputGrey from "../../../UI/inputs/InputGrey";
import ButtonBlue from "../../../UI/buttons/ButtonBlue";
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import ExerciseCreationModalProgramsList
    from "../../../general/exerciseCreationModalWindow/programsList/ExerciseCreationModalProgramsList";
import {useTranslation} from "react-i18next";

const ProgramsProgramDay = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                setIsProgramEditing, isProgramAccessibleToEdit, getProgramById, deleteProgramDay,
                                updateProgramDay, createExercise, getAllExercisesPrototype, exercisesPrototype,
                                exerciseCreationData, setExerciseCreationData,createProgramDay, createApproach,
                                deleteApproach, updateApproach, deleteExercise, inputUserData, setInputUserData, titleChangeHandler, updateProgram }) => {

    const handleStartEditing = () => setIsProgramEditing(true)
    const handleEndEditing = () => {
        setIsProgramEditing(false)
    }
    const [isModalActive, setIsModalActive] = useState(false);
    const programImportHandler = () => isModalActive ? setIsModalActive(false) : setIsModalActive(true)
    const {t} = useTranslation()

    const updateProgramInputHandler = () => {
        updateProgram({programId, name: inputUserData.name, description:inputUserData.description, level:inputUserData.level, type:inputUserData.type})
    }

    useEffect(() => {
        program.programDays?.map((day, index) => {
            if(index === selectedDay - 1) {
                setExerciseCreationData({programId, programDayId: day.programDayId})
            }
        }, [])
    }, [selectedDay, programId])


    useEffect(() => {
        setInputUserData({...inputUserData, name: program.name, description: program.description, level: program.level, type: program.type})
    }, [program])



    return (
        <div className={s.program}>
            {isProgramAccessibleToEdit && (
                    isProgramEditing ?
                        <div className={s.program__titleEdit}>
                            <InputGrey style={{maxWidth: '550px', fontSize: '20px'}} value={inputUserData.name}
                                       onChange={titleChangeHandler}
                                       onBlur={updateProgramInputHandler}
                            />
                            <div><ButtonGreen onClick={() => handleEndEditing()}>{t("programs.programDescription.stopEditing")}</ButtonGreen></div>
                        </div>
                        :
                        <div className={s.program__titleEdit_default}>
                            <div className={s.program__title}>
                                {program?.name}
                            </div>
                            <div><ButtonGreen onClick={() => handleStartEditing()}>{t("programs.programDescription.edit")}</ButtonGreen></div>
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
                                          program={program} updateProgramDay={updateProgramDay}
                />
                <div className={s.program__body}>
                    {isProgramEditing ?
                        <div className={s.button}>
                            <ButtonBlue onClick={programImportHandler}>Додати вправу</ButtonBlue>
                        </div>
                        :
                        <span></span>
                    }

                    <div className={s.approaches}>

                        {program.programDays?.map((programDay, index) => {
                             if(index === selectedDay - 1) {
                                 return programDay.exercises?.map((exercise, i) => {
                                    return (
                                        isProgramEditing ?
                                            <Approach key={programDay.programDayId} isDrawControlIcons={true}
                                                      isWeight={false} isMark={false}
                                                      exercise={exercise} exerciseName={exercise.name}
                                                      exerciseId={exercise.exerciseId} createApproach={createApproach}
                                                      programId={programId} deleteApproach={deleteApproach} updateApproach={updateApproach}
                                                      deleteExercise={deleteExercise}
                                            />
                                            :
                                            <Approach key={programDay.programDayId} isDrawControlIcons={false}
                                                      isWeight={false} isMark={false}
                                                      exercise={exercise} exerciseName={exercise.name}
                                                      exerciseId={exercise.exerciseId} createApproach={createApproach}
                                                      programId={programId} deleteApproach={deleteApproach} updateApproach={updateApproach}
                                                      deleteExercise={deleteExercise}
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
            <ExerciseCreationModalProgramsList isActive={isModalActive} setActive={setIsModalActive}
                                               buttonName={t("diary.buttons.addModal")} createExercise={createExercise}
                                               getAllExercisesPrototype={getAllExercisesPrototype} exercisesPrototype={exercisesPrototype}
                                               exerciseCreationData={exerciseCreationData} setExerciseCreationData={setExerciseCreationData}
            />

        </div>
    );
};

export default ProgramsProgramDay;