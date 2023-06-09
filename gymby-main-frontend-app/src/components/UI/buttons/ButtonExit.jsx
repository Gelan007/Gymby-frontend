import React from 'react';
import exitIcon from '../../../assets/images/general/buttons/exit.svg'
import s from './Buttons.module.scss'

const ButtonExit = ({text = 'Вийти'}, ...props) => {
    return (
        <div className={s.buttonExit}>
            <div className={s.buttonExit__icon}>
                <img src={exitIcon} alt="exitIcon"/>
            </div>
            <span>{text}</span>
        </div>
    );
};

export default ButtonExit;