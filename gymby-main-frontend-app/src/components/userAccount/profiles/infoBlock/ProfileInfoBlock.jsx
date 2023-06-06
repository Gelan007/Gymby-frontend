import React from 'react';
import s from './InfoBlock.module.scss'
import plug from '../../../../assets/images/userCabinet/personalData/Revan.jpg'
import trainerIcon from '../../../../assets/images/general/icons/trainer_icon.svg'
import telegram from '../../../../assets/images/general/icons/socialMedia/telegram.svg'
import instagram from '../../../../assets/images/general/icons/socialMedia/instagram.svg'
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import {useTranslation} from "react-i18next";


const ProfileInfoBlock = ({username, firstName, lastName, telegramUsername, instagramUrl, isCoach}) => {
    const {t} = useTranslation()

    return (
        <div className={s.profileInfoBlock}>
            <div className={s.profileInfoBlock__leftBlock}>
                <div className={s.profileInfoBlock__avatarBlock}>
                    <div className={s.profileInfoBlock__avatar}>
                        <img src={plug} alt="avatar"/>
                    </div>
                    <span className={s.profileInfoBlock__username}>{username}</span>
                </div>
                <div className={s.contentBlock}>
                    <div className={s.contentBlock__fullNameBlock}>
                        <span className={s.contentBlock__fullName}>{`${firstName} ${lastName}`}</span>
                        {isCoach ?
                            <div className={s.contentBlock__trainerIcon}>
                                <img src={trainerIcon} alt="trainerIcon"/>
                            </div>
                            :
                            <div></div>
                        }

                    </div>
                    <div className={s.contentBlock__text}>{t("userAccount.profile.profileInfoBlock.content1")} <span>180</span> {t("userAccount.profile.profileInfoBlock.content2")}</div>
                    <div className={s.contentBlock__text}><span>15</span> {t("userAccount.profile.profileInfoBlock.content3")}</div>
                    <div className={s.contentBlock__socialMediaIcons}>
                        <a href={instagramUrl}>
                            <div className={s.contentBlock__icon + " " + s.contentBlock__icon_instagram}>
                                <img src={instagram} alt="instagram"/>
                            </div>
                        </a>
                        <a href={`https://t.me/${telegramUsername}`}>
                            <div className={s.contentBlock__icon + " " + s.contentBlock__icon_telegram}>
                                <img src={telegram} alt="telegram"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
           {/* <div className={s.profileInfoBlock__addButton}>
                <ButtonGreen>{t("userAccount.profile.profileInfoBlock.addToFriends")}</ButtonGreen>
            </div>*/}
        </div>
    );
};

export default ProfileInfoBlock;