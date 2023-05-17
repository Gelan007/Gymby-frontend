import React from 'react';
import s from './ProgramsCard.module.scss'

const ProgramsCard = () => {
    return (
        <div className={s.card}>
            <div className={s.card__body}>
                <div className={s.card__text}>
                    4-недільна програма на масу від Івана
                </div>
                <div className={s.marksBlock}>
                    <span>ектомороф</span>
                    <span>набір маси sdfd</span>
                    <span>набір</span>
                    <span>набір мас</span>
                    <span>набір маси sdfd</span>
                    <span>набір маси sdfd</span>
                </div>
            </div>
        </div>
    );
};

export default ProgramsCard;