import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";
import {PROGRAMS_FREE_ROUTE} from "../../../utils/routes/consts";

const ProgramsFree = () => {
    return (
        <div>
            <ProgramsTemplate programRoute={PROGRAMS_FREE_ROUTE}/>
        </div>
    );
};

export default ProgramsFree;