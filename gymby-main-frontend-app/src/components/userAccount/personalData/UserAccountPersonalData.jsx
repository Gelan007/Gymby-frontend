import React, {useEffect, useState} from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import zaglushka from '../../../assets/images/userCabinet/personalData/Revan.jpg'
import s from './PersonalData.module.scss'
import InputGrey from "../../UI/inputs/InputGrey";
import AddingCardPhotos from "../../general/addingCardPhotos/AddingCardPhotos";
import TextareaGrey from "../../UI/textareas/TextareaGrey";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import {NavLink} from "react-router-dom";
import {USER_ACCOUNT_PROFILE_ROUTE} from "../../../utils/routes/consts";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import {useOidcAccessToken, useOidcUser, UserStatus} from "@axa-fr/react-oidc";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";


const UserAccountPersonalData = (props) => {
    const { oidcUser, oidcUserLoadingState } = useOidcUser();
    const { accessToken, accessTokenPayload } = useOidcAccessToken();

    return (
        <div className={s.personalData}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.personalData__body}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarBlock__image}>
                        <img src={zaglushka} alt="avatar"/>
                    </div>
                    <div className={s.avatarBlock__description}>
                        <div className={s.avatarBlock__titleBlock}>
                            <span className={s.avatarBlock__name}>
                                {props.userName}
                                {/*{oidcUser && <div>{JSON.stringify(oidcUser)}</div> }*/}
                                {/*{oidcUser && <div>{JSON.stringify(accessTokenPayload)}</div> }*/}
                            </span>
                            <div className={s.avatarBlock__icon}>
                                <img src={trainerIcon} alt="trainerIcon"/>
                            </div>
                        </div>
                        <span className={s.avatarBlock__subscription}>
                            Без підписки
                        </span>
                        <NavLink to={USER_ACCOUNT_PROFILE_ROUTE} className={s.avatarBlock__profileOverview}>Переглянути особистий профіль</NavLink>
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
                <div className={s.photoCards}>
                    <div className={s.photoCards__textBlock}>
                        <h4 className={s.photoCards__title}>Сертифікати та фотографії</h4>
                        <span className={s.photoCards__subtitle}>Завантажуйте сертифікати, дипломи та інші документи, що підтверджують Вашу компетентність.  </span>
                    </div>
                    <AddingCardPhotos/>
                </div>
                <div className={s.description}>
                    <div className={s.description__textBlock}>
                        <h4 className={s.description__title}>Про Вас</h4>
                        <span className={s.description__subtitle}>Коротко опишіть себе та розкажіть щось цікаве</span>
                    </div>
                    <div className={s.description__textarea}>
                        <TextareaGrey></TextareaGrey>
                    </div>
                </div>
                <div className={s.socialMedia}>
                    <div className={s.socialMedia__row}>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Instagram</div>
                            <InputGrey placeholder="*Link to Instagram*"/>
                        </div>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Telegram</div>
                            <InputGrey placeholder="*Link to Telegram*"/>
                        </div>
                    </div>
                </div>
                <div className={s.buttonSave}>
                    <div className={s.buttonSave__container}>
                        <ButtonGreen style={{height: '50px'}}>Зберегти</ButtonGreen>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserAccountPersonalData;