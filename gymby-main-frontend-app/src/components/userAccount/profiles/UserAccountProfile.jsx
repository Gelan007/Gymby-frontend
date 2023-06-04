import React, {useEffect} from 'react';
import ProfileInfoBlock from "./infoBlock/ProfileInfoBlock";
import s from './Profile.module.scss'
import CarouselProfile from "../../general/carousels/profile/CarouselProfile";

import firstImage from '../../../assets/images/userCabinet/personalData/Elrond.jpg';
import secondImage from '../../../assets/images/userCabinet/personalData/Elrond2.jpg';
import thirdImage from '../../../assets/images/userCabinet/personalData/Elrond3.jpg';
import fourthImage from '../../../assets/images/userCabinet/personalData/Elrond4.jpg';
import fifthImage from '../../../assets/images/userCabinet/personalData/Revan.jpg';
import ButtonExit from "../../UI/buttons/ButtonExit";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";




const UserAccountProfile = ({profile, isRequestCompleted, ...props}) => {
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
    }, [profile])


    return (
        <div className={s.userAccountProfile}>
            <div className={s.userAccountProfile__body}>
                <ProfileInfoBlock firstName={profile.firstName} lastName={profile.lastName}
                                  telegramUsername={profile.telegramUsername} username={profile.username}
                                  instagramUrl={profile.instagramUrl} isCoach={profile.isCoach}
                />
                <div className={s.userDescriptionBlock}>
                    <div className={s.userDescriptionBlock__title + " " + s.userAccountProfile__title}>
                        {t("userAccount.profile.userInfo")}
                    </div>
                    <div className={s.userDescriptionBlock__text}>
                        {profile.description}
                    </div>
                </div>
                <div className={s.photosBlock}>
                    <div className={s.photosBlock__titleBlock}>
                        <div className={s.photosBlock__title + " " + s.userAccountProfile__title}>
                            {t("userAccount.profile.certificationsAndPhotos")}
                        </div>
                        <div className={s.photosBlock__text}>
                            {t("userAccount.profile.photoDescription")}
                        </div>
                    </div>
                    <div className={s.carousel}>
                        {isRequestCompleted ?  (
                            <CarouselProfile>
                                {/*можно добавить условие, что если нету элементов, то добавить новый стиль, чтоб было больше margin-top у carousel, когда нету фоток*/}
                                {profile.photos.map(photo => (
                                    <div className={s.carousel__image} key={photo.photoId}>
                                        <img src={photo.photoPath} alt="profile photo"/>
                                    </div>
                                ))}
                            </CarouselProfile>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
                <div className={s.backBlock} onClick={() => navigate(-1)}>
                    <ButtonExit text={t("userAccount.profile.backButton")}/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountProfile;