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
import { useTranslation } from 'react-i18next';
import {setFirstName, updateProfile} from "../../../redux/reducers/user-account-reducer";


const UserAccountPersonalData = ({myProfile, updateProfile, ...props}) => {

    const {t} = useTranslation()
    const [userData, setUserData] = useState(myProfile);

    useEffect(() => {
        setUserData(myProfile)
        console.log(userData.photoAvatarPath)
    }, [myProfile])

    const buttonHandler = () => {
        try {
            updateProfile(userData.username, userData.email, userData.firstName,
                userData.lastName, userData.description, myProfile.photoAvatarPath,
                userData.instagramUrl, userData.facebookUrl, userData.telegramUserName, myProfile.profileId)
        } catch {
            alert('Something went wrong')
        }

    }

    return (
        <div className={s.personalData}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.personalData__body}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarBlock__image}>
                        <img src={!userData.photoAvatarPath ? zaglushka : userData.photoAvatarPath} alt="avatar"/>
                        <input type="file" onChange={e => setUserData({...userData, photoAvatarPath: e.target.files[0]})} className={s.avatarBlock__input}/>
                    </div>
                    <div className={s.avatarBlock__description}>
                        <div className={s.avatarBlock__titleBlock}>
                            <span className={s.avatarBlock__name}>
                                {`${myProfile.firstName} ${myProfile.lastName}`}
                            </span>
                                <div className={s.avatarBlock__icon}>
                                    <img src={trainerIcon} alt="trainerIcon"/>
                                </div>
                        </div>
                        <span className={s.avatarBlock__subscription}>
                            {t("userAccount.personalData.withoutSubscription")}
                        </span>
                        <NavLink to={USER_ACCOUNT_PROFILE_ROUTE} className={s.avatarBlock__profileOverview}>{t("userAccount.personalData.checkMyProfile")}</NavLink>
                    </div>
                </div>
                <div className={s.inputData}>
                    <div className={s.inputData__row}>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.name")}</span>
                            <InputGrey value={userData.firstName} onChange={(e) => setUserData({...myProfile, firstName: e.target.value})}/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.surname")}</span>
                            <InputGrey value={userData.lastName} onChange={(e) => setUserData({...myProfile, lastName: e.target.value})}/>
                        </div>
                    </div>
                    <div className={s.inputData__row}>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.email")}</span>
                            <InputGrey type="email" value={userData.email} onChange={(e) => setUserData({...myProfile, email: e.target.value})}/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.username")}</span>
                            <InputGrey value={userData.username} onChange={(e) => setUserData({...myProfile, username: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className={s.photoCards}>
                    <div className={s.photoCards__textBlock}>
                        <h4 className={s.photoCards__title}>{t("userAccount.personalData.certificatesBlock.title")}</h4>
                        <span className={s.photoCards__subtitle}>{t("userAccount.personalData.certificatesBlock.subtitle")}</span>
                    </div>
                    <AddingCardPhotos/>
                </div>
                <div className={s.description}>
                    <div className={s.description__textBlock}>
                        <h4 className={s.description__title}>{t("userAccount.personalData.aboutBlock.title")}</h4>
                        <span className={s.description__subtitle}>{t("userAccount.personalData.aboutBlock.subtitle")}</span>
                    </div>
                    <div className={s.description__textarea}>
                        <TextareaGrey value={userData.description} onChange={(e) => setUserData({...myProfile, description: e.target.value})}></TextareaGrey>
                    </div>
                </div>
                <div className={s.socialMedia}>
                    <div className={s.socialMedia__row}>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Instagram</div>
                            <InputGrey placeholder="*Link to Instagram*" value={userData.instagramUrl} onChange={(e) => setUserData({...myProfile, instagramUrl: e.target.value})}/>
                        </div>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Telegram</div>
                            <InputGrey placeholder="*Link to Telegram*" value={userData.telegramUsername} onChange={(e) => setUserData({...myProfile, telegramUsername: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className={s.buttonSave}>
                    <div className={s.buttonSave__container}>
                        <ButtonGreen style={{height: '50px'}} onClick={buttonHandler}>{t("userAccount.personalData.save")}</ButtonGreen>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserAccountPersonalData;