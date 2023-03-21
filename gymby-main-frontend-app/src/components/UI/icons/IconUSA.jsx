import React from 'react';
import s from './Icons.module.scss'
import usaIcon from '../../../assets/images/LandingPage/general/usa_icon.svg'

const IconUsa = () => {
    return (
        <div className={s.iconUSA}>
            <img src={usaIcon} alt="USA icon"/>
        </div>
    );
};

export default IconUsa;