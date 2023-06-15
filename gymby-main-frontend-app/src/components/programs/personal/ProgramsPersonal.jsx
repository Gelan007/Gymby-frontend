import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";

const ProgramsPersonal = ({programs, createProgram, userName, deleteProgram, getPersonalPrograms, isCoach}) => {
    return (
        <div>
            <ProgramsTemplate isButtonShow={true} isDeleteIcon={true} programs={programs}
                              createProgram={createProgram} userName={userName} deleteProgram={deleteProgram}
                              getPersonalPrograms={getPersonalPrograms} isCoach={isCoach} isPersonalPrograms={true}
            />
        </div>
    );
};

export default ProgramsPersonal;