import React from 'react';
import s from './Icons.module.scss'
import usaIcon from '../../../assets/images/general/usa_icon.svg'

const IconUsa = ({isActive, ...props}) => {
    return (
        <div className={isActive ? `${s.iconUSA} ${s.active}` : s.iconUSA} {...props}>
            <img src={usaIcon} alt="USA icon"/>
        </div>
    );
};

export default IconUsa;