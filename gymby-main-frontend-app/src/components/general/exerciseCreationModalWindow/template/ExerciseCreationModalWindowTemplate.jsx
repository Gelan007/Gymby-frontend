import React, {useEffect} from 'react';
import s from './ExerciseCreationModalWindowTemplate.module.scss'
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import InputGreySearch from "../../../UI/inputs/InputGreySearch";
import closeIcon from "../../../../assets/images/general/icons/closeBlack.svg"
import ButtonGreen from "../../../UI/buttons/ButtonGreen";
import {useTranslation} from "react-i18next";

const ExerciseCreationModalWindowTemplate = ({isActive, setActive, children, buttonName = 'Add',
                                                 createExercise, setCreationData,
                                                 creationData, userModalExerciseSearch, searchExercisesPrototype, setUserModalExerciseSearch}) => {
    const {t} = useTranslation()
    const handleCreateButton = () => {
        createExercise(creationData)
        setCreationData(
            {
                name: ''
            }
        )
        setActive(false)
    }

    return (
        <ModalWindow isActive={isActive} setActive={setActive}>
            <div className={s.exerciseCreationModalWindowTemplate}>
                <div className={s.topBlock}>
                    <div className={s.search}>
                        <InputGreySearch placeholder={t("general.search")}  onChange={event => setUserModalExerciseSearch(event.target.value)}
                                         value={userModalExerciseSearch}/>
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
                <div className={creationData.name === '' ? `${s.button} ${s.inactive}` : s.button}>
                    <ButtonGreen onClick={() => creationData.name === '' ?  alert('Будь-ласка, оберіть вправу') : handleCreateButton()}
                                 style={creationData.name === '' ? {cursor: 'initial'} : {cursor: 'pointer'}}>
                        {buttonName}
                    </ButtonGreen>
                </div>
            </div>
        </ModalWindow>
    );
};

export default ExerciseCreationModalWindowTemplate;