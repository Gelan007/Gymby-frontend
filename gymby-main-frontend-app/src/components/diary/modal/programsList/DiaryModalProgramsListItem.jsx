import React, {useEffect, useState} from 'react';
import s from "./DiaryModalProgramsList.module.scss";
import plug from "../../../../assets/images/measurements/biceps.svg";
import arrowIcon from "../../../../assets/images/modal/bottomArrow.svg"
import Day from "./day/Day";
import DisplayerDarkBlue from "./displayer/DisplayerDarkBlue";
import ProgramsMark from "../../../programs/card/programsMark/ProgramsMark";

const DiaryModalProgramsListItem = ({isExpand = false, program, setSelectedProgramDay,
                                        selectedProgramDay, selectedProgramId, setSelectedProgramId, isActive, setActive}) => {

    const [expand, setExpand] = useState(isExpand);
    const arrowExpandHandler = () => expand ? setExpand(false) : setExpand(true);

    useEffect(() => {
        setExpand(false)
    }, [isActive])


    return (
        <div className={expand ? `${s.diaryItem} ${s.active}` : s.diaryItem}>
            <div className={s.diaryItem__body}>
                <div className={expand ? s.topBlock : `${s.topBlock} ${s.hidden}`}>
                    <div className={s.exerciseIcon}>
                        <img src={plug} alt="icon"/>
                    </div>
                    <div className={s.titleBlock}>
                        <div className={s.title}>{program.name}</div>
                        <div className={s.programDescriptionItems}>
                            {/*<div className={s.programDescriptionItem}>набір маси</div>
                            <div className={s.programDescriptionItem}>ектоморф</div>
                            <div className={s.programDescriptionItem}>середній</div>*/}
                            {program.marks?.map((mark, index) => (
                                <ProgramsMark text={mark} key={index} isBlackTextColor={true}/>
                            ))}
                        </div>
                    </div>
                    <div className={expand ? `${s.arrowIcon} ${s.rotate}` : s.arrowIcon}
                         onClick={arrowExpandHandler}
                    >
                        <img src={arrowIcon} alt="arrow"/>
                    </div>
                </div>
                <div className={expand ? `${s.bottomBlock} ${s.active}` : `${s.bottomBlock} ${s.invisible}` }>
                    <div className={s.bottomBlock__daysBlock}>
                        {program.programDays?.map((day, index) => (
                            <Day dayName={day.name}
                                 setSelectedProgramDay={setSelectedProgramDay} selectedProgramDay={selectedProgramDay}
                                 programDayId={day.id} setSelectedProgramId={setSelectedProgramId} programId={program.id}
                            />
                        ))}

                     {/*   <Day number={2}/>
                        <Day number={3}/>
                        <Day number={4}/>
                        <Day number={5}/>*/}
                    </div>
                    <div className={s.bottomBlock__rightBlock}>
                        <DisplayerDarkBlue>{/**/}
                            <div className={s.displayer__content}>
                                {program.programDays?.map((day, i) => {
                                    if(day.id === selectedProgramDay) {
                                        return day.exercises?.map((exercise, index) => (
                                            <span key={index}>{exercise.name}</span>
                                        ))
                                    }
                                })}
                            </div>
                        </DisplayerDarkBlue>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiaryModalProgramsListItem;