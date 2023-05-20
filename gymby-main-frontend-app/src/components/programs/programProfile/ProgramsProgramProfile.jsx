import React from 'react';
import {useParams} from "react-router-dom";
import s from './ProgramsProgramProfile.module.scss'
import ProgramsProgramLeftPanel from "./leftPanel/ProgramsProgramLeftPanel";

const ProgramsProgramProfile = ({program, ...props}) => {


    return (
        <div className={s.program}>
            <div className={s.program__title}>
                Загальний опис тренувальної програми
            </div>
            <div className={s.hrContainer}><hr className={s.hr}/></div>
            <div className={s.program__container}>
                <ProgramsProgramLeftPanel daysCount={program?.days.length}/>
                <div className={s.program__body}>

                </div>
            </div>

        </div>
    );
};

export default ProgramsProgramProfile;