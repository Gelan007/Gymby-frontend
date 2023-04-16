import React, {useState} from 'react';
import s from './Inputs.module.scss'
import magnifierIcon from '../../../assets/images/general/icons/searchMagnifier.svg'

const InputGrey = (props) => {
    return (
        <input className={s.inputGrey} {...props}/>
    );
};

export default InputGrey;