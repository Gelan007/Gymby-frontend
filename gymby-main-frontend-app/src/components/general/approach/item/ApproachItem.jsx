import React, {useEffect, useState, useTransition} from 'react';
import s from './ApproachItem.module.scss'
import topArrow from '../../../../assets/images/approach/topArrow.svg'
import bottomArrow from '../../../../assets/images/approach/bottomArrow.svg'
import basket from '../../../../assets/images/general/icons/basketWhiteBackground2.svg'
import checkboxDisabled from '../../../../assets/images/approach/checkBoxDisabled.svg'
import checkboxEnabled from '../../../../assets/images/approach/checkBoxEnabled.svg'
import InputGrey from "../../../UI/inputs/InputGrey";
import {useTranslation} from "react-i18next";


/*когда буду добавлять состояние для checkbox добавить условие, что если false то тогда
* отображаем checkboxDisabled иначе checkboxEnabled*/
/*onClick для стрелочек вешать на само изображение а не на блок*/
const ApproachItem = ({isWeight = false, isMark = false,
                          isBasket = false, numeration = 1,
                          isEditMode, isDrawControlIcons, approach, deleteApproach, exerciseId, programId,
                          updateApproach, diaryDate, diaryId, diaryApproachId}) => {

    const [inputData, setInputData] = useState({repeats: 0, weight: 0, isDone: false})
    const [finalApproachId, setFinalApproachId] = useState()
    const {t} = useTranslation()

    useEffect(() => {
        setInputData({...inputData, repeats: approach.repeats, weight: approach.weight,isDone: approach.isDone})
    }, [approach.repeats,approach.weight,approach.isDone ])

    useEffect(() => {
        if(approach.approachId) {
            setFinalApproachId(approach.approachId)
        } else if (diaryApproachId) {
            setFinalApproachId(diaryApproachId)
        }

    }, [diaryApproachId,approach.approachId])

    const deleteApproachItemHandler = () => {
        deleteApproach({
            exerciseId,
            programId,
            approachId: finalApproachId,
            date: diaryDate, diaryId,
        })
    }
    const updateApproachItemHandler = (repeats, weight) => {
        if (repeats && inputData.repeats <= 2000) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats: inputData.repeats,
                weight: inputData.weight,
                isDone: inputData.isDone,
                date: diaryDate, diaryId
            })
        } else if (weight && inputData.weight <= 1000) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats: inputData.repeats,
                weight: inputData.weight,
                isDone: inputData.isDone,
                date: diaryDate, diaryId
            })
        }
    }
    const updateApproachItemTopArrowHandler = (repeats, weight) => {
        if(repeats && inputData.repeats <= 2000) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats + 1,
                weight: inputData.weight,
                isDone: inputData.isDone,
                date:diaryDate, diaryId
            })
        } else if (weight && inputData.weight <= 1000) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats,
                weight: inputData.weight + 1,
                isDone: inputData.isDone,
                date:diaryDate, diaryId
            })
        }
    }
    const updateApproachItemBottomArrowHandler = (repeats, weight) => {
        if(repeats && inputData.repeats > 0) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats - 1,
                weight: inputData.weight,
                isDone: inputData.isDone,
                date:diaryDate, diaryId
            })
        } else if (weight && inputData.weight > 0) {
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats,
                weight: inputData.weight - 1,
                isDone: inputData.isDone,
                date:diaryDate, diaryId
            })
        }
    }

    const weightInputChangeHandler = (e) => {
        const numbers = /^[0-9\b]+$/; // Регулярное выражение для проверки на цифры
        const inputValue = e.target.value;

        if (inputValue === '' || numbers.test(inputValue)) {
            if(inputData.weight <= 1000) {
                setInputData({...inputData, weight: inputValue})
            } else if (inputData.weight >= 1000){
                setInputData({...inputData, weight: approach.weight})
            }
        }
    }
    const repeatsInputChangeHandler = (e) => {
        const decimalNumbers = /^\d*\.?\d*$/; // Регулярное выражение для проверки на числа с десятичной точкой
        const inputValue = e.target.value;

        if (inputValue === '' || decimalNumbers.test(inputValue)) {
            if(inputData.repeats <= 2000) {
                setInputData({...inputData, repeats: inputValue})
            } else if (inputData.repeats >= 2000){
                setInputData({...inputData, repeats: approach.repeats})
            }
        }
    }

    const checkBoxOnClickHandler = () => {
        if(inputData.isDone) {
            setInputData({...inputData, isDone: false})
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats,
                weight: inputData.weight,
                isDone: false,
                date:diaryDate, diaryId
            })
        } else if (!inputData.isDone) {
            setInputData({...inputData, isDone: true})
            updateApproach({
                exerciseId,
                programId,
                approachId: finalApproachId,
                repeats:inputData.repeats,
                weight: inputData.weight,
                isDone: true,
                date:diaryDate, diaryId
            })
        }
    }

    return (
        <div className={inputData.isDone && `${s.approachItem} ${s.approachItem_done}` ||  s.approachItem}>
            <div className={inputData.isDone && `${s.numeration} ${s.text} ${s.textDone}` || `${s.numeration} ${s.text}`}>
                {numeration}.
            </div>
            <div className={s.customizableBlock}>
                <div className={isWeight ? `${s.customizableBlock__content}` : `${s.customizableBlock__content} ${s.invisibility}`}>
                    {isEditMode ?
                        <div className={`${s.customizableBlock__value} ${s.text}`}>
                            <InputGrey style={{height: '30px', width: '70px'}}
                                       onChange={(e) => weightInputChangeHandler(e)}
                                       value={inputData.weight}
                                       onBlur={() => updateApproachItemHandler(false, true)}
                            /> кг
                        </div>
                        :
                        <div className={inputData.isDone && `${s.customizableBlock__value} ${s.text} ${s.textDone}` || `${s.customizableBlock__value} ${s.text}`}>
                            {inputData.weight} {t("approach.kg")}
                        </div>
                    }

                    {isDrawControlIcons &&
                        <div className={s.customizableBlock__arrowsBlock}>
                            <div className={s.topArrow} onClick={() => updateApproachItemTopArrowHandler(false, true)}>
                                <img src={topArrow} alt="top arrow"/>
                            </div>
                            <div className={s.bottomArrow} onClick={() => updateApproachItemBottomArrowHandler(false, true)}>
                                <img src={bottomArrow} alt="bottom arrow"/>
                            </div>
                        </div>
                    }

                </div>
                <div className={s.customizableBlock__content}>
                    {isEditMode ?
                        <div className={`${s.customizableBlock__value} ${s.text}`}>
                            <InputGrey style={{height: '30px', width: '70px'}}
                                       onChange={(e) => repeatsInputChangeHandler(e)}
                                       value={inputData.repeats}
                                       onBlur={() => updateApproachItemHandler(true, false)}
                            />  {t("approach.repeats")}
                        </div>
                        :
                        <div className={inputData.isDone && `${s.customizableBlock__value} ${s.text} ${s.textDone}` || `${s.customizableBlock__value} ${s.text}`}>
                            {inputData.repeats} {t("approach.repeats")}
                        </div>
                    }
                    {isDrawControlIcons &&
                        <div className={s.customizableBlock__arrowsBlock}>
                            <div className={s.topArrow} onClick={() => updateApproachItemTopArrowHandler(true, false)}>
                                <img src={topArrow} alt="top arrow"/>
                            </div>
                            <div className={s.bottomArrow} onClick={() => updateApproachItemBottomArrowHandler(true, false)}>
                                <img src={bottomArrow} alt="bottom arrow"/>
                            </div>
                        </div>
                    }
                </div>
                {/*<div className={`${s.customizableBlock__time} ${s.text}`}> 1мин. 30сек.</div>*/}
            </div>

                <div className={s.iconsBlock}>
                    <div className={isMark ? `${s.iconsBlock__checkbox}` : `${s.iconsBlock__checkbox} ${s.invisibility}`}
                         onClick={checkBoxOnClickHandler}
                    >
                        <img src={!inputData.isDone ? checkboxDisabled : checkboxEnabled} alt="checkbox"/>
                    </div>
                    {isEditMode ?
                        <div className={isBasket ? `${s.iconsBlock__basket}` : `${s.iconsBlock__basket} ${s.invisibility}`}
                        style={!isDrawControlIcons ? {display: 'none'} : {}}
                             onClick={deleteApproachItemHandler}
                        >
                            <img src={basket} alt="basket"/>
                        </div>
                        :
                        <div className={`${s.editModeIcon}`} style={!isDrawControlIcons ? {display: 'none'} : {}}>
                            <img src={basket} alt="basket"/>
                        </div>
                    }
                </div>

        </div>
    );
};

export default ApproachItem;