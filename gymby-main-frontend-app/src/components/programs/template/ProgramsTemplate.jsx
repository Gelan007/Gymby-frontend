import React, {useState} from 'react';
import ProgramsLeftPanel from "../leftPanel/ProgramsLeftPanel";
import s from './ProgramsTemplate.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import ProgramsCard from "../card/ProgramsCard";
import {Grid} from "@mui/material";
import ConfirmationModalWindow from "../../general/modalWindow/confirmation/ConfirmationModalWindow";


//*Этот массив вообще удалить потом, и оставить просто programs = [] - НО НАВЕРНОЕ ВСЕ ТАКИ ПРОСТО programs И ВСЁ*
const defaultTestProgramsArray = [
    {title: '4-недільна програма на масу від Івана', marks: ['ектоморф', 'набір маси', 'середній']},
    {title: '5-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'просунутий', 'параметр']},
    {title: '6-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'середній']},
    {title: '6-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'середній']},
]
const ProgramsTemplate = ({programs = defaultTestProgramsArray, isButtonShow= false, isDeleteIcon}) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const modalHandler = () => isModalActive ? setIsModalActive(false) : setIsModalActive(true)
    const modalWindowTitleText = 'Видалення програми'

    /*надо будет заменить на store*/
    const [selectedProgram, setSelectedProgram] = useState('');

    return (
        <div className={s.programs}>
            <ProgramsLeftPanel/>
            <div className={s.programs__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={isButtonShow ? `${s.navBlock__button}` : `${s.navBlock__button} ${s.disable}`}>
                        <ButtonGreen>Створити програму</ButtonGreen>
                    </div>
                </div>
                <div className={s.cards}>
                    <Grid container spacing={2}>
                        {programs?.map(((program, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProgramsCard isDeleteIcon={isDeleteIcon}
                                              title={program.title}
                                              marks={program.marks}
                                              modalHandler={modalHandler}
                                              setSelectedProgram={setSelectedProgram}
                                />
                            </Grid>
                        )))}
                    </Grid>
                </div>
            </div>
            <ConfirmationModalWindow isActive={isModalActive}
                                     setActive={setIsModalActive}
                                     titleText={modalWindowTitleText}
            >
                {/*чтоб смочь выделить при переводе i18n, просто разбить на 2 разные части*/}
                Ви дійсно бажаєте видалити <span>{selectedProgram}</span> ?
            </ConfirmationModalWindow>
        </div>
    );
};

export default ProgramsTemplate;