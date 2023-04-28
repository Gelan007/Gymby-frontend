import React from 'react';
import s from './ModalWindow.module.scss'


const ModalWindow = ({isActive = false, setActive = false, children}) => {
    return (
        <div className={isActive ? `${s.modal} ${s.active}` : `${s.modal}`}
             onClick={() => setActive(false)}
        >
            <div className={isActive ? `${s.modal__content} ${s.active}` : `${s.modal__content}`}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
