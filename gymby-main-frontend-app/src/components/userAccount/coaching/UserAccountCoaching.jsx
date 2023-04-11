import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from './Coaching.module.scss'
import man from '../../../assets/images/userCabinet/coaching/man.png'

const UserAccountCoaching = () => {
    return (
        <div className={s.coaching}>
            <UserAccountLeftPanel isButtonGold={false}/>
            <div className={s.coaching__body}>
                <div className={s.possibilities}>
                    <div className={s.possibilities__content}>
                        <h3 className={s.possibilities__title}>Можливості тренера:</h3>
                        <div className={s.possibilities__points}>
                            <ul className={s.possibilities__list + " " + s.pointsList}>
                                <li className={s.pointsList__item}>Можливість створювати свої платні програми тренувань та виставляти їх до загального списку програм;</li>
                                <li className={s.pointsList__item}>Створення тренування індивідуально для учня;</li>
                                <li className={s.pointsList__item}>Взаємодія з календарем тренувань учня;</li>
                                <li className={s.pointsList__item}>Редагування плана тренувань учня;</li>
                                <li className={s.pointsList__item}>Відстеження прогресу своїх учнів.</li>
                            </ul>
                        </div>
                        <div className={s.possibilities__description}>Зацікавило? Тоді <span>ставай тренером</span> вже зараз!</div>
                    </div>
                    <div className={s.possibilities__image}>
                        <img src={man} alt="man"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccountCoaching;