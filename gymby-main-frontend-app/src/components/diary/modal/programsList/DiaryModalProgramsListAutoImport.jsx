import React from 'react';
import DiaryModalWindowTemplate from "../template/DiaryModalWindowTemplate";
import s from "./DiaryModalProgramsList.module.scss";
import DiaryModalProgramsListItem from "./DiaryModalProgramsListItem";

const DiaryModalProgramsListAutoImport = ({isActive, setActive, buttonName, isAutoImport}) => {
    return (
        <DiaryModalWindowTemplate isActive={isActive} setActive={setActive} buttonName={buttonName}>
            <div className={s.programListItems}>
                <DiaryModalProgramsListItem isExpand={false} isAutoImport={isAutoImport}/>
                <DiaryModalProgramsListItem isExpand={false}/>
                <DiaryModalProgramsListItem/>
            </div>
        </DiaryModalWindowTemplate>

    );
};

export default DiaryModalProgramsListAutoImport;