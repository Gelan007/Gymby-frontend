import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Subscriptions.module.scss'
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";

const UserAccountSubscriptions = () => {
    return (
        <div className={s.subscriptions}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.subscriptions__body}>
                <div className={s.infoBlock}>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>Ваша підписка: </span>
                        <span className={s.infoBlock__thinPart}>Тренер</span>
                        <div className={s.infoBlock__icon}>
                            <img src={trainerIcon} alt="trainer icon"/>
                        </div>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>Термін дії підписки: </span>
                        <span className={s.infoBlock__thinPart}>N днів</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>Дата останнього продовження підписки: </span>
                        <span className={s.infoBlock__thinPart}>22.10.2022</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>Ви тренер вже <span className={s.infoBlock__redPart}>N</span> днів!</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>Вами створено <span className={s.infoBlock__redPart}>N</span> програм для своїх учнів.</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserAccountSubscriptions;