import React from 'react';
import s from "./FriendsListItem.module.scss";
import plug from "../../../../assets/images/userCabinet/personalData/Revan.jpg";
import trainerIcon from "../../../../assets/images/general/icons/trainer_icon.svg";
import basketIcon from "../../../../assets/images/general/icons/basketWhiteBackground2.svg";
import sendIcon from "../../../../assets/images/general/icons/sendIcon.svg";
import applyIcon from "../../../../assets/images/general/icons/applyGreen.svg";
import closeIcon from "../../../../assets/images/general/icons/closeRed.svg";

const UserAccountFriendsListItem = ({username, firstName, lastName,
                                        selectedOption, friendsValue}, ...props) => {
    return (
        <div className={s.friendsListItem + " " + s.userAccountItem}>
            <div className={s.friendsListItem__body + " " + s.userAccountItem__body}>
                <div className={s.avatar}>
                    <img src={plug} alt="avatar"/>
                </div>
                <div className={s.fullTextBlock}>
                    <div className={s.infoBlock}>
                        <span className={s.infoBlock__name}>{firstName} {lastName}</span>
                        <span className={s.infoBlock__username}>({username})</span>
                    </div>
                    <div className={s.trainerIcon}>
                        <img src={trainerIcon} alt="trainer"/>
                    </div>
                </div>
                {selectedOption === friendsValue ?
                    <div className={s.iconsBlock}>
                        <div className={s.iconsBlock__sendIcon}>
                            <img src={sendIcon} alt="sendIcon"/>
                        </div>
                        <div className={s.iconsBlock__basketIcon}>
                            <img src={basketIcon} alt="basketIcon"/>
                        </div>
                    </div>
                    :
                    <div className={s.iconsBlock}>
                        <div className={s.iconsBlock__applyIcon}>
                            <img src={applyIcon} alt="applyIcon"/>
                        </div>
                        <div className={s.iconsBlock__closeIcon}>
                            <img src={closeIcon} alt="closeIcon"/>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default UserAccountFriendsListItem;