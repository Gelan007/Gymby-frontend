import React from 'react';
import s from "./ProgramsProgramDescription.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../../assets/images/programs/man.png";
import ProgramsMark from "../../card/programsMark/ProgramsMark";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import { useTranslation } from 'react-i18next';
import InputGrey from "../../../UI/inputs/InputGrey";
import TextareaGrey from "../../../UI/textareas/TextareaGrey";
import ButtonGreen from "../../../UI/buttons/ButtonGreen";

const ProgramsProgramDescription = ({program, programId, selectedDay, setSelectedDay, isProgramCreation}) => {

    const {t} = useTranslation()

    return (
        <div className={s.program}>
            {isProgramCreation ?
                <div className={s.program__titleEdit}>
                    <InputGrey style={{maxWidth: '550px', fontSize: '20px'}}/>
                    <div><ButtonGreen>Завершити редагування</ButtonGreen></div>
                </div>
                :
                <div className={s.program__title}>
                    {program?.name}
                </div>
            }

            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel
                    daysCount={program?.programDays.length} programId={programId}
                    selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                    isProgramCreation={isProgramCreation}
                />
                <div className={s.program__body}>
                    <div className={s.photoBlock}>
                        <div className={s.photoBlock__photo}>
                            <img src={defaultProgramPhoto} alt="programPhoto"/>
                        </div>
                        <div className={s.photoBlock__description}>{t("programs.programDescription.programAuthor")}: <span>@Gymby_team</span></div>
                    </div>
                    <div className={s.mainBlock}>
                        <div className={s.mainBlock__titleBlock}>
                            <div className={s.mainBlock__title}>
                            {t("programs.programDescription.subTitle")}
                            </div>
                            <div className={s.mainBlock__marks}>
                                {program.marks?.map((mark, key) => (
                                    <ProgramsMark text={mark} key={key} isBlackTextColor={true}/>
                                ))}
                               {/* <ProgramsMark text={"набір маси"} isBlackTextColor={true}/>
                                <ProgramsMark text={"ектоморф"} isBlackTextColor={true}/>
                                <ProgramsMark text={"середній"} isBlackTextColor={true}/>*/}
                            </div>
                        </div>
                        {isProgramCreation ?
                            <div className={s.mainBlock__description} style={{maxWidth: '700px'}}>
                                <TextareaGrey/>
                            </div>
                            :
                            <div className={s.mainBlock__description}>
                                {program.description}
                            </div>
                        }

                        <div className={s.mainBlock__button}>
                            <ButtonOrange>{t("programs.programDescription.addToFavorite")}</ButtonOrange>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramDescription;