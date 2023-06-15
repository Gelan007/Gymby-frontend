import React, {useEffect, useState} from 'react';
import s from './SearchItem.module.scss'
import defaultPhoto from '../../../assets/images/userCabinet/personalData/profile.png'
import trainerIcon from '../../../assets/images/general/icons/trainer_icon.svg'
import addUserIcon from '../../../assets/images/general/icons/addUser_icon.svg'
import verified from '../../../assets/images/userCabinet/search/verified-user.png'


const UserAccountSearchItem = ({username, firstName, lastName, isCoach, inviteFriend, avatar}) => {
    const [isInviteSent, setIsInviteSend] = useState(false)
    const handleAddFriend = (e) => {
        e.preventDefault()
        inviteFriend(username)
        setIsInviteSend(true)
    }

    return (
        <div className={s.searchItem + " " + s.userAccountItem}>
            <div className={s.searchItem__body + " " + s.userAccountItem__body}>
                <div className={s.avatar}>
                    <img src={avatar ? avatar : defaultPhoto} alt="avatar"/>
                </div>
                <div className={s.fullTextBlock}>
                    <div className={s.infoBlock}>
                        <span className={s.infoBlock__name}>{firstName} {lastName}</span>
                        <span className={s.infoBlock__username}>({username})</span>
                    </div>
                    {isCoach ?
                        <div className={s.trainerIcon}>
                            <img src={trainerIcon} alt="trainer"/>
                        </div>
                        :
                        <div></div>
                    }
                </div>
                {isInviteSent ?
                    <div className={s.verifiedIcon}>
                        <img src={verified} alt="addUserIcon"/>
                    </div>
                    :
                    <div className={s.addIcon} onClick={(e) => handleAddFriend(e)}>
                    <img src={addUserIcon} alt="addUserIcon"/>
                    </div>
                }

            </div>
        </div>
    );
};

export default UserAccountSearchItem;