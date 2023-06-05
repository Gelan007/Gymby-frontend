import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import s from './ProgramsProgramProfile.module.scss'
import ProgramsProgramLeftPanel from "./leftPanel/ProgramsProgramLeftPanel";
import defaultProgramPhoto from "../../../assets/images/programs/man.png"
import ProgramsMark from "../card/programsMark/ProgramsMark";
import ButtonOrange from "../../UI/buttons/ButtonOrange";
import ProgramsProgramDescription from "./description/ProgramsProgramDescription";
import ProgramsProgramDay from "./day/ProgramsProgramDay";
import {getAllExercisesPrototype, updateProgram} from "../../../redux/slices/program-slice";


const ProgramsProgramProfile = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                    setIsProgramEditing, isProgramAccessibleToEdit, createProgramDay, getProgramById,
                                    deleteProgramDay, updateProgramDay,createExercise, getAllExercisesPrototype, exercisesPrototype,
                                    exerciseCreationData, setExerciseCreationData, updateProgram, ...props}) => {

    const [inputUserData, setInputUserData] = useState({name:'', description:'', level: '', type: ''})

    const titleChangeHandler = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setInputUserData({...inputUserData, name: inputValue});
        }
    }

    return (
        <div>
        {selectedDay === 0 ?
            <ProgramsProgramDescription isProgramAccessibleToEdit={isProgramAccessibleToEdit} program={program}
                                        programId={programId} selectedDay={selectedDay}
                                        setIsProgramEditing={setIsProgramEditing} setSelectedDay={setSelectedDay}
                                        isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                        getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                        updateProgramDay={updateProgramDay} updateProgram={updateProgram}
                                        inputUserData={inputUserData} setInputUserData={setInputUserData}
                                        titleChangeHandler={titleChangeHandler}
            />
            :
            <ProgramsProgramDay isProgramAccessibleToEdit={isProgramAccessibleToEdit} program={program}
                                selectedDay={selectedDay} setSelectedDay={setSelectedDay}
                                setIsProgramEditing={setIsProgramEditing} programId={programId}
                                isProgramEditing={isProgramEditing} createProgramDay={createProgramDay}
                                getProgramById={getProgramById} deleteProgramDay={deleteProgramDay}
                                updateProgramDay={updateProgramDay} createExercise={createExercise}
                                getAllExercisesPrototype={getAllExercisesPrototype} exercisesPrototype={exercisesPrototype}
                                exerciseCreationData={exerciseCreationData} setExerciseCreationData={setExerciseCreationData}
                                inputUserData={inputUserData} setInputUserData={setInputUserData} titleChangeHandler={titleChangeHandler}
                                updateProgram={updateProgram} {...props}
            />
        }
        </div>
    );
};

export default ProgramsProgramProfile;