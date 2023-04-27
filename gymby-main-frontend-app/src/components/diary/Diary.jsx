import React from 'react';
import Approach from "../general/approach/Approach";
import s from './Diary.module.scss'
import SelectSimple from "../UI/select/SelectSimple";
import arrowSelect from "../../assets/images/approach/bottomArrow.svg"
import ButtonOrange from "../UI/buttons/ButtonOrange";

const Diary = () => {
    return (
        <div className={s.diary}>
            <div className={s.diary__topBlock}>
                <div className={s.topBlock__diarySelect}>
                    <SelectSimple  value={'selectedSort'}
                                   onChange={() => {}}
                                   defaultName="Оберіть щоденник:"
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

                    </div>
                    <div className={s.calendarBlock__buttons}>
                        <div className={s.calendarBlock__buttonAdd}>
                            <ButtonOrange>Додати вправу</ButtonOrange>
                        </div>
                        <div className={s.calendarBlock__buttonImport}>
                            <ButtonOrange>Імпортувати вправу</ButtonOrange>
                        </div>
                    </div>
                </div>
                <div className={s.bottomBlock__approaches}>
                    <Approach/>
                    <Approach/>
                </div>
            </div>
        </div>
    );
};

export default Diary;