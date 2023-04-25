import React from 'react';
import ApproachItem from "./item/ApproachItem";
import plug from '../../../assets/images/measurements/biceps.svg';
import basket from '../../../assets/images/general/icons/basketWhiteBackground2.svg'
import s from './Approach.module.scss'

const Approach = (props) => {
    return (
        <div className={s.approach}>
            <div className={s.topBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>
                    Жим штанги лежачи - накл
                </div>
                <div className={s.basket}>
                    <img src={basket} alt="basket"/>
                </div>
            </div>
            <div className={s.itemsBlock}>
                <ApproachItem isWeight={true} isMark={true} isBasket={true}/>
                <ApproachItem isWeight={true} isMark={true} isBasket={true}/>
            </div>
        </div>
    );
};

export default Approach;