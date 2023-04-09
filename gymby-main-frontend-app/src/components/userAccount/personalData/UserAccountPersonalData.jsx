import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import zaglushka from '../../../assets/images/userCabinet/personalData/Revan.jpg'
import s from './PersonalData.module.scss'
import InputGrey from "../../UI/inputs/InputGrey";
import AddingCardPhotos from "../../general/addingCardPhotos/AddingCardPhotos";

const UserAccountPersonalData = (props) => {
    return (
        <div className={s.personalData}>
            <UserAccountLeftPanel/>
            <div className={s.personalData__body}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarBlock__image}>
                        <img src={zaglushka} alt="avatar"/>
                    </div>
                    <div className={s.avatarBlock__description}>
                        <div className={s.avatarBlock__titleBlock}>
                            <span className={s.avatarBlock__name}>
                                {props.userName}
                            </span>
                            <div className={s.avatarBlock__icon}>
                                <img src={trainerIcon} alt="trainerIcon"/>
                            </div>
                        </div>
                        <span className={s.avatarBlock__subscription}>
                        Без підписки
                    </span>
                    </div>
                </div>
                <div className={s.inputData}>
                    <div className={s.inputData__row}>
                        <div className={s.inputData__item}>
                            <span>Ім’я</span>
                            <InputGrey/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>Прізвище</span>
                            <InputGrey/>
                        </div>
                    </div>
                    <div className={s.inputData__row}>
                        <div className={s.inputData__item}>
                            <span>Пошта</span>
                            <InputGrey type="email"/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>Ім’я користувача</span>
                            <InputGrey/>
                        </div>
                    </div>
                </div>
                <AddingCardPhotos/>
            </div>
        </div>
    );
};

export default UserAccountPersonalData;