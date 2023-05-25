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


const Diary = () => {
    const [date, setDate] = useState(new Date());
    const [isModalActive, setIsModalActive] = useState(false);
    const programImportHandler = () => isModalActive ? setIsModalActive(false) : setIsModalActive(true)
    const {t} = useTranslation();


   /* useEffect(() => {
        console.log(date)
    }, [date])*/

    return (
        <div className={s.diary}>
            <div className={s.diary__topBlock}>
                <div className={s.topBlock__diarySelect}>
                    <SelectSimple  value={'selectedSort'}
                                   onChange={() => {}}
                                   defaultName='Оберіть щоденник:'
                                   options={[
                                       {value: 'popularity', name: 'За популярністю'},
                                       {value: 'name', name: 'Назва'},
                                       {value: 'price', name: 'Ціна'},
                                       {value: 'category', name: 'Категорія'}
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
                        <Calendar onChange={setDate}
                                  value={date}
                                  maxDate={new Date(2030, 0, 0)}
                                  minDate={new Date(2019, 0, 0)}
                        />
                    </div>
                    <div className={s.calendarBlock__buttons}>
                        <div className={s.calendarBlock__buttonAdd}>
                            <ButtonOrange>{t("diary.buttons.addExercise")}</ButtonOrange>
                        </div>
                        <div className={s.calendarBlock__buttonImport}
                             onClick={programImportHandler}
                        >
                            <ButtonOrange>{t("diary.buttons.importProgram")}</ButtonOrange>
                        </div>
                    </div>
                </div>
                <div className={s.bottomBlock__approaches}>
                    <Approach/>
                    <Approach/>
                    <Approach/>
                </div>
            </div>
            <DiaryModalProgramsList isActive={isModalActive} setActive={setIsModalActive} buttonName={t("diary.buttons.addModal")}/>
        </div>
    );
};

export default Diary;