import React from 'react';
import s from './InfoBlock.module.scss'
import plug from '../../../../assets/images/userCabinet/personalData/Revan.jpg'
import trainerIcon from '../../../../assets/images/general/icons/trainer_icon.svg'
import telegram from '../../../../assets/images/general/icons/socialMedia/telegram.svg'
import instagram from '../../../../assets/images/general/icons/socialMedia/instagram.svg'
import ButtonGreen from "../../../UI/buttons/ButtonGreen";


const ProfileInfoBlock = () => {
    return (
        <div className={s.profileInfoBlock}>
            <div className={s.profileInfoBlock__leftBlock}>
                <div className={s.profileInfoBlock__avatarBlock}>
                    <div className={s.profileInfoBlock__avatar}>
                        <img src={plug} alt="avatar"/>
                    </div>
                    <span className={s.profileInfoBlock__username}>@petrenko</span>
                </div>
                <div className={s.contentBlock}>
                    <div className={s.contentBlock__fullNameBlock}>
                        <span className={s.contentBlock__fullName}>Петро Петренко</span>
                        <div className={s.contentBlock__trainerIcon}>
                            <img src={trainerIcon} alt="trainerIcon"/>
                        </div>
                    </div>
                    <div className={s.contentBlock__text}>Тренує вже <span>180</span> днів</div>
                    <div className={s.contentBlock__text}><span>15</span> клієнтів</div>
                    <div className={s.contentBlock__socialMediaIcons}>
                        <div className={s.contentBlock__icon}>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <div className={s.contentBlock__icon}>
                            <img src={telegram} alt="telegram"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.profileInfoBlock__addButton}>
                <ButtonGreen>Додати у друзі</ButtonGreen>
            </div>
        </div>
    );
};

export default ProfileInfoBlock;