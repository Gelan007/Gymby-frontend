import React, {useState} from 'react';
import s from './ProgramsCard.module.scss'
import ProgramsMark from "./programsMark/ProgramsMark";
import closeIcon from '../../../assets/images/general/icons/closeWhite.svg'
import ConfirmationModalWindow from "../../general/modalWindow/confirmation/ConfirmationModalWindow";


const ProgramsCard = ({title, marks, isDeleteIcon= false, modalHandler, setSelectedProgram}) => {

    const deleteHandler = (e) => {
        e.preventDefault()
        // e.stopPropagation()
        modalHandler();
        setSelectedProgram(title)
    }

    return (
        <div className={s.card}>
            <div className={s.card__body}>
                {isDeleteIcon &&
                    <div className={s.card__closeIcon} onClick={(e) => deleteHandler(e)}>
                        <img src={closeIcon} alt="delete"/>
                    </div>
                }
                <div className={s.card__text}>
                    {title}
                </div>
                <div className={s.marksBlock}>
                    {marks.map((mark, key) => (
                        <ProgramsMark text={mark} key={key}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsCard;