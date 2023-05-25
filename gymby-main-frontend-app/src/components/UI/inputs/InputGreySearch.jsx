import React from 'react';
import s from './Inputs.module.scss'
import magnifierIcon from '../../../assets/images/general/icons/searchMagnifier.svg'

const InputGreySearch = (props) => {
    return (
        <input className={`${s.inputGreySearch} ${s.inputGreySearch__magnifier}`}
               style={{backgroundImage: `url(${magnifierIcon})`}}
               {...props}/>
    );
};

export default InputGreySearch;