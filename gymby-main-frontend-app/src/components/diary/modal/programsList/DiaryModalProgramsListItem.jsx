import React, {useState} from 'react';
import s from "./DiaryModalProgramsList.module.scss";
import plug from "../../../../assets/images/measurements/biceps.svg";
import arrowIcon from "../../../../assets/images/modal/bottomArrow.svg"
import Day from "./day/Day";
import DisplayerDarkBlue from "./displayer/DisplayerDarkBlue";

const DiaryModalProgramsListItem = ({isExpand = false}) => {

    const [expand, setExpand] = useState(isExpand);
    const arrowExpandHandler = () => expand ? setExpand(false) : setExpand(true);


    return (
        <div className={expand ? `${s.diaryItem} ${s.active}` : s.diaryItem}>
            <div className={s.diaryItem__body}>
                <div className={expand ? s.topBlock : `${s.topBlock} ${s.hidden}`}>
                    <div className={s.exerciseIcon}>
                        <img src={plug} alt="icon"/>
                    </div>
                    <div className={s.titleBlock}>
                        <div className={s.title}>Набір маси для ектоморфа</div>
                        <div className={s.programDescriptionItems}>
                            <div className={s.programDescriptionItem}>набір маси</div>
                            <div className={s.programDescriptionItem}>ектоморф</div>
                            <div className={s.programDescriptionItem}>середній</div>
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
                        <Day isActive={true}/>
                        <Day number={2}/>
                        <Day number={3}/>
                        <Day number={4}/>
                        <Day number={5}/>
                    </div>
                    <div className={s.bottomBlock__rightBlock}>
                        <DisplayerDarkBlue>{/**/}
                            <div className={s.displayer__content}>
                                <span>1. Жим штанги лежачи</span>
                                <span>2. Жим штанги лежачи</span>
                                <span>3. Жим штанги лежачи</span>
                                <span>4. Жим штанги лежачи в тройному присяді зі штангою при колесі триста градусів</span>
                                <span>4. Жим штанги лежачи</span>
                                <span>5. Жим штанги лежачи</span>
                                <span>4. Жим штанги лежачи</span>
                                <span>4. Жим штанги лежачи</span>
                                <span>4. Жим штанги лежачи</span>
                            </div>
                        </DisplayerDarkBlue>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiaryModalProgramsListItem;