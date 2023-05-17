import React from 'react';
import s from './ProgramsCard.module.scss'
import ProgramsMark from "./programsMark/ProgramsMark";

const ProgramsCard = ({title, marks}) => {
    return (
        <div className={s.card}>
            <div className={s.card__body}>
                <div className={s.card__text}>
                    {title}
                </div>
                <div className={s.marksBlock}>
                    {marks.map(mark => (
                        <ProgramsMark mark={mark}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsCard;