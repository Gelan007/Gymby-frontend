import React from 'react';
import s from "../../measurements/leftPanel/MeasurementsLeftPanelList.module.scss";
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

const ProgramsLeftPanelList = () => {
    return (
        <div className={s.navigation}>
            <h5 className={s.title}>Програми</h5>
            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={freeIcon} alt="freeIcon"/></div>
                        <NavLink to={PROGRAMS_FREE_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Безкоштовні
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={heartIcon} alt="heartIcon"/></div>
                        <NavLink to={PROGRAMS_FAVORITES_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Обрані
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={trainerNotesIcon} alt="trainerNotesIcon"/></div>
                        <NavLink to={PROGRAMS_TRAINER_BASED_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Від тренера
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={userIcon} alt="userIcon"/></div>
                        <NavLink to={PROGRAMS_PERSONAL_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Особисті
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ProgramsLeftPanelList;