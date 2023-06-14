import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Coaching.module.scss'
import man from '../../../assets/images/userCabinet/coaching/man.png'
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';
import buttonSubscription from "../../../assets/images/userCabinet/subscription/buyButton.svg";

const UserAccountCoaching = ({data, signature, isCoach}) => {
    const {t} = useTranslation()
    return (
        <div className={s.coaching}>
            <UserAccountLeftPanelContainer isButtonGold={false}/>
            <div className={s.coaching__body}>
                <div className={s.possibilities}>
                    <div className={s.possibilities__content}>
                        <h3 className={s.possibilities__title}>{t("userAccount.coaching.title")}</h3>
                        <div className={s.possibilities__points}>
                            <ul className={s.possibilities__list + " " + s.pointsList}>
                                <li className={s.pointsList__item}>{t("userAccount.coaching.firstPoint")}</li>
                                <li className={s.pointsList__item}>{t("userAccount.coaching.secondPoint")}</li>
                                <li className={s.pointsList__item}>{t("userAccount.coaching.thirdPoint")}</li>
                                <li className={s.pointsList__item}>{t("userAccount.coaching.fourthPoint")}</li>
                                <li className={s.pointsList__item}>{t("userAccount.coaching.fifthPoint")}</li>
                            </ul>
                        </div>
                        {isCoach ?
                            <div className={s.possibilities__description}>{t("userAccount.coaching.alreadyTrainer")}</div>
                            :
                            <div className={s.possibilities__description}>
                                {t("userAccount.coaching.interesting1")} <span>{t("userAccount.coaching.interesting2")}</span> {t("userAccount.coaching.interesting3")}
                            </div>
                        }

                    </div>
                    <div className={s.possibilities__image}>
                        <img src={man} alt="man"/>
                    </div>
                </div>
                {isCoach ?
                    <div></div>
                    :
                    <div className={s.doSubscriptionBlock}>
                        <span className={s.doSubscriptionBlock__title}>Стандарт</span>
                        <span className={s.doSubscriptionBlock__price}>$9</span>
                        <span className={s.doSubscriptionBlock__type}>Місячна</span>
                        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8" target="_blank">
                            <input type="hidden" name="data" value={`${data}`}/>
                            <input type="hidden" name="signature" value={`${signature}`}/>
                            <input type="image" src={buttonSubscription}/>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default UserAccountCoaching;