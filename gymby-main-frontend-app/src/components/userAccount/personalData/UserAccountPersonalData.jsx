import React, {useEffect, useState} from 'react';
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import defaultPhoto from '../../../assets/images/userCabinet/personalData/profile.png'
import s from './PersonalData.module.scss'
import InputGrey from "../../UI/inputs/InputGrey";
import AddingCardPhotos from "../../general/addingCardPhotos/AddingCardPhotos";
import TextareaGrey from "../../UI/textareas/TextareaGrey";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import {NavLink} from "react-router-dom";
import {USER_ACCOUNT_PROFILE_ROUTE, USER_ACCOUNT_ROUTE} from "../../../utils/routes/consts";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';



const UserAccountPersonalData = ({myProfile, updateProfile, addProfilePhoto, deleteProfilePhoto, ...props}) => {

    const {t} = useTranslation()
    const [userData, setUserData] = useState(myProfile);
    const [temporaryPhotoPath, setTemporaryPhotoPath] = useState()
    /*const [temporaryPhotosList, setTemporaryPhotosList] = useState([])*/
    const [finalPhotosDisplayingArray, setFinalPhotosDisplayingArray] = useState([])
    const [chosenUserPhotoFilesForRequest, setChosenUserPhotoFilesForRequest] = useState([])
    const [chosenUserPhotoPathsForDeleteRequest, setChosenUserPhotoPathsForDeleteRequest] = useState([])
    const [photosPendingDeletion, setPhotosPendingDeletion] = useState([])

    useEffect(() => {
        setUserData(myProfile)
    }, [myProfile])

    useEffect(() => {
        setTemporaryPhotoPath(userData.photoAvatarPath)
    }, [userData.photoAvatarPath])

    useEffect(() => {
        setFinalPhotosDisplayingArray([...userData.photos])
    }, [userData?.photos])

    useEffect(() => {
               photosPendingDeletion.forEach(photoForDeletion => {
            setFinalPhotosDisplayingArray(finalPhotosDisplayingArray.filter(photo => photo.photoPath !== photoForDeletion.photoPath))
        })

        if(chosenUserPhotoFilesForRequest.length > 0) {
            photosPendingDeletion.forEach(photoForDeletion => {
                finalPhotosDisplayingArray.forEach(photo => {
                    photo.fileAndDataURLFile?.forEach(photoFile => {
                        if(photoForDeletion == photoFile.fileReaderData) {
                            chosenUserPhotoFilesForRequest.forEach(i => console.log(i))
                            setChosenUserPhotoFilesForRequest(chosenUserPhotoFilesForRequest.filter(item => item != photoFile.file))
                        }
                    })

                })
            })
        }
    }, [photosPendingDeletion])

    const buttonHandler = () => {
        try {
            updateProfile(userData.username, userData.email, userData.firstName,
                userData.lastName, userData.description, userData.photoAvatarPath,
                userData.instagramUrl, userData.facebookUrl, userData.telegramUsername, myProfile.profileId)
            if(chosenUserPhotoFilesForRequest.length > 0) {
                chosenUserPhotoFilesForRequest.forEach(photo => addProfilePhoto(photo))
                setChosenUserPhotoFilesForRequest([])
            }
            if(chosenUserPhotoPathsForDeleteRequest.length > 0) {
                chosenUserPhotoPathsForDeleteRequest.forEach(photoId => deleteProfilePhoto(photoId))
            }
            //console.log(chosenUserPhotoFilesForRequest)
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
            setFinalPhotosDisplayingArray([...finalPhotosDisplayingArray, {fileAndDataURLFile: [{fileReaderData: fileReader.result, file}]} ]);
        };

        if (file) {
            fileReader.readAsDataURL(file);
            setChosenUserPhotoFilesForRequest([...chosenUserPhotoFilesForRequest, file]);
        }
    };


    const handleUserPhotoDelete = (photo) => {
        userData.photos.forEach(initialPhotoPath => {
            if(initialPhotoPath.photoPath === photo.photoPath) {
                setChosenUserPhotoPathsForDeleteRequest([...chosenUserPhotoPathsForDeleteRequest, photo.photoId])
            }
        } )
        setPhotosPendingDeletion([...photosPendingDeletion, photo])
    }


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
                            {myProfile.isCoach ?
                                <div className={s.avatarBlock__icon}>
                                    <img src={trainerIcon} alt="trainerIcon"/>
                                </div>
                                :
                                <div></div>
                            }

                        </div>
                        <span className={s.avatarBlock__subscription}>
                            {t("userAccount.personalData.withoutSubscription")}
                        </span>
                        <NavLink to={`${USER_ACCOUNT_ROUTE}/profile/${myProfile.username}`} className={s.avatarBlock__profileOverview}>{t("userAccount.personalData.checkMyProfile")}</NavLink>
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
                    <AddingCardPhotos photos={finalPhotosDisplayingArray?.map((item) => {
                        if (item.photoId && item.photoPath) {
                            return { photoId: item.photoId, photoPath: item.photoPath };
                        } else if (item.fileAndDataURLFile && Array.isArray(item.fileAndDataURLFile)) {
                            return item.fileAndDataURLFile.map((fileData) => fileData.fileReaderData);
                        }
                        return [];
                    })}
                                      handleAddingCardFileChange={handleUserPhotosChange}
                                      handlePhotoDelete={handleUserPhotoDelete}
                                      isUserAccount={true}
                    />
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