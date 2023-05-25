import React from 'react';
import s from "./ProgramsProgramDescription.module.scss";
import ProgramsProgramLeftPanel from "../leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../../assets/images/programs/man.png";
import ProgramsMark from "../../card/programsMark/ProgramsMark";
import ButtonOrange from "../../../UI/buttons/ButtonOrange";
import { useTranslation } from 'react-i18next';

const ProgramsProgramDescription = ({program, programId, selectedDay, setSelectedDay}) => {

    const {t} = useTranslation() 

    return (
        <div className={s.program}>
            <div className={s.program__title}>
                {program?.title}
            </div>
            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel daysCount={program?.days.length} programId={programId} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
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
                                <ProgramsMark text={"набір маси"} isBlackTextColor={true}/>
                                <ProgramsMark text={"ектоморф"} isBlackTextColor={true}/>
                                <ProgramsMark text={"середній"} isBlackTextColor={true}/>
                            </div>
                        </div>
                        <div className={s.mainBlock__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </div>
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