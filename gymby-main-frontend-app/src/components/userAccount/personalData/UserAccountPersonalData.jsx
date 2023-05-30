import React, {useEffect, useState} from 'react';
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import defaultPhoto from '../../../assets/images/userCabinet/personalData/profile.png'
import s from './PersonalData.module.scss'
import InputGrey from "../../UI/inputs/InputGrey";
import AddingCardPhotos from "../../general/addingCardPhotos/AddingCardPhotos";
import TextareaGrey from "../../UI/textareas/TextareaGrey";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import {NavLink} from "react-router-dom";
import {USER_ACCOUNT_PROFILE_ROUTE} from "../../../utils/routes/consts";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';



const UserAccountPersonalData = ({myProfile, updateProfile, addProfilePhoto, ...props}) => {

    const {t} = useTranslation()
    const [userData, setUserData] = useState(myProfile);
    const [temporaryPhotoPath, setTemporaryPhotoPath] = useState()
    const [temporaryPhotosList, setTemporaryPhotosList] = useState([])
    const [finalPhotosDisplayingArray, setFinalPhotosDisplayingArray] = useState([])
    const [chosenUserPhotoFilesForRequest, setChosenUserPhotoFilesForRequest] = useState([])

    useEffect(() => {
        setUserData(myProfile)
        /*!userData.photos && setUserData({...userData, photos:[]})
        console.log(myProfile)*/
    }, [myProfile])

    useEffect(() => {
        setTemporaryPhotoPath(userData.photoAvatarPath)
    }, [userData.photoAvatarPath])

    useEffect(() => {
        /*!userData.photos ? setTemporaryPhotosList([]) : setTemporaryPhotosList(userData.photos)*/
        setFinalPhotosDisplayingArray([...userData.photos])
    }, [userData?.photos])

    useEffect(() => {
        setFinalPhotosDisplayingArray([...temporaryPhotosList])
    }, [temporaryPhotosList])


    const buttonHandler = () => {
        try {
            updateProfile(userData.username, userData.email, userData.firstName,
                userData.lastName, userData.description, userData.photoAvatarPath,
                userData.instagramUrl, userData.facebookUrl, userData.telegramUsername, myProfile.profileId)
            chosenUserPhotoFilesForRequest.forEach(photo => addProfilePhoto(photo))
        } catch {
            alert('Something went wrong')
        }
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setTemporaryPhotoPath(fileReader.result);
        };

        if (file) {
            fileReader.readAsDataURL(file);
            setUserData({ ...userData, photoAvatarPath: file});
        }
    };
    const handleUserPhotosChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = () => {
            //setTemporaryPhotosList([...temporaryPhotosList, fileReader.result]);
            setFinalPhotosDisplayingArray([...finalPhotosDisplayingArray, fileReader.result]);
        };

        if (file) {
            fileReader.readAsDataURL(file);
            setChosenUserPhotoFilesForRequest([...chosenUserPhotoFilesForRequest, file]);
            //setUserData({...userData, photos: [...userData.photos, file]});
        }
    };


    return (
        <div className={s.personalData}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.personalData__body}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarBlock__image}>
                        <div className={s.avatarBlock__image_text}>{t("userAccount.personalData.uploadPhoto")}</div>
                        <img src={!temporaryPhotoPath ? defaultPhoto : temporaryPhotoPath} alt="avatar"/>
                        <input type="file" onChange={handleFileChange} className={s.avatarBlock__input}/>
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
                            <InputGrey value={userData.firstName} onChange={(e) => setUserData({...userData, firstName: e.target.value})}/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.surname")}</span>
                            <InputGrey value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value})}/>
                        </div>
                    </div>
                    <div className={s.inputData__row}>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.email")}</span>
                            <InputGrey type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                        </div>
                        <div className={s.inputData__item}>
                            <span>{t("userAccount.personalData.textInputs.username")}</span>
                            <InputGrey value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className={s.photoCards}>
                    <div className={s.photoCards__textBlock}>
                        <h4 className={s.photoCards__title}>{t("userAccount.personalData.certificatesBlock.title")}</h4>
                        <span className={s.photoCards__subtitle}>{t("userAccount.personalData.certificatesBlock.subtitle")}</span>
                    </div>
                    <AddingCardPhotos photos={finalPhotosDisplayingArray} handleAddingCardFileChange={handleUserPhotosChange}/>
                </div>
                <div className={s.description}>
                    <div className={s.description__textBlock}>
                        <h4 className={s.description__title}>{t("userAccount.personalData.aboutBlock.title")}</h4>
                        <span className={s.description__subtitle}>{t("userAccount.personalData.aboutBlock.subtitle")}</span>
                    </div>
                    <div className={s.description__textarea}>
                        <TextareaGrey value={userData.description} onChange={(e) => setUserData({...userData, description: e.target.value})}></TextareaGrey>
                    </div>
                </div>
                <div className={s.socialMedia}>
                    <div className={s.socialMedia__row}>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Instagram</div>
                            <InputGrey placeholder="*Link to Instagram*" value={userData.instagramUrl} onChange={(e) => setUserData({...userData, instagramUrl: e.target.value})}/>
                        </div>
                        <div className={s.socialMedia__block}>
                            <div className={s.socialMedia__title}>Telegram</div>
                            <InputGrey placeholder="*Link to Telegram*" value={userData.telegramUsername} onChange={(e) => setUserData({...userData, telegramUsername: e.target.value})}/>
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