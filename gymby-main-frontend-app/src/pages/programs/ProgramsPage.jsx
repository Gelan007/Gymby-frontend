import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {PROGRAMS_FREE_ROUTE} from "../../utils/routes/consts";
import ProgramsFreeContainer from "../../components/programs/free/ProgramsFreeContainer";



const ProgramsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(PROGRAMS_FREE_ROUTE)
    }, [])

    return (
        <ProgramsFreeContainer/>
    );
};

export default ProgramsPage;