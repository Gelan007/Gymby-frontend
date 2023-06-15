import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";

const ProgramsFree = ({programs}) => {
    return (
        <div>
            <ProgramsTemplate programs={programs}/>
        </div>
    );
};

export default ProgramsFree;