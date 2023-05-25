import React from 'react';
import ModalWindow from "../../../general/modalWindow/ModalWindow";
import DiaryModalWindowTemplate from "../template/DiaryModalWindowTemplate";
import s from './DiaryModalProgramsList.module.scss'
import plug from "../../../../assets/images/measurements/biceps.svg";
import DiaryModalProgramsListItem from "./DiaryModalProgramsListItem";


const DiaryModalProgramsList = ({isActive, setActive, buttonName}) => {
    return (
        <DiaryModalWindowTemplate isActive={isActive} setActive={setActive} buttonName={buttonName}>
            <div className={s.programListItems}>
                <DiaryModalProgramsListItem isExpand={false}/>
                <DiaryModalProgramsListItem isExpand={false}/>
                <DiaryModalProgramsListItem/>
            </div>
        </DiaryModalWindowTemplate>

    );
};

export default DiaryModalProgramsList;