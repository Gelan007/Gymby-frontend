import React, {useState} from 'react';
import ProgramsLeftPanel from "../leftPanel/ProgramsLeftPanel";
import s from './ProgramsTemplate.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import ProgramsCard from "../card/ProgramsCard";
import {Grid} from "@mui/material";
import ConfirmationModalWindow from "../../general/modalWindow/confirmation/ConfirmationModalWindow";
import {NavLink} from "react-router-dom";
import {PROGRAMS_PROGRAM_PROFILE_ROUTE, PROGRAMS_ROUTE, urlPathForProgramCreation} from "../../../utils/routes/consts";
import { useTranslation } from 'react-i18next';


const ProgramsTemplate = ({programs, isButtonShow= false, isDeleteIcon, createProgram,
                              userName, deleteProgram, getPersonalPrograms}) => {

    const {t} = useTranslation();
    const [isModalActive, setIsModalActive] = useState(false);
    const modalHandler = () => isModalActive ? setIsModalActive(false) : setIsModalActive(true)
    const modalWindowTitleText = t("programs.modalWindow.title")

    /*надо будет заменить на store*/
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedProgramId, setSelectedProgramId] = useState('');
    const handleCreateProgramButton = () => {
        createProgram({userName, userProgramsCount: programs?.length, dayName: t("programs.programDescription.leftPanel.day")})
    }


    return (
        <div className={s.programs}>
            <ProgramsLeftPanel/>
            <div className={s.programs__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__input}>
                        <InputGreySearch placeholder="Пошук"/>
                    </div>
                    <div className={isButtonShow ? `${s.navBlock__button}` : `${s.navBlock__button} ${s.disable}`}
                         onClick={() => handleCreateProgramButton()}>
                        {/*<NavLink to={`${PROGRAMS_ROUTE}${urlPathForProgramCreation}`}>*/}
                            <ButtonGreen>{t("programs.createProgram")}</ButtonGreen>
                       {/* </NavLink>*/}
                    </div>
                </div>
                <div className={s.cards}>
                    <Grid container spacing={2}>
                        {programs?.map(((program, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <NavLink to={`${PROGRAMS_ROUTE}/${program.programId}`}>
                                    <ProgramsCard isDeleteIcon={isDeleteIcon}
                                                  title={program.name}
                                                  marks={program.marks}
                                                  modalHandler={modalHandler}
                                                  setSelectedProgram={setSelectedProgram}
                                                  setSelectedProgramId={setSelectedProgramId}
                                                  programId={program.programId}
                                                  getPersonalPrograms={getPersonalPrograms}
                                    />
                                </NavLink>
                            </Grid>
                        )))}
                    </Grid>
                </div>
            </div>
            <ConfirmationModalWindow isActive={isModalActive}
                                     setActive={setIsModalActive}
                                     titleText={modalWindowTitleText}
                                     applyButtonRequest={deleteProgram}
                                     firstParameterForApplyButton={selectedProgramId}
            >
                {t("programs.modalWindow.text")} <span>{selectedProgram}</span> ?
            </ConfirmationModalWindow>
        </div>
    );
};

export default ProgramsTemplate;