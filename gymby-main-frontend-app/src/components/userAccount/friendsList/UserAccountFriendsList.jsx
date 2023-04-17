import React, {useState} from 'react';
import s from "./FriendsList.module.scss";
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import UserAccountSearchItem from "../search/UserAccountSearchItem";
import UserAccountFriendsListItem from "./items/UserAccountFriendsListItem";


const UserAccountFriendsList = ({profiles}) => {

    const FRIENDS = 'friends';
    const REQUESTS = 'requests';
    const [selectedOption, setSelectedOption] = useState(FRIENDS);
    const friendsOptionHandle = () => setSelectedOption(FRIENDS);
    const requestsOptionHandle = () => setSelectedOption(REQUESTS);

    return (
        <div className={s.userAccountFriendsList}>
            <UserAccountLeftPanel isButtonGold={true}/>
            <div className={s.userAccountFriendsList__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === FRIENDS ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={friendsOptionHandle}>Друзі</span>

                        <span className={selectedOption === REQUESTS ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={requestsOptionHandle}>Запити</span>
                    </div>
                </div>
                <div className={s.itemsList}>
                    {profiles?.map(profile => (
                        <UserAccountFriendsListItem
                            username={profile.username}
                            firstName={profile.firstName}
                            lastName={profile.lastName}
                            selectedOption={selectedOption}
                            friendsValue={FRIENDS}
                            requestsValue={REQUESTS}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserAccountFriendsList;