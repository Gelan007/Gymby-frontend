import React from 'react';
import s from "./MeasurementsLeftPanelList.module.scss";
import userIcon from "../../../assets/images/userCabinet/leftPanel/user.svg";
import {NavLink} from "react-router-dom";
import {
    MEASUREMENTS_HAND_ROUTE,
    USER_ACCOUNT_COACHING_ROUTE,
    USER_ACCOUNT_FRIENDS_LIST_ROUTE, USER_ACCOUNT_INSTRUCTION_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE, USER_ACCOUNT_SEARCH_ROUTE, USER_ACCOUNT_SUBSCRIBES_ROUTE
} from "../../../utils/routes/consts";
import documentIcon from "../../../assets/images/userCabinet/leftPanel/document.svg";
import usersThreeIcon from "../../../assets/images/userCabinet/leftPanel/usersThree.svg";
import infoIcon from "../../../assets/images/userCabinet/leftPanel/info.svg";
import dollarIcon from "../../../assets/images/userCabinet/leftPanel/dollar.svg";
import searchIcon from "../../../assets/images/userCabinet/leftPanel/search.svg";

const MeasurementsLeftPanelList = () => {
    return (
        <div className={s.navigation}>
            <h5 className={s.title}>Заміри тіла</h5>
            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={userIcon} alt="userIcon"/></div>
                        <NavLink to={USER_ACCOUNT_PERSONAL_DATA_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Вага
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={documentIcon} alt="documentIcon"/></div>
                        <NavLink to={USER_ACCOUNT_COACHING_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Відсоток жиру
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={usersThreeIcon} alt="usersThreeIcon"/></div>
                        <NavLink to={USER_ACCOUNT_FRIENDS_LIST_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Шия
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={infoIcon} alt="infoIcon"/></div>
                        <NavLink to={USER_ACCOUNT_INSTRUCTION_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Плечі
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={dollarIcon} alt="dollarIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SUBSCRIBES_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Предпліччя
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Груди
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Талія
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Стегно
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={MEASUREMENTS_HAND_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Рука
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            Фотографії
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MeasurementsLeftPanelList;