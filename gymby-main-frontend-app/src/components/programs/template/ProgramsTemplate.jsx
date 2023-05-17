import React from 'react';
import ProgramsLeftPanel from "../leftPanel/ProgramsLeftPanel";
import s from './ProgramsTemplate.module.scss'
import InputGreySearch from "../../UI/inputs/InputGreySearch";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import ProgramsCard from "../card/ProgramsCard";
import {Grid} from "@mui/material";

//*Этот массив вообще удалить потом, и оставить просто programs = [] - НО НАВЕРНОЕ ВСЕ ТАКИ ПРОСТО programs И ВСЁ*
const defaultTestProgramsArray = [
    {title: '4-недільна програма на масу від Івана', marks: ['ектоморф', 'набір маси', 'середній']},
    {title: '5-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'складний']},
    {title: '6-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'середній']},
    {title: '6-недільна програма на масу', marks: ['ектоморф', 'набір маси', 'середній']},
]
const ProgramsTemplate = ({programs = defaultTestProgramsArray}) => {
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
                    <Grid container spacing={2}>
                        {programs?.map(((program, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProgramsCard title={program.title} marks={program.marks}/>
                            </Grid>
                        )))}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default ProgramsTemplate;