import React, {useState} from 'react';
import ModalWindow from "../ModalWindow";
import s from './ConfirmationModalWindow.module.scss'
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import dumbbell from '../../../../assets/images/general/dumbbell.svg'
import ButtonRed from "../../../UI/buttons/ButtonRed";
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import { useTranslation } from 'react-i18next';

const ConfirmationModalWindow = ({isActive, setActive, titleText, titleIcon = dumbbell, children, applyButtonRequest, firstParameterForApplyButton}) => {
    const {t} = useTranslation();
    
    const applyButtonHandler = () => {
        setActive(false);
        if(firstParameterForApplyButton) {
            applyButtonRequest(firstParameterForApplyButton);
        } else {
            applyButtonRequest()
        }
    }

    return (
       <ModalWindow transitionDuration={0.05} isActive={isActive} setActive={setActive} widthVW={42}>
           <div className={s.confirmationModal}>
               <div className={s.topBlock}>
                   <div className={s.close}
                        onClick={() => setActive(false)}
                   >
                       <img src={closeIcon} alt="close"/>
                   </div>
               </div>
               <div className={s.centralBlock}>
                   <div className={s.centralBlock__titleBlock}>
                       <div className={s.centralBlock__icon}>
                           <img src={titleIcon} alt="icon"/>
                       </div>
                       <div className={s.centralBlock__title}>
                           {titleText}
                       </div>
                   </div>
                   <div className={s.centralBlock__content}>
                       {/*wrap in a <span></span> what you want to highlight*/}
                       {children}
                   </div>
               </div>
               <div className={s.bottomBlock}>
                   <div className={s.bottomBlock__buttons}>
                       <ButtonRed onClick={() => setActive(false)}>{t("general.confirmationModalWindow.no")}</ButtonRed>
                       <ButtonGreen onClick={applyButtonHandler}>{t("general.confirmationModalWindow.yes")}</ButtonGreen>
                   </div>
               </div>

           </div>
       </ModalWindow>
    );
};

export default ConfirmationModalWindow;