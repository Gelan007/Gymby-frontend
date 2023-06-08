import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";
import {PROGRAMS_FREE_ROUTE} from "../../../utils/routes/consts";

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