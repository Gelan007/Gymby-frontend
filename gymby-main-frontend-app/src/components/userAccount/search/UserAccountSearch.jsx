import React, {useState} from 'react';
import UserAccountSearchItem from "./UserAccountSearchItem";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Search.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
const UserAccountSearch = () => {
    const TRAINERS = 'trainers';
    const EVERYBODY = 'everybody';
    const [selectedOption, setSelectedOption] = useState(TRAINERS);
    const trainersOptionHandle = () => setSelectedOption(TRAINERS);
    const everybodyOptionHandle = () => setSelectedOption(EVERYBODY);



    return (
        <div className={s.userAccountSearch}>
            <UserAccountLeftPanel isButtonGold={true}/>
            <div className={s.userAccountSearch__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === TRAINERS ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={trainersOptionHandle}>Тренери</span>

                        <span className={selectedOption === EVERYBODY ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={everybodyOptionHandle}>Всі</span>
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