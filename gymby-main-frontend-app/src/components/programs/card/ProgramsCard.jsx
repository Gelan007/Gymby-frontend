import React, {useState} from 'react';
import s from './ProgramsCard.module.scss'
import ProgramsMark from "./programsMark/ProgramsMark";
import closeIcon from '../../../assets/images/general/icons/closeWhite.svg'


const ProgramsCard = ({title, marks, isDeleteIcon= false, modalHandler, setSelectedProgram,
                          setSelectedProgramId, programId,getPersonalPrograms}) => {

    const deleteHandler = (e) => {
        e.preventDefault()
        // e.stopPropagation()
        modalHandler();
        setSelectedProgram(title)
        setSelectedProgramId(programId)
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