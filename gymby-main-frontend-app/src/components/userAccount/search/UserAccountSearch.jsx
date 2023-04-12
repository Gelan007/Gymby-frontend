import React from 'react';
import UserAccountSearchItem from "./UserAccountSearchItem";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Search.module.scss'
const UserAccountSearch = () => {
    return (
        <div className={s.userAccountSearch}>
            <UserAccountLeftPanel isButtonGold={true}/>
            <div className={s.userAccountSearch__body}>
                <div className={s.itemsList}>
                    <UserAccountSearchItem/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountSearch;