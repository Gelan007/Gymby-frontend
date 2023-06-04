import React, {useEffect, useState} from 'react';
import UserAccountSearchItem from "./UserAccountSearchItem";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Search.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import { useTranslation } from 'react-i18next';
import {NavLink} from "react-router-dom";
import {USER_ACCOUNT_ROUTE} from "../../../utils/routes/consts";

const UserAccountSearch = ({profiles, everybodyValue,trainersValue,selectedOption,setSelectedOption, userSearchData, handleUserSearch}) => {

    const trainersOptionHandle = () => setSelectedOption(trainersValue);
    const everybodyOptionHandle = () => setSelectedOption(everybodyValue);
    const {t} = useTranslation()

    useEffect(() => {
        console.log(profiles)
    }, [profiles])

    return (
        <div className={s.userAccountSearch}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.userAccountSearch__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук" value={userSearchData} onChange={(e) => handleUserSearch(e)}/>
                    </div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === trainersValue ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={trainersOptionHandle}>{t("userAccount.search.trainers")}</span>

                        <span className={selectedOption === everybodyValue ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={everybodyOptionHandle}>{t("userAccount.search.everybody")}</span>
                    </div>
                </div>
                <div className={s.itemsList}>
                    {profiles?.map(profile => (
                        <NavLink to={`${USER_ACCOUNT_ROUTE}/profile/${profile.username}`} key={profile.profileId}>
                            <UserAccountSearchItem
                                username={profile.username}
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserAccountSearch;