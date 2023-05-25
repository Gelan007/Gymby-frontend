import React, {useState} from 'react';
import ApproachItem from "./item/ApproachItem";
import plug from '../../../assets/images/measurements/biceps.svg';
import basket from '../../../assets/images/general/icons/basketWhiteBackground2.svg'
import editIcon from '../../../assets/images/general/icons/editIcon.png'
import s from './Approach.module.scss'

const Approach = ({isDrawControlIcons = true, isWeight = true, isMark = true, isBasket = true}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const editModeHandler = () => isEditMode ?  setIsEditMode(false) : setIsEditMode(true);



    return (
        <div className={s.approach}>
            <div className={s.topBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>
                    Жим штанги лежачи - накл
                </div>
                {isDrawControlIcons &&
                    <div className={s.iconsControl}>
                        <div className={isEditMode ? `${s.editButton} ${s.editButton_mode}` : `${s.editButton}`}
                             onClick={editModeHandler}>
                            <img src={editIcon} alt="edit"/>
                        </div>
                        {isEditMode ?
                            <div className={s.basket}
                                 onClick={() => {}}
                            >
                                <img src={basket} alt="basket"/>
                            </div>
                            :
                            <div className={`${s.editModeIcon}`}>
                                <img src={basket} alt="basket"/>
                            </div>
                        }
                    </div>
                }
            </div>
            <div className={s.itemsBlock}>
                <ApproachItem isWeight={isWeight} isMark={isMark} isBasket={isBasket} isEditMode={isEditMode} isDrawControlIcons={isDrawControlIcons}/>
                <ApproachItem isWeight={isWeight} isMark={isMark} isBasket={isBasket} isEditMode={isEditMode} isDrawControlIcons={isDrawControlIcons}/>
                <ApproachItem isWeight={isWeight} isMark={isMark} isBasket={isBasket} isEditMode={isEditMode} isDrawControlIcons={isDrawControlIcons}/>
            </div>
        </div>
    );
};

export default Approach;