import React, {useRef} from 'react';
import s from './AddingCardPhotos.module.scss'
import zagluscha from '../../../assets/images/userCabinet/personalData/Revan.jpg'
import basketIcon from '../../../assets/images/general/icons/basketWhiteBackground.svg'

const PhotoCard = () => {

    return (
        <div className={s.photoCard}>
            {/*карточка с фоткой и урной справа сверху*/}
            <img src={zagluscha} alt="user photo"/>
            <div className={s.basketIcon}>
                <img src={basketIcon} alt="basket"/>
            </div>
        </div>
    );
};

export default PhotoCard;