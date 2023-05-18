import React from 'react';
import s from './Icons.module.scss'
import ukrIcon from '../../../assets/images/general/ukraine_icon.svg'

const IconUkr = ({isActive, ...props}) => {
    return (
        <div className={isActive ? `${s.iconUKR} ${s.active}` : s.iconUKR} {...props}>
            <img src={ukrIcon} alt="Ukraine icon"/>
        </div>
    );
};

export default IconUkr;