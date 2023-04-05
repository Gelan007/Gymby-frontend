import React from 'react';
import s from './Inputs.module.scss'

const InputGrey = (props) => {
    return (
        <input className={s.inputGrey} {...props}/>
    );
};

export default InputGrey;