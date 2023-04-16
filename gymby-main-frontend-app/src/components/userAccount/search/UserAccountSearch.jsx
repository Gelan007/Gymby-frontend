import React from 'react';
import UserAccountSearchItem from "./UserAccountSearchItem";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Search.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
const UserAccountSearch = () => {
    return (
        <div className={s.userAccountSearch}>
            <UserAccountLeftPanel isButtonGold={true}/>
            <div className={s.userAccountSearch__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={s.navBlock__options}>
                        <span className={s.navBlock__option}>Тренери</span>
                        <span className={s.navBlock__option + " " + s.navBlock__option_line}>Всі</span>
                    </div>
                </div>
                <div className={s.itemsList}>
                    <UserAccountSearchItem isOneItemInList={false}/>
                    <UserAccountSearchItem isOneItemInList={false}/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountSearch;