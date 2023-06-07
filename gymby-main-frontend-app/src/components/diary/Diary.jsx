import React, {useEffect, useState} from 'react';
import Approach from "../general/approach/Approach";
import s from './Diary.module.scss'
import SelectSimple from "../UI/select/SelectSimple";
import arrowSelect from "../../assets/images/approach/bottomArrow.svg"
import ButtonOrange from "../UI/buttons/ButtonOrange";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import DiaryModalProgramsList from "./modal/programsList/DiaryModalProgramsList";
import { useTranslation } from 'react-i18next';
import ExerciseCreationModalProgramsList
    from "../general/exerciseCreationModalWindow/programsList/ExerciseCreationModalProgramsList";
import DiaryModalProgramsListAutoImport from "./modal/programsList/DiaryModalProgramsListAutoImport";



const Diary = ({getDiaryDay, diaryDay, setDiaryDay, setDate, date, createExercise,
                   getAllExercisesPrototype,exercisesPrototype, exerciseCreationData, setExerciseCreationData,
                   deleteExercise, deleteApproach, createApproach, updateApproach, diaryId,
                   allProgramsInDiary, selectedProgramDay, setSelectedProgramDay, autoImportUserData,
                   setAutoImportUserData, importProgramAutomatically, ...props}) => {

    const [isModalProgramDayActive, setIsModalProgramDayActive] = useState(false);
    const programImportHandler = () => isModalProgramDayActive ? setIsModalProgramDayActive(false) : setIsModalProgramDayActive(true)
    const {t} = useTranslation();
    const [isModalAddExerciseActive, setIsModalAddExerciseActive] = useState(false);
    const addProgramHandler = () => isModalAddExerciseActive ? setIsModalAddExerciseActive(false) : setIsModalAddExerciseActive(true)
    const [isModalAutoImportActive, setIsModalAutoImportActive] = useState(false);
    const modalAutoImportActiveHandler = () => isModalAutoImportActive ? setIsModalAutoImportActive(false) : setIsModalAutoImportActive(true)

    useEffect(() => {
        /*Когда будет создание упражнения в чужом дневнике, то надо будет передавать diaryId другое.
        * т.е. условие что если diaryId === null то тогда передавать налл, а иначе айди, или как то так*/
        setExerciseCreationData({diaryId, date})
    }, [date])




    const handleDateChange = (e) => {
        const selectedDate = e instanceof Date ? e : new Date(e);
        const isoDate = selectedDate.toISOString();
        setDate(isoDate);
    };

    return (
        <div className={s.diary}>
            <div className={s.diary__topBlock}>
                <div className={s.topBlock__diarySelect}>
                    <SelectSimple  value={'selectedSort'}
                                   onChange={() => {}}
                                   defaultName='Оберіть щоденник:'
                                   options={[
                                       {value: 'popularity', name: 'Мій щоденник'},
                                       {value: 'name', name: 'Щоденник @user_345'},
                                   ]}
                                   fontSize={28}

                    />
                </div>
                <div className={s.topBlock__accessSelect}>
                    <SelectSimple  value={'selectedSort'}
                                   onChange={() => {}}
                                   defaultName="Надати доступ"
                                   options={[
                                       {value: 'popularity', name: 'За популярністю'},
                                       {value: 'name', name: 'Назва'},
                                       {value: 'price', name: 'Ціна'},
                                       {value: 'category', name: 'Категорія'}
                                   ]}/>
                </div>
            </div>
            <div className={`${s.diary__bottomBlock} ${s.bottomBlock}`}>
                <div className={`${s.bottomBlock__calendarBlock} ${s.calendarBlock}`}>
                    <div className={s.calendarBlock__calendar}>
                        <Calendar onChange={handleDateChange}
                                  value={date}
                                  maxDate={new Date(2030, 0, 0)}
                                  minDate={new Date(2019, 0, 0)}
                        />
                    </div>
                    <div className={s.calendarBlock__buttons}>
                        <div className={s.calendarBlock__row}>
                            <div className={s.calendarBlock__buttonAdd}>
                                <ButtonOrange onClick={addProgramHandler}>{t("diary.buttons.addExercise")}</ButtonOrange>
                            </div>
                            <div className={s.calendarBlock__buttonImport}
                            >
                                <ButtonOrange onClick={modalAutoImportActiveHandler}>{t("diary.buttons.importProgram")}</ButtonOrange>
                            </div>
                        </div>
                        <div className={s.calendarBlock__row}>
                            <div className={s.calendarBlock__buttonAddProgramDay}
                                 onClick={programImportHandler}
                            >
                                <ButtonOrange>{t("diary.buttons.importProgramDay")}</ButtonOrange>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.bottomBlock__approaches}>
                    {diaryDay.exercises?.map((exercise, index) => (
                        <Approach isDrawControlIcons={true} isWeight={true} isMark={true} isBasket={true} exercise={exercise}
                                  exerciseName={exercise.name}
                                  exerciseId={exercise.id} createApproach={createApproach}
                                  programId={null} deleteApproach={deleteApproach} updateApproach={updateApproach}
                                  deleteExercise={deleteExercise} diaryDate={date} diaryId={diaryId} approachId={exercise.id}

                        />
                    ))}
                </div>
            </div>
            <DiaryModalProgramsList isActive={isModalProgramDayActive} setActive={setIsModalProgramDayActive}
                                    buttonName={t("diary.buttons.addModal")} allProgramsInDiary={allProgramsInDiary}
                                    setSelectedProgramDay={setSelectedProgramDay}
                                    importProgramDay={props.importProgramDay}
                                    diaryId={diaryId} selectedProgramDay={selectedProgramDay} date={date}
                                    selectedProgramId={props.selectedProgramId} setSelectedProgramId={props.setSelectedProgramId}
                                    setAutoImportUserData={setAutoImportUserData} autoImportUserData={autoImportUserData}
            />
            <ExerciseCreationModalProgramsList isActive={isModalAddExerciseActive} setActive={setIsModalAddExerciseActive}
                                               buttonName={t("diary.buttons.addModal")} createExercise={createExercise}
                                               getAllExercisesPrototype={getAllExercisesPrototype} exercisesPrototype={exercisesPrototype}
                                               exerciseCreationData={exerciseCreationData} setExerciseCreationData={setExerciseCreationData}
            />

            <DiaryModalProgramsListAutoImport isActive={isModalAutoImportActive} setActive={setIsModalAutoImportActive}
                                              buttonName={t("diary.buttons.addModal")} allProgramsInDiary={allProgramsInDiary}
                                              setSelectedProgramDay={setSelectedProgramDay}
                                              importProgramDay={props.importProgramDay}
                                              diaryId={diaryId} selectedProgramDay={selectedProgramDay} date={date}
                                              selectedProgramId={props.selectedProgramId} setSelectedProgramId={props.setSelectedProgramId}
                                              isAutoImport={isModalAutoImportActive} setAutoImportUserData={setAutoImportUserData} autoImportUserData={autoImportUserData}
                                              importProgramAutomatically={importProgramAutomatically}
            />
        </div>
    );
};

export default Diary;