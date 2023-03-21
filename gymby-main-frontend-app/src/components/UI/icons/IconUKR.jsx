import React from 'react';
import s from './Icons.module.scss'
import ukrIcon from '../../../assets/images/LandingPage/general/ukraine_icon.svg'

const IconUkr = () => {
    return (
        <div className={s.iconUKR}>
            <img src={ukrIcon} alt="Ukraine icon"/>
        </div>
    );
};

export default IconUkr;