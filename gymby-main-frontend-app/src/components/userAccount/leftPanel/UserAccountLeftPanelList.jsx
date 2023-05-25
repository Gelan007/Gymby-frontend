import React, {useEffect, useState} from 'react';
import s from './LeftPanelList.module.scss'
import userIcon from '../../../assets/images/userCabinet/leftPanel/user.svg'
import documentIcon from '../../../assets/images/userCabinet/leftPanel/document.svg'
import searchIcon from '../../../assets/images/userCabinet/leftPanel/search.svg'
import usersThreeIcon from '../../../assets/images/userCabinet/leftPanel/usersThree.svg'
import infoIcon from '../../../assets/images/userCabinet/leftPanel/info.svg'
import dollarIcon from '../../../assets/images/userCabinet/leftPanel/dollar.svg'
import {NavLink, useLocation} from "react-router-dom";
import {
    USER_ACCOUNT_COACHING_ROUTE,
    USER_ACCOUNT_FRIENDS_LIST_ROUTE, USER_ACCOUNT_INSTRUCTION_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE, USER_ACCOUNT_SEARCH_ROUTE, USER_ACCOUNT_SUBSCRIBES_ROUTE
} from "../../../utils/routes/consts";
import { useTranslation } from 'react-i18next';

const UserAccountLeftPanelList = () => {
    const {t} = useTranslation()
    return (
        <div className={s.navigation}>
            <h5 className={s.title}>{t("userAccount.leftPanel.title")}</h5>
            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={userIcon} alt="userIcon"/></div>
                        <NavLink to={USER_ACCOUNT_PERSONAL_DATA_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.personalData")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={documentIcon} alt="documentIcon"/></div>
                        <NavLink to={USER_ACCOUNT_COACHING_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.coaching")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={usersThreeIcon} alt="usersThreeIcon"/></div>
                        <NavLink to={USER_ACCOUNT_FRIENDS_LIST_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.friendsList")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={infoIcon} alt="infoIcon"/></div>
                        <NavLink to={USER_ACCOUNT_INSTRUCTION_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.instruction")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={dollarIcon} alt="dollarIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SUBSCRIBES_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.subscriptionsManagement")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={searchIcon} alt="searchIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("userAccount.leftPanel.search")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default UserAccountLeftPanelList;