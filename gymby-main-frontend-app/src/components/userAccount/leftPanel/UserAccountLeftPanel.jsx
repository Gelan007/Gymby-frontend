import React, {useEffect, useState} from 'react';
import UserAccountLeftPanelList from "./UserAccountLeftPanelList";
import s from './LeftPanel.module.scss'
import ButtonExit from "../../UI/buttons/ButtonExit";
import ButtonGold from "../../UI/buttons/ButtonGold";
import { useTranslation } from 'react-i18next';
import {NavLink} from "react-router-dom";
import {USER_ACCOUNT_COACHING_ROUTE} from "../../../utils/routes/consts";

const UserAccountLeftPanel = ({isButtonGold, logout}) => {
    const {t} = useTranslation()

    return (
        <div className={s.leftPanel__container}>
            <div className={s.leftPanelList}>
                <UserAccountLeftPanelList/>
            </div>
            {isButtonGold ?
                <div className={s.trainerBlock}>
                    <span>{t("userAccount.leftPanel.subscriptionTagline1")}</span>
                    <span>{t("userAccount.leftPanel.subscriptionTagline2")}</span>
                    <div className={s.buttonGold__container}>
                        <NavLink to={USER_ACCOUNT_COACHING_ROUTE}>
                            <ButtonGold>{t("userAccount.leftPanel.subscriptionTaglineButton")}</ButtonGold>
                        </NavLink>
                    </div>
                </div>
                :
                <div></div>
            }
            <div className={s.buttonExit__container} onClick={() => logout('/')}>
                <ButtonExit text={t("userAccount.leftPanel.exit")}/>
            </div>
        </div>
    );
};

export default UserAccountLeftPanel;