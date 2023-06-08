import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Subscriptions.module.scss'
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';

const UserAccountSubscriptions = ({data, signature}) => {
    const {t} = useTranslation()
    return (
        <div className={s.subscriptions}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.subscriptions__body}>
                <div className={s.infoBlock}>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>{t("userAccount.subscriptions.yourSubscription")} </span>
                        <span className={s.infoBlock__thinPart}>Тренер</span>
                        <div className={s.infoBlock__icon}>
                            <img src={trainerIcon} alt="trainer icon"/>
                        </div>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>{t("userAccount.subscriptions.subscriptionTerm")} </span>
                        <span className={s.infoBlock__thinPart}>N {t("userAccount.subscriptions.subscriptionTermDays")}</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>{t("userAccount.subscriptions.lastDate")} </span>
                        <span className={s.infoBlock__thinPart}>22.10.2022</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>{t("userAccount.subscriptions.alreadyTrainer1")} <span className={s.infoBlock__redPart}>N</span> {t("userAccount.subscriptions.alreadyTrainer2")}</span>
                    </div>
                    <div className={s.infoBlock__text}>
                        <span className={s.infoBlock__boldPart}>{t("userAccount.subscriptions.createdPrograms1")} <span className={s.infoBlock__redPart}>N</span> {t("userAccount.subscriptions.createdPrograms2")}</span>
                    </div>
                </div>
                <div className={s.doSubscriptionBlock}>
                    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
                        <input type="hidden" name="data" value={`${data}`}/>
                        <input type="hidden" name="signature" value={`${signature}`}/>
                        <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UserAccountSubscriptions;