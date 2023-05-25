import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";

const ProgramsFavorites = () => {
    return (
        <div>
            <ProgramsTemplate isDeleteIcon={true}/>
        </div>
    );
};

export default ProgramsFavorites;

/*
<ProgramsTemplate>
    <ProgramsCard/>
</ProgramsTemplate>*/
