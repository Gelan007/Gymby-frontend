import React, {useEffect, useState} from 'react';
import UserAccountLeftPanelList from "./UserAccountLeftPanelList";
import s from './LeftPanel.module.scss'
import ButtonExit from "../../UI/buttons/ButtonExit";
import ButtonGold from "../../UI/buttons/ButtonGold";

const UserAccountLeftPanel = ({isButtonGold, logout}) => {
    return (
        <div className={s.leftPanel__container}>
            <div className={s.leftPanelList}>
                <UserAccountLeftPanelList/>
            </div>
            {isButtonGold ?
                <div className={s.trainerBlock}>
                    <span>Бажаєш тренувати інших?</span>
                    <span>Тоді оформлюй підписку тренера вже зараз!</span>
                    <div className={s.buttonGold__container}>
                        <ButtonGold>Стати тренером</ButtonGold>
                    </div>
                </div>
                :
                <div></div>
            }
            <div className={s.buttonExit__container} onClick={() => logout('/')}>
                <ButtonExit text={'Вийти'}/>
            </div>
        </div>
    );
};

export default UserAccountLeftPanel;