import React from 'react';
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import DiaryModalWindowTemplate from "../template/DiaryModalWindowTemplate";

const DiaryModalProgramsList = ({isActive, setActive}) => {
    return (
        <div>
            <DiaryModalWindowTemplate isActive={isActive} setActive={setActive}>

            </DiaryModalWindowTemplate>
        </div>
    );
};

export default DiaryModalProgramsList;