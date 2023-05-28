import React from 'react';
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




const UserAccountProfile = ({myProfile, ...props}) => {
    const {t} = useTranslation()

    return (
        <div className={s.userAccountProfile}>
            <div className={s.userAccountProfile__body}>
                <ProfileInfoBlock firstName={myProfile.firstName} lastName={myProfile.lastName}
                                  telegramUsername={myProfile.telegramUsername} username={myProfile.username}
                                  instagramUrl={myProfile.instagramUrl}
                />
                <div className={s.userDescriptionBlock}>
                    <div className={s.userDescriptionBlock__title + " " + s.userAccountProfile__title}>
                        {t("userAccount.profile.userInfo")}
                    </div>
                    <div className={s.userDescriptionBlock__text}>
                        {myProfile.description}
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
                        <CarouselProfile>
                            {/*можно добавить условие, что если нету элементов, то добавить новый стиль, чтоб было больше margin-top у carousel, когда нету фоток*/}
                            <div className={s.carousel__image}><img src={firstImage} alt=""/></div>
                            <div className={s.carousel__image}><img src={secondImage} alt=""/></div>
                            <div className={s.carousel__image}><img src={thirdImage} alt=""/></div>
                            <div className={s.carousel__image}><img src={fourthImage} alt=""/></div>
                            <div className={s.carousel__image}><img src={fifthImage} alt=""/></div>
                        </CarouselProfile>
                    </div>
                </div>
                <div className={s.backBlock}>
                    <ButtonExit text={t("userAccount.profile.backButton")}/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountProfile;