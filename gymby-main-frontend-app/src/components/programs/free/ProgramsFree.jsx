import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";

const ProgramsFree = ({programs}) => {
    return (
        <div>
            <ProgramsTemplate programs={programs} isFreePrograms={true}/>
        </div>
    );
};

export default ProgramsFree;