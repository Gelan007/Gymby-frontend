import React, {useEffect, useState} from 'react';
import ApproachItem from "./item/ApproachItem";
import plug from '../../../assets/images/measurements/biceps.svg';
import basket from '../../../assets/images/general/icons/basketWhiteBackground2.svg'
import editIcon from '../../../assets/images/general/icons/editIcon.png'
import plusIcon from '../../../assets/images/general/icons/plus.svg'
import s from './Approach.module.scss'

const Approach = ({isDrawControlIcons = true, isWeight = true,
                      isMark = true, isBasket = true, exercise, exerciseName,
                      exerciseId, programId, createApproach}) =>
{
    const [isEditMode, setIsEditMode] = useState(false);
    const editModeHandler = () => isEditMode ?  setIsEditMode(false) : setIsEditMode(true);

    const addApproachItemHandler = () => {
        createApproach({
            exerciseId,
            programId
        })
    }


    return (
        <div className={s.approach}>
            <div className={s.topBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>
                    {exerciseName}
                </div>
                {isDrawControlIcons &&
                    <div className={s.iconsControl}>
                        <div className={isEditMode ? `${s.editButton} ${s.editButton_mode}` : `${s.editButton}`}
                             onClick={editModeHandler}>
                            <img src={editIcon} alt="edit"/>
                        </div>
                        <div className={`${s.plusButton}`}
                             onClick={addApproachItemHandler}>
                            <img src={plusIcon} alt="edit"/>
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
                {
                    exercise?.approaches?.map((approach, index) => (
                        <ApproachItem isWeight={isWeight} isMark={isMark}
                                      isBasket={isBasket} isEditMode={isEditMode}
                                      isDrawControlIcons={isDrawControlIcons} approach={approach}
                                      numeration={index + 1}
                        />
                    ))
                }
                {/*<ApproachItem isWeight={isWeight} isMark={isMark} isBasket={isBasket} isEditMode={isEditMode} isDrawControlIcons={isDrawControlIcons}/>
                <ApproachItem isWeight={isWeight} isMark={isMark} isBasket={isBasket} isEditMode={isEditMode} isDrawControlIcons={isDrawControlIcons}/>*/}
            </div>
        </div>
    );
};

export default Approach;