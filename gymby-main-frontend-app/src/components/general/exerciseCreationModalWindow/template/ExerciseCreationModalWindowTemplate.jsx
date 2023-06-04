import React from 'react';
import s from './ExerciseCreationModalWindowTemplate.module.scss'
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg"
import ButtonGreen from "../../../UI/buttons/ButtonGreen";

const ExerciseCreationModalWindowTemplate = ({isActive, setActive, children, buttonName = 'Add'}) => {
    return (
        <ModalWindow isActive={isActive} setActive={setActive}>
            <div className={s.exerciseCreationModalWindowTemplate}>
                <div className={s.topBlock}>
                    <div className={s.search}>
                        <InputGreySearch placeholder="пошук"/>
                    </div>
                    <div className={s.close}
                         onClick={() => setActive(false)}
                    >
                        <img src={closeIcon} alt="close"/>
                    </div>
                </div>
                <div className={s.bottomBlock}>
                    {children}
                </div>
                <div className={s.button}>
                    <ButtonGreen>{buttonName}</ButtonGreen>
                </div>
            </div>
        </ModalWindow>
    );
};

export default ExerciseCreationModalWindowTemplate;