import React from 'react';
import s from "./MeasurementsLeftPanelList.module.scss";
import {NavLink} from "react-router-dom";
import {
    MEASUREMENTS_CHEST_ROUTE,
    MEASUREMENTS_FAT_PERCENTAGE_ROUTE,
    MEASUREMENTS_FOREARMS_ROUTE,
    MEASUREMENTS_HAND_ROUTE,
    MEASUREMENTS_NECK_ROUTE, MEASUREMENTS_PHOTOS_ROUTE,
    MEASUREMENTS_SHOULDERS_ROUTE, MEASUREMENTS_THIGH_ROUTE,
    MEASUREMENTS_WAIST_ROUTE,
    MEASUREMENTS_WEIGHT_ROUTE,
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
                        <NavLink to={MEASUREMENTS_WEIGHT_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.weight")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={percentageIcon} alt="percentageIcon"/></div>
                        <NavLink to={MEASUREMENTS_FAT_PERCENTAGE_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.fatPersent")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={neckIcon} alt="neckIcon"/></div>
                        <NavLink to={MEASUREMENTS_NECK_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.neck")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={shoulderIcon} alt="shoulderIcon"/></div>
                        <NavLink to={MEASUREMENTS_SHOULDERS_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.shoulders")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={forearmIcon} alt="forearmIcon"/></div>
                        <NavLink to={MEASUREMENTS_FOREARMS_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                           {t("measurements.leftPanel.forearms")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={chestIcon} alt="chestIcon"/></div>
                        <NavLink to={MEASUREMENTS_CHEST_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.chest")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={waistAndRulerIcon} alt="waistAndRulerIcon"/></div>
                        <NavLink to={MEASUREMENTS_WAIST_ROUTE} className={({isActive, isPending}) =>
                            isPending ? s.pending : isActive ? s.active : s.text}>
                            {t("measurements.leftPanel.waist")}
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={s.icon}><img src={thighsIcon} alt="thighsIcon"/></div>
                        <NavLink to={MEASUREMENTS_THIGH_ROUTE} className={({isActive, isPending}) =>
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
                        <NavLink to={MEASUREMENTS_PHOTOS_ROUTE} className={({isActive, isPending}) =>
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