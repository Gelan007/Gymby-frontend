import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";

const ProgramsTrainerBased = ({programs}) => {
    return (
        <div>
            <ProgramsTemplate isDeleteIcon={true} programs={programs}/>
        </div>
    );
};

export default ProgramsTrainerBased;