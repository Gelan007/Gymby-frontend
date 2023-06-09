import React from 'react';
import s from "./ChartCardButton.module.scss"

const ChartCardButton = ({icon, text, isActive}) => {
    return (
        <div className={isActive ? `${s.chartCardButton} ${s.active}` : s.chartCardButton}>
            <div className={s.icon}>
                <img src={icon} alt="icon"/>
            </div>
            <span>{text}</span>
        </div>
    );
};

export default ChartCardButton;