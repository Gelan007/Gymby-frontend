import React from 'react';
import s from "./ProgramsLeftPanelList.module.scss";
import {NavLink} from "react-router-dom";
import userIcon from '../../../assets/images/programs/user.svg'
import freeIcon from '../../../assets/images/programs/free.svg'
import heartIcon from '../../../assets/images/programs/heart.svg'
import trainerNotesIcon from '../../../assets/images/programs/trainerNotes.svg'
import {
    PROGRAMS_FAVORITES_ROUTE,
    PROGRAMS_FREE_ROUTE, PROGRAMS_PERSONAL_ROUTE,
    PROGRAMS_TRAINER_BASED_ROUTE
} from "../../../utils/routes/consts";
import { useTranslation } from 'react-i18next';

const ProgramsLeftPanelList = () => {
    const {t} = useTranslation()

    return (
        <div className={s.navigation}>
            <h5 className={s.title}>{t("programs.leftPanel.title")}</h5>
            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={freeIcon} alt="freeIcon"/></div>
                        <NavLink to={PROGRAMS_FREE_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("programs.leftPanel.free")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={heartIcon} alt="heartIcon"/></div>
                        <NavLink to={PROGRAMS_FAVORITES_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("programs.leftPanel.favorite")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={trainerNotesIcon} alt="trainerNotesIcon"/></div>
                        <NavLink to={PROGRAMS_TRAINER_BASED_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("programs.leftPanel.fromTrainer")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={userIcon} alt="userIcon"/></div>
                        <NavLink to={PROGRAMS_PERSONAL_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("programs.leftPanel.personal")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ProgramsLeftPanelList;