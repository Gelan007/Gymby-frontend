import React, {useState} from 'react';
import ProgramsProgramDescription from "./description/ProgramsProgramDescription";
import ProgramsProgramDay from "./day/ProgramsProgramDay";


const ProgramsProgramProfile = ({program, programId, selectedDay, setSelectedDay, isProgramEditing,
                                    setIsProgramEditing, isProgramAccessibleToEdit, createProgramDay, getProgramById,
                                    deleteProgramDay, updateProgramDay,createExercise, getAllExercisesPrototype, exercisesPrototype,
                                    exerciseCreationData, setExerciseCreationData, updateProgram,isFreePrograms, ...props}) => {

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