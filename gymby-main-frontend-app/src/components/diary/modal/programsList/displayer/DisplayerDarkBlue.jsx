import React from 'react';
import s from './Displayer.module.scss'

const DisplayerDarkBlue = ({children}) => {
    return (
        <div className={s.displayerDarkBlue}>
            <div className={s.displayerDarkBlue__content}>
                {children}
            </div>
        </div>
    );
};

export default DisplayerDarkBlue;