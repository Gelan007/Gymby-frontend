import React from 'react';
import s from './AddingCardPhotos.module.scss'
import plusIcon from '../../../assets/images/general/icons/plus.svg'

const AddingCard = () => {
    return (
        <div className={s.addingCard}>
            {/*карточка добавления с плюсиком и по нажатию на неё можно выбрать фотку из компа.(чат джп или же
            с прошлой админки можно посмотреть как делать)*/}
            <img src={plusIcon} alt="plus"/>
        </div>
    );
};

export default AddingCard;