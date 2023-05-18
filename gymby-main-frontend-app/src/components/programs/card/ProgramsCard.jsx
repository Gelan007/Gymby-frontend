import React, {useState} from 'react';
import s from './ProgramsCard.module.scss'
import ProgramsMark from "./programsMark/ProgramsMark";
import closeIcon from '../../../assets/images/general/icons/closeWhite.svg'
import ConfirmationModalWindow from "../../general/modalWindow/confirmation/ConfirmationModalWindow";


const ProgramsCard = ({title, marks, isDeleteIcon= false, modalHandler, setSelectedProgram}) => {

    const deleteHandler = () => {
        modalHandler();
        setSelectedProgram(title)
    }

    return (
        <div className={s.card}>
            <div className={s.card__body}>
                {isDeleteIcon &&
                    <div className={s.card__closeIcon} onClick={() => deleteHandler()}>
                        <img src={closeIcon} alt="delete"/>
                    </div>
                }
                <div className={s.card__text}>
                    {title}
                </div>
                <div className={s.marksBlock}>
                    {marks.map(mark => (
                        <ProgramsMark text={mark}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsCard;