import React, {useEffect, useState} from 'react';
import s from "./ProgramsProgramDescription.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../../assets/images/programs/man.png";
import ProgramsMark from "../../card/programsMark/ProgramsMark";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import { useTranslation } from 'react-i18next';
import InputGrey from "../../../UI/inputs/InputGrey";
import TextareaGrey from "../../../UI/textareas/TextareaGrey";
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import SelectSimple from "../../../UI/select/SelectSimple";


const ProgramsProgramDescription = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                        isProgramAccessibleToEdit, setIsProgramEditing, createProgramDay, getProgramById,
                                        deleteProgramDay, updateProgramDay, updateProgram, inputUserData,
                                        setInputUserData, titleChangeHandler}) => {

    const {t} = useTranslation()

    const handleStartEditing = () => setIsProgramEditing(true)
    const handleEndEditing = () => {
        setIsProgramEditing(false)
    }
    const programLevelMap = {
        Beginner: t("programs.marks.beginner"),
        Advanced: t("programs.marks.advanced"),
        Intermediate: t("programs.marks.intermediate")
    };
    const programTypeMap = {
        WeightGain: t("programs.marks.weightGain"),
        Endurance: t("programs.marks.endurance"),
        WeightLoss: t("programs.marks.weightLoss"),
    };

    useEffect(() => {
        setInputUserData({...inputUserData, name: program.name, description: program.description, level: program.level, type: program.type})
    }, [program])


    const descriptionChangeHandler = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setInputUserData({...inputUserData, description: inputValue});
        }
    }

    const updateProgramInputHandler = () => {
        updateProgram({programId, name: inputUserData.name, description:inputUserData.description, level:inputUserData.level, type:inputUserData.type})
    }
    const updateProgramSelectHandler = (level, type) => {
        if(level) {
            setInputUserData({...inputUserData, level})
            updateProgram({programId, name: inputUserData.name, description: inputUserData.description, level, type: inputUserData.type})
        } else if(type) {
            setInputUserData({...inputUserData, type})
            updateProgram({programId, name: inputUserData.name, description: inputUserData.description, level: inputUserData.level, type})
        }

    }


    return (
        <div className={s.program}>
            {isProgramAccessibleToEdit && (
            isProgramEditing ?
                <div className={s.program__titleEdit}>
                    <InputGrey style={{maxWidth: '550px', fontSize: '20px'}} value={inputUserData.name}
                               onChange={titleChangeHandler}
                               onBlur={updateProgramInputHandler}
                    />
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
                <ProgramsProgramLeftPanel
                    daysCount={program?.programDays.length} programId={programId}
                    selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                    isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                    getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                    program={program} updateProgramDay={updateProgramDay}
                />
                <div className={s.program__body}>
                    <div className={s.photoBlock}>
                        <div className={s.photoBlock__photo}>
                            <img src={defaultProgramPhoto} alt="programPhoto"/>
                        </div>
                        <div className={s.photoBlock__description}>
                            {t("programs.programDescription.programAuthor")}: <span>@Gymby_team</span>
                        </div>
                    </div>
                    <div className={s.mainBlock}>
                        <div className={s.mainBlock__titleBlock}>
                            <div className={s.mainBlock__title}>
                            {t("programs.programDescription.subTitle")}
                            </div>
                            {isProgramEditing ?
                                <div>
                                    <SelectSimple  value={inputUserData.level}
                                                   onChange={(value) => updateProgramSelectHandler(value, false)}
                                                   defaultName={`${t("programs.programDescription.selectOptions.difficult")}`}
                                                   options={[
                                                       {value: 'Beginner', name: programLevelMap.Beginner},
                                                       {value: 'Advanced', name: programLevelMap.Advanced},
                                                       {value: 'Intermediate', name: programLevelMap.Intermediate }
                                                   ]}
                                                   fontSize={14}
                                                   fontSizeParams={14}
                                    />
                                    <SelectSimple  value={inputUserData.type}
                                                   onChange={(value) => updateProgramSelectHandler(false, value)}
                                                   defaultName={`${t("programs.programDescription.selectOptions.type")}`}
                                                   options={[
                                                       {value: 'WeightGain', name: programTypeMap.WeightGain},
                                                       {value: 'Endurance', name: programTypeMap.Endurance},
                                                       {value: 'WeightLoss', name: programTypeMap.WeightLoss}
                                                   ]}
                                                   fontSize={14}
                                                   fontSizeParams={14}
                                    />
                                </div>

                                :
                                <div className={s.mainBlock__marks}>
                                    {program.marks?.map((mark, key) => (
                                        <ProgramsMark text={mark} key={key} isBlackTextColor={true}/>
                                    ))}
                                </div>
                            }

                        </div>
                        {isProgramEditing ?
                            <div className={s.mainBlock__description} style={{maxWidth: '700px'}}>
                                <TextareaGrey onChange={descriptionChangeHandler}
                                              onBlur={updateProgramInputHandler}
                                              value={inputUserData.description}
                                />
                            </div>
                            :
                            <div className={s.mainBlock__description}>
                                {program.description}
                            </div>
                        }

                        <div className={s.mainBlock__button}>
                            {/*<ButtonOrange>{t("programs.programDescription.addToFavorite")}</ButtonOrange>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramDescription;