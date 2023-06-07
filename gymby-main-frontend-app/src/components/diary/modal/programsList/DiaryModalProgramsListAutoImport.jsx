import React from 'react';
import DiaryModalWindowTemplate from "../template/DiaryModalWindowTemplate";
import s from "./DiaryModalProgramsList.module.scss";
import DiaryModalProgramsListItem from "./DiaryModalProgramsListItem";

const DiaryModalProgramsListAutoImport = ({isActive, setActive, buttonName, allProgramsInDiary,
                                              setSelectedProgramDay, selectedProgramDay, importProgramDay, date,
                                              diaryId, selectedProgramId, setSelectedProgramId, isAutoImport, setAutoImportUserData,
                                              autoImportUserData, importProgramAutomatically}) => {
    return (
        <DiaryModalWindowTemplate isActive={isActive} setActive={setActive}
                                  buttonName={buttonName} importProgramDay={importProgramDay}
                                  date={date} diaryId={diaryId} selectedProgramDay={selectedProgramDay} selectedProgramId={selectedProgramId}
                                  isAutoImport={isAutoImport} setAutoImportUserData={setAutoImportUserData}
                                  autoImportUserData={autoImportUserData} importProgramAutomatically={importProgramAutomatically}
        >

            <div className={s.programListItems}>
                {allProgramsInDiary && allProgramsInDiary?.map((program, index) => (
                    <DiaryModalProgramsListItem key={index} isExpand={false} program={program}
                                                setSelectedProgramDay={setSelectedProgramDay} selectedProgramDay={selectedProgramDay}
                                                selectedProgramId={selectedProgramId} setSelectedProgramId={setSelectedProgramId}
                                                setActive={setActive} isActive={isActive}
                    />
                ))}

            </div>
        </DiaryModalWindowTemplate>

    );
};

export default DiaryModalProgramsListAutoImport;