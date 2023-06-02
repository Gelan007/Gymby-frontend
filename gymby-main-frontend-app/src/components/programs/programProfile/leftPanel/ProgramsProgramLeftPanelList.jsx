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

const ProgramsProgramLeftPanelList = ({daysCount, programId, selectedDay, setSelectedDay, isProgramCreation}) => {
    
    const {t} = useTranslation()
    const days = Array.from({ length: daysCount }, (_, index) => index + 1);

    return (
        <div className={s.navigation}>
            {isProgramCreation ?
                <div className={s.navigation__title}>
                    <h5 className={s.title}>{t("programs.programDescription.leftPanel.title")}</h5>
                    <div className={s.navigation__title__image}><img src={plusIcon} alt="add"/></div>
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
                    {days?.map((day) => (
                        <li className={s.item}>
                            <div className={s.icon}><img src={dumbbellIcon} alt="dumbbellIcon"/></div>
                            <div className={selectedDay === day ? s.active : s.text}
                                 onClick={() => setSelectedDay(day)}
                                 style={{cursor: "pointer"}}
                            >
                                    {t("programs.programDescription.leftPanel.day")} {day}
                            </div>
                            {isProgramCreation ?
                                <div className={s.basketIcon}><img src={deleteIcon} alt="deleteIcon"/></div>
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