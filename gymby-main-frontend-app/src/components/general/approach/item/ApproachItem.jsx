import React from 'react';
import s from './ApproachItem.module.scss'
import topArrow from '../../../../assets/images/approach/topArrow.svg'
import bottomArrow from '../../../../assets/images/approach/bottomArrow.svg'
import basket from '../../../../assets/images/general/icons/basketWhiteBackground2.svg'
import checkboxDisabled from '../../../../assets/images/approach/checkBoxDisabled.svg'
import checkboxEnabled from '../../../../assets/images/approach/checkBoxEnabled.svg'


/*когда буду добавлять состояние для checkbox добавить условие, что если false то тогда
* отображаем checkboxDisabled иначе checkboxEnabled*/
/*onClick для стрелочек вешать на само изображение а не на блок*/
const ApproachItem = ({isWeight = false, isMark = false, isBasket = false, numeration = 1, isEditMode}, ...props) => {
    return (
        <div className={s.approachItem}>
            <div className={`${s.numeration} ${s.text}`}>
                {numeration}.
            </div>
            <div className={s.customizableBlock}>
                <div className={isWeight ? `${s.customizableBlock__content}` : `${s.customizableBlock__content} ${s.invisibility}`}>
                    <div className={`${s.customizableBlock__value} ${s.text}`}>
                        100 кг
                    </div>
                    <div className={s.customizableBlock__arrowsBlock}>
                        <div className={s.topArrow}>
                            <img src={topArrow} alt="top arrow"/>
                        </div>
                        <div className={s.bottomArrow}>
                            <img src={bottomArrow} alt="bottom arrow"/>
                        </div>
                    </div>
                </div>
                <div className={s.customizableBlock__content}>
                    <div className={`${s.customizableBlock__value} ${s.text}`}>
                        12 пвт
                    </div>
                    <div className={s.customizableBlock__arrowsBlock}>
                        <div className={s.topArrow}>
                            <img src={topArrow} alt="top arrow"/>
                        </div>
                        <div className={s.bottomArrow}>
                            <img src={bottomArrow} alt="bottom arrow"/>
                        </div>
                    </div>
                </div>
                <div className={`${s.customizableBlock__time} ${s.text}`}> 1мин. 30сек.</div>
            </div>
            <div className={s.iconsBlock}>
                <div className={isMark ? `${s.iconsBlock__checkbox}` : `${s.iconsBlock__checkbox} ${s.invisibility}`}>
                    <img src={checkboxDisabled} alt="checkbox"/>
                </div>
                {isEditMode ?
                    <div className={isBasket ? `${s.iconsBlock__basket}` : `${s.iconsBlock__basket} ${s.invisibility}`}>
                        <img src={basket} alt="basket"/>
                    </div>
                    :
                    <div className={`${s.editModeIcon}`}>
                        <img src={basket} alt="basket"/>
                    </div>
                }

            </div>
        </div>
    );
};

export default ApproachItem;