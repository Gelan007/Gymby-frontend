import React from 'react';
import ProgramsTemplate from "../template/ProgramsTemplate";
import ProgramsCard from "../card/ProgramsCard";

const ProgramsFavorites = () => {
    return (
        <div>
            <ProgramsTemplate>
                <ProgramsCard/>
            </ProgramsTemplate>
        </div>
    );
};

export default ProgramsFavorites;