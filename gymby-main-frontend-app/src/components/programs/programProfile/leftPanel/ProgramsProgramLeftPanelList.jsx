import React, {useEffect, useState} from 'react';
import s from "./ProgramsProgramLeftPanelList.module.scss";
import {NavLink} from "react-router-dom";
import dumbbellIcon from '../../../../assets/images/programs/dumbbell.svg'
import spellIcon from '../../../../assets/images/programs/spell.svg'
import plusIcon from '../../../../assets/images/general/icons/plus.svg'
import deleteIcon from '../../../../assets/images/general/icons/basketWhiteBackground2.svg'

import {
    PROGRAMS_FAVORITES_ROUTE,
    PROGRAMS_FREE_ROUTE, PROGRAMS_PERSONAL_ROUTE, PROGRAMS_PROGRAM_PROFILE_ROUTE, PROGRAMS_ROUTE,
    PROGRAMS_TRAINER_BASED_ROUTE
} from "../../../../utils/routes/consts";
import {useTranslation} from "react-i18next";
import InputGrey from "../../../UI/inputs/InputGrey";

const ProgramsProgramLeftPanelList = ({daysCount, programId, selectedDay, setSelectedDay, isProgramEditing,
                                          createProgramDay, getProgramById, deleteProgramDay, program}) => {
    
    const {t} = useTranslation()
    const [dayName, setDayName] = useState()
    /*let days = Array.from({ length: daysCount }, (_, index) => index + 1);
    useEffect(() => {
        days = Array.from({ length: daysCount }, (_, index) => index + 1);
    }, [daysCount])*/


    const handleCreateProgramDay = () => {
        createProgramDay({programId, name: `${t("programs.programDescription.leftPanel.day")} ${daysCount + 1}`}).then(() => {
            getProgramById({programId})
        })

    }
    const handleDeleteProgramDay = (day) => {
        program.programDays?.forEach((programDay, index) => {
            if(index === day)
                deleteProgramDay({programDayId: programDay.programDayId, programId}).then(() => {
                    getProgramById({programId})
                })
                return
        })
    }

    return (
        <div className={s.navigation}>
            {isProgramEditing ?
                <div className={s.navigation__title}>
                    <h5 className={s.title}>{t("programs.programDescription.leftPanel.title")}</h5>
                    <div className={s.navigation__title__image}
                         onClick={() => handleCreateProgramDay()}
                    >
                        <img src={plusIcon} alt="add"/>
                    </div>
                </div>
                :
                <h5 className={s.title}>{t("programs.programDescription.leftPanel.title")}</h5>
            }

            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={spellIcon} alt="spellIcon"/></div>
                        <div className={selectedDay === 0 ? s.active : s.text}
                             style={{cursor: "pointer"}}
                             onClick={() => setSelectedDay(0)}
                        >
                            {t("programs.programDescription.leftPanel.description")}
                        </div>
                    </li>
                    {program.programDays?.map((day, index) => (
                        <li className={s.item} key={index}>
                            <div className={s.icon}><img src={dumbbellIcon} alt="dumbbellIcon"/></div>

                                <div className={selectedDay === index + 1 ? s.active : s.text}
                                     onClick={() => setSelectedDay(index + 1)}
                                     style={{cursor: "pointer"}}
                                >
                                    {day.name}
                                </div>

                            {isProgramEditing ?
                                <div className={s.basketIcon} onClick={() => handleDeleteProgramDay(index)}><img src={deleteIcon} alt="deleteIcon"/></div>
                                :
                                <span></span>
                            }

                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ProgramsProgramLeftPanelList;