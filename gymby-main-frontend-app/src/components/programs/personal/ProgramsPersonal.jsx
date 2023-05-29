import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";

const ProgramsPersonal = () => {
    return (
        <div>
            <ProgramsTemplate isButtonShow={true} isDeleteIcon={true}/>
        </div>
    );
};

export default ProgramsPersonal;