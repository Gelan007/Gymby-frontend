import React from 'react';
import ProfileInfoBlock from "./infoBlock/ProfileInfoBlock";
import s from './Profile.module.scss'
import CarouselProfile from "../../general/carousels/profile/CarouselProfile";

import firstImage from '../../../assets/images/userCabinet/personalData/Elrond.jpg';
import secondImage from '../../../assets/images/userCabinet/personalData/Elrond2.jpg';
import thirdImage from '../../../assets/images/userCabinet/personalData/Elrond3.jpg';
import fourthImage from '../../../assets/images/userCabinet/personalData/Elrond4.jpg';
import fifthImage from '../../../assets/images/userCabinet/personalData/Revan.jpg';




const UserAccountProfile = () => {
    return (
        <div className={s.userAccountProfile}>
            <div className={s.userAccountProfile__body}>
                <ProfileInfoBlock/>
                <div className={s.userDescriptionBlock}>
                    <div className={s.userDescriptionBlock__title + " " + s.userAccountProfile__title}>
                        Інформація про користувача
                    </div>
                    <div className={s.userDescriptionBlock__text}>
                        Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії.
                    </div>
                </div>
                <div className={s.photosBlock}>
                    <div className={s.photosBlock__titleBlock}>
                        <div className={s.photosBlock__title + " " + s.userAccountProfile__title}>
                            Сертифікати та фотографії
                        </div>
                        <div className={s.photosBlock__text}>
                            По цим фото ви можете впевнитися в компетенції тренера або подивитися на досягнення з
                            побудови свого тіла інших користувачів.
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
            </div>
        </div>
    );
};

export default UserAccountProfile;