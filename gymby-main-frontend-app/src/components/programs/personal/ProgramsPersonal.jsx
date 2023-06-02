import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";
import {PROGRAMS_FREE_ROUTE} from "../../../utils/routes/consts";

const ProgramsPersonal = ({programs}) => {
    return (
        <div>
            <ProgramsTemplate isButtonShow={true} isDeleteIcon={true} programs={programs}/>
        </div>
    );
};

export default ProgramsPersonal;