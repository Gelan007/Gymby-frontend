import React, {useState} from 'react';
import s from "./ExerciseCreationModalProgramsList.module.scss";
import plug from "../../../../assets/images/measurements/biceps.svg";
import arrowIcon from "../../../../assets/images/modal/bottomArrow.svg";
import SecondDegreeOfNestingExercise from "./SecondDegreeOfNestingExercise/SecondDegreeOfNestingExercise";


const ExerciseCreationModalProgramsListItem = ({isExpand = false}) => {
    const [expand, setExpand] = useState(isExpand);
    const arrowExpandHandler = () => expand ? setExpand(false) : setExpand(true);
    const [isChosen, setIsChosen] = useState()

    return (
        <div className={expand ? `${s.exerciseItem} ${s.active}` : s.exerciseItem}>
            <div className={s.exerciseItem__body}>
                <div className={expand ? s.topBlock : `${s.topBlock} ${s.hidden}`}>
                    <div className={s.exerciseIcon}>
                        <img src={plug} alt="icon"/>
                    </div>
                    <div className={s.titleBlock}>
                        <div className={s.title}>Груди</div>
                    </div>
                    <div className={expand ? `${s.arrowIcon} ${s.rotate}` : s.arrowIcon}
                         onClick={arrowExpandHandler}
                    >
                        <img src={arrowIcon} alt="arrow"/>
                    </div>
                </div>
                <div className={expand ? `${s.bottomBlock} ${s.active}` : `${s.bottomBlock}` }>
                    <div className={s.bottomBlock__daysBlock}>
                        <SecondDegreeOfNestingExercise isChosen={false}/>
                        <SecondDegreeOfNestingExercise isChosen={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCreationModalProgramsListItem;