import React from 'react';
import s from './DiaryModalWindowTemplate.module.scss'
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg"

const DiaryModalWindowTemplate = ({isActive, setActive, children}) => {
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
                    <div className={s.close}>
                        <img src={closeIcon} alt="close"/>
                    </div>
                </div>
                <div className={s.bottomBlock}>
                    {children}
                </div>
            </div>
        </ModalWindow>
    );
};

export default DiaryModalWindowTemplate;