import React from 'react';
import {useParams} from "react-router-dom";
import s from './ProgramsProgramProfile.module.scss'
import ProgramsProgramLeftPanel from "./leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../assets/images/programs/man.png"
import ProgramsMark from "../card/programsMark/ProgramsMark";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import ProgramsProgramDescription from "./description/ProgramsProgramDescription";
import ProgramsProgramDay from "./day/ProgramsProgramDay";

const ProgramsProgramProfile = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                    setIsProgramEditing, isProgramAccessibleToEdit, createProgramDay, getProgramById,
                                    deleteProgramDay, updateProgramDay, ...props}) => {

    return (
        <div>
        {selectedDay === 0 ?
            <ProgramsProgramDescription isProgramAccessibleToEdit={isProgramAccessibleToEdit} program={program}
                                        programId={programId} selectedDay={selectedDay}
                                        setIsProgramEditing={setIsProgramEditing} setSelectedDay={setSelectedDay}
                                        isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                        getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                        updateProgramDay={updateProgramDay}
            />
            :
            <ProgramsProgramDay isProgramAccessibleToEdit={isProgramAccessibleToEdit} program={program}
                                selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                                setIsProgramEditing={setIsProgramEditing} programId={programId}
                                isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                updateProgramDay={updateProgramDay}
            />
        }
        </div>
    );
};

export default ProgramsProgramProfile;