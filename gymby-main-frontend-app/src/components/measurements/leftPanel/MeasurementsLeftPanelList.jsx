import React from 'react';
import s from "./MeasurementsLeftPanelList.module.scss";
import {NavLink} from "react-router-dom";
import {
    MEASUREMENTS_HAND_ROUTE,
    USER_ACCOUNT_COACHING_ROUTE,
    USER_ACCOUNT_FRIENDS_LIST_ROUTE, USER_ACCOUNT_INSTRUCTION_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE, USER_ACCOUNT_SEARCH_ROUTE, USER_ACCOUNT_SUBSCRIBES_ROUTE
} from "../../../utils/routes/consts";
import bicepsIcon from "../../../assets/images/measurements/biceps.svg";
import chestIcon from "../../../assets/images/measurements/Chest.svg";
import forearmIcon from "../../../assets/images/measurements/forearm.svg";
import neckIcon from "../../../assets/images/measurements/neck.svg";
import photoIcon from "../../../assets/images/measurements/photo.svg";
import percentageIcon from "../../../assets/images/measurements/percentage.svg";
import shoulderIcon from "../../../assets/images/measurements/shoulder.svg";
import thighsIcon from "../../../assets/images/measurements/thighs.svg";
import waistAndRulerIcon from "../../../assets/images/measurements/waistAndRuler.svg";
import weightIcon from "../../../assets/images/measurements/weight.svg";


import { useTranslation } from 'react-i18next';

const MeasurementsLeftPanelList = () => {

    const {t} = useTranslation()

    return (
        <div className={s.navigation}>
            <h5 className={s.title}>{t("measurements.leftPanel.title")}</h5>
            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon}><img src={weightIcon} alt="weightIcon"/></div>
                        <NavLink to={USER_ACCOUNT_PERSONAL_DATA_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.weight")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={percentageIcon} alt="percentageIcon"/></div>
                        <NavLink to={USER_ACCOUNT_COACHING_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.fatPersent")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={neckIcon} alt="neckIcon"/></div>
                        <NavLink to={USER_ACCOUNT_FRIENDS_LIST_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.neck")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={shoulderIcon} alt="shoulderIcon"/></div>
                        <NavLink to={USER_ACCOUNT_INSTRUCTION_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.shoulders")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={forearmIcon} alt="forearmIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SUBSCRIBES_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                           {t("measurements.leftPanel.forearms")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={chestIcon} alt="chestIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.chest")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={waistAndRulerIcon} alt="waistAndRulerIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.waist")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={thighsIcon} alt="thighsIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.thigh")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={bicepsIcon} alt="bicepsIcon"/></div>
                        <NavLink to={MEASUREMENTS_HAND_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.hand")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={photoIcon} alt="photoIcon"/></div>
                        <NavLink to={USER_ACCOUNT_SEARCH_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.photos")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MeasurementsLeftPanelList;