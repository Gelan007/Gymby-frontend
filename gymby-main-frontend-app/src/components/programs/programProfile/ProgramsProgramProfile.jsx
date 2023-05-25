import React from 'react';
import {useParams} from "react-router-dom";
import s from './ProgramsProgramProfile.module.scss'
import ProgramsProgramLeftPanel from "./leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../assets/images/programs/man.png"
import ProgramsMark from "../card/programsMark/ProgramsMark";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import ProgramsProgramDescription from "./description/ProgramsProgramDescription";
import ProgramsProgramDay from "./day/ProgramsProgramDay";

const ProgramsProgramProfile = ({program, programId, selectedDay, setSelectedDay, ...props}) => {

    return (
        <div>
        {selectedDay === 0 ?
            <ProgramsProgramDescription program={program} programId={programId} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            :
            <ProgramsProgramDay program={program} selectedDay={selectedDay} setSelectedDay={setSelectedDay} programId={programId}/>
        }
        </div>
    );
};

export default ProgramsProgramProfile;