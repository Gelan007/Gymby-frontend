import React, {useRef} from 'react';
import s from './AddingCardPhotos.module.scss'
import plug from '../../../assets/images/userCabinet/personalData/Revan.jpg'
import basketIcon from '../../../assets/images/general/icons/basketWhiteBackground.svg'

const PhotoCard = ({allPhotoData, photoToDisplaying, handlePhotoDelete}) => {
    return (
        <div className={s.photoCard}>
            <img src={photoToDisplaying} alt="user photo"/>
            <div className={s.basketIcon} onClick={() => handlePhotoDelete(allPhotoData)}>
                <img src={basketIcon} alt="basket"/>
            </div>
        </div>
    );
};

export default PhotoCard;