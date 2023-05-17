import React from 'react';
import ProgramsLeftPanel from "../leftPanel/ProgramsLeftPanel";
import s from './ProgramsTemplate.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import ButtonGreen from "../../UI/buttons/ButtonGreen";


const ProgramsTemplate = ({children}) => {
    return (
        <div className={s.programs}>
            <ProgramsLeftPanel/>
            <div className={s.programs__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={s.navBlock__button}>
                        <ButtonGreen>Створити програму</ButtonGreen>
                    </div>
                </div>
                <div className={s.cards}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProgramsTemplate;