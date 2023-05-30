import React from 'react';
import s from './AddingCardPhotos.module.scss'
import plusIcon from '../../../assets/images/general/icons/plus.svg'

const AddingCard = ({handleFileChange}) => {
    return (
        <div className={s.addingCard}>
            <img src={plusIcon} alt="plus"/>
            <input type="file" onChange={(e) => handleFileChange(e)} className={s.addingCard__input}/>
        </div>
    );
};

export default AddingCard;