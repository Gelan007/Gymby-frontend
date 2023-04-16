import React from 'react';
import s from './SearchItem.module.scss'
import plug from '../../../assets/images/userCabinet/personalData/Revan.jpg'
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import addUserIcon from '../../../assets/images/general/icons/addUser_icon.svg'


const UserAccountSearchItem = ({isOneItemInList}) => {

    return (
        <div className={isOneItemInList ? s.searchItem + " " + s.searchItem_borderBottom : s.searchItem}>
            <div className={s.searchItem__body}>
                <div className={s.avatar}>
                    <img src={plug} alt="avatar"/>
                </div>
                <div className={s.fullTextBlock}>
                    <div className={s.infoBlock}>
                        <span className={s.infoBlock__name}>Петро Петренко</span>
                        <span className={s.infoBlock__username}>(@petrenko)</span>
                    </div>
                    <div className={s.trainerIcon}>
                        <img src={trainerIcon} alt="trainer"/>
                    </div>
                </div>
                <div className={s.addIcon}>
                    <img src={addUserIcon} alt="addUserIcon"/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountSearchItem;