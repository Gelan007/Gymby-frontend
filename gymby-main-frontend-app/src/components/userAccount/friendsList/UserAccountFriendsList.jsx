import React, {useState} from 'react';
import s from "./FriendsList.module.scss";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import UserAccountSearchItem from "../search/UserAccountSearchItem";
import UserAccountFriendsListItem from "./items/UserAccountFriendsListItem";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';
import {USER_ACCOUNT_ROUTE} from "../../../utils/routes/consts";
import {NavLink} from "react-router-dom";


const UserAccountFriendsList = ({profiles, friendsValue, requestsValue, selectedOption, setSelectedOption,
                                    acceptFriendship, rejectFriendship, deleteFriendship, userSearchData, handleUserSearch}) => {


    const friendsOptionHandle = () => setSelectedOption(friendsValue);
    const requestsOptionHandle = () => setSelectedOption(requestsValue);
    const {t} = useTranslation()

    return (
        <div className={s.userAccountFriendsList}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.userAccountFriendsList__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук" value={userSearchData} onChange={(e) => handleUserSearch(e)}/>
                    </div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === friendsValue ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={friendsOptionHandle}>{t("userAccount.friendsList.friends")}</span>

                        <span className={selectedOption === requestsValue ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={requestsOptionHandle}>{t("userAccount.friendsList.requests")}</span>
                    </div>
                </div>
                <div className={s.itemsList}>
                    {profiles?.map(profile => (
                        <NavLink to={`${USER_ACCOUNT_ROUTE}/profile/${profile.username}`} key={profile.profileId}>
                            <UserAccountFriendsListItem
                                username={profile.username}
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                selectedOption={selectedOption}
                                friendsValue={friendsValue}
                                requestsValue={requestsValue}
                                isCoach={profile.isCoach}
                                acceptFriendship={acceptFriendship}
                                rejectFriendship={rejectFriendship}
                                deleteFriendship={deleteFriendship}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserAccountFriendsList;