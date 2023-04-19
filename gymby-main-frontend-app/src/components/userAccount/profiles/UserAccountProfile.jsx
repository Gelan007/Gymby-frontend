import React from 'react';
import ProfileInfoBlock from "./infoBlock/ProfileInfoBlock";
import s from './Profile.module.scss'

const UserAccountProfile = () => {
    return (
        <div className={s.userAccountProfile}>
            <div className={s.userAccountProfile__body}>
                <ProfileInfoBlock/>
                <div className={s.userDescriptionBlock}>
                    <div className={s.userDescriptionBlock__title}>Інформація про користувача</div>
                    <div className={s.userDescriptionBlock__text}>
                        Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccountProfile;