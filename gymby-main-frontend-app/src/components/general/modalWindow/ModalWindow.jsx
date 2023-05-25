import React from 'react';
import s from './ModalWindow.module.scss'


const ModalWindow = ({isActive = false, setActive = false, children, transitionDuration= '0.5', widthVW = 50}) => {
    return (
        <div className={isActive ? `${s.modal} ${s.active}` : `${s.modal}`}
             onClick={() => setActive(false)}
             style={{transition: `${transitionDuration}s`}}
        >
            <div className={isActive ? `${s.modal__content} ${s.active}` : `${s.modal__content}`}
                 onClick={e => e.stopPropagation()}
                 style={{width: `${widthVW}vw`}}
            >
                <div className={s.modal__content_overflowController}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
