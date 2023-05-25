import React from 'react';
import s from './Card.module.scss'
import defaultIcon from '../../../assets/images/statistics/noteDone.svg'

const Card = ({icon, title = 0, text, isLightWhiteBlue = false, isLightBlue = false}) => {
    return (
        <div className={isLightWhiteBlue && `${s.card} ${s.lightWhiteBlue}` ||
            isLightBlue && `${s.card} ${s.lightBlue}` ||
            `${s.card}`
        }

        >
            <div className={s.icon}>
                <img src={!icon ? defaultIcon : icon} alt="icon"/>
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.text}>{text}</div>
        </div>
    );
};

export default Card;