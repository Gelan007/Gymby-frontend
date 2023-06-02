import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";
import {PROGRAMS_FREE_ROUTE} from "../../../utils/routes/consts";

const ProgramsFree = ({programs}) => {
    return (
        <div>
            <ProgramsTemplate programs={programs}/>
        </div>
    );
};

export default ProgramsFree;