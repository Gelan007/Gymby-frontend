import React from 'react';
import s from './DiaryModalWindowTemplate.module.scss'
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg"
import ButtonGreen from "../../../UI/buttons/ButtonGreen";

const DiaryModalWindowTemplate = ({isActive, setActive, children, buttonName = 'Add'}) => {
    return (
        <ModalWindow isActive={isActive} setActive={setActive}>
            <div className={s.diaryModalWindowTemplate}>
                <div className={s.topBlock}>
                    <div className={s.search}>
                        <InputGreySearch placeholder="пошук"/>
                    </div>
                    <div className={s.date}>
                        22.11.2022р.
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

export default DiaryModalWindowTemplate;