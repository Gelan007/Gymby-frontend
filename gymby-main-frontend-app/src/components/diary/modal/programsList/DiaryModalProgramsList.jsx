import React from 'react';
import ModalWindow from "../../../general/modalWindow/ModalWindow";

const DiaryModalProgramsList = ({isActive, setActive, children}) => {
    return (
        <div>
            <ModalWindow isActive={isActive} setActive={setActive}/>
        </div>
    );
};

export default DiaryModalProgramsList;