import React, {useEffect, useState} from 'react';
import ApproachItem from "./item/ApproachItem";
import plug from '../../../assets/images/measurements/biceps.svg';
import basket from '../../../assets/images/general/icons/basketWhiteBackground2.svg'
import editIcon from '../../../assets/images/general/icons/editIcon.png'
import plusIcon from '../../../assets/images/general/icons/plus.svg'
import s from './Approach.module.scss'
import {useTranslation} from "react-i18next";


const Approach = ({isDrawControlIcons = true, isWeight = true,
                      isMark = true, isBasket = true, exercise, exerciseName,
                      exerciseId, programId, createApproach, deleteApproach, updateApproach, deleteExercise,
                      diaryId, diaryDate}) =>
{
    const [isEditMode, setIsEditMode] = useState(false);
    const editModeHandler = () => isEditMode ?  setIsEditMode(false) : setIsEditMode(true);
    const {t} = useTranslation()

    const addApproachItemHandler = () => {
        createApproach({
            exerciseId,
            programId,
            diaryId,
            date:diaryDate
        })
    }
    const deleteApproachHandler = () => {
        deleteExercise({
            exerciseId,
            programId,
            diaryId,
            date:diaryDate
        })
    }

    const textMap = {
        "Machine Shoulder Press": t("programs.exercises.machineShoulderPress"),
        "Seated Overhead Press": t("programs.exercises.seatedOverheadPress"),
        "Lateral Raise ": t("programs.exercises.lateralRaise"),
        "Front Raise (Cable)": t("programs.exercises.frontRaiseCable"),
        "Arnold Press ": t("programs.exercises.arnoldPress"),
        "Military Press": t("programs.exercises.militaryPress"),
        "Reverse Fly ": t("programs.exercises.reverseFly"),
        "Lateral Raise (Cabel)": t("programs.exercises.lateralRaiseCable"),
        "Shrug": t("programs.exercises.shrug"),
        "Squats": t("programs.exercises.squats"),
        "Lunges": t("programs.exercises.lunges"),
        "Leg Press": t("programs.exercises.legPress"),
        "Leg Curls": t("programs.exercises.legCurls"),
        "Pistol Squat": t("programs.exercises.pistolSquat"),
        "Jump Squat": t("programs.exercises.jumpSquat"),
        "Hack Squat": t("programs.exercises.hackSquat"),
        "Seated calf Raise": t("programs.exercises.seatedCalfRaise"),
        "Leg Extension": t("programs.exercises.legExtension"),
        "Standing Calf Raise": t("programs.exercises.standingCalfRaise"),
        "Push-ups": t("programs.exercises.pushups"),
        "Decline Bench Press": t("programs.exercises.declineBenchPress"),
        "Bench Press": t("programs.exercises.benchPress"),
        "Dumbbell Flyes": t("programs.exercises.dumbbellFlyes"),
        "Push-ups on the uneven bars": t("programs.exercises.pushupsOnTheUnevenBars"),
        "Incline Bench Press": t("programs.exercises.inclineBenchPress"),
        "Mixing in a crossover lying on an incline bench": t("programs.exercises.mixingInACrossoverLyingOnAnInclineBench"),
        "Dumbbell Pullover": t("programs.exercises.dumbbellPullover"),
        "Incline Dumbbell Press": t("programs.exercises.inclineDumbbellPress"),
        "Cable cross-over": t("programs.exercises.cableCrossover"),
        "Barbell Bench Press": t("programs.exercises.barbellBenchPress"),
        "One Arm Dumbbell Row": t("programs.exercises.oneArmDumbbellRow"),
        "Pull-ups": t("programs.exercises.pullups"),
        "Deadlift": t("programs.exercises.deadlift"),
        "Bent-Over Rows": t("programs.exercises.bentOverRows"),
        "Back Extension": t("programs.exercises.backExtension"),
        "Incline Row": t("programs.exercises.inclineRow"),
        "Lat Pulldown": t("programs.exercises.latPulldown"),
        "Seated Row (Cable)": t("programs.exercises.seatedRowCable"),
        "Plank": t("programs.exercises.plank"),
        "Twisting": t("programs.exercises.twisting"),
        "Jump Rope": t("programs.exercises.jumpRope"),
        "Incline Dumbbell Curl": t("programs.exercises.inclineDumbbellCurl"),
        "Standing Barbell Curl": t("programs.exercises.standingBarbellCurl"),
        "Preacher Curl ": t("programs.exercises.preacherCurl"),
        "Hammer Curl": t("programs.exercises.hammerCurl"),
        "Concentration Curl": t("programs.exercises.concentrationCurl"),
        "Bicep Curl (Cable)": t("programs.exercises.bicepCurlCable"),
        "Close Grip Preacher Curl": t("programs.exercises.closeGripPreacherCurl"),
        "Bench Dip": t("programs.exercises.benchDip"),
        "Triceps Extension (Cable)": t("programs.exercises.tricepsExtensionCable"),
        "Tricep Bench Dip": t("programs.exercises.tricepBenchDip"),
        "Skullcrusher ": t("programs.exercises.skullcrusher"),
        "Tricep Extension": t("programs.exercises.tricepExtension"),
        "Tricep Dip": t("programs.exercises.tricepDip")
    };

    return (
        <div className={s.approach}>
            <div className={s.topBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>
                    {textMap[exerciseName] ? textMap[exerciseName] : exerciseName}
                </div>
                {isDrawControlIcons &&
                    <div className={s.iconsControl}>
                        <div className={isEditMode ? `${s.editButton} ${s.editButton_mode}` : `${s.editButton}`}
                             onClick={editModeHandler}>
                            <img src={editIcon} alt="edit"/>
                        </div>
                        <div className={`${s.plusButton}`}
                             onClick={addApproachItemHandler}>
                            <img src={plusIcon} alt="add"/>
                        </div>
                        {isEditMode ?
                            <div className={s.basket}
                                 onClick={() => deleteApproachHandler()}
                            >
                                <img src={basket} alt="basket"/>
                            </div>
                            :
                            <div className={`${s.editModeIcon}`}>
                                <img src={basket} alt="basket"/>
                            </div>
                        }
                    </div>
                }
            </div>
            <div className={s.itemsBlock}>
                {
                    exercise?.approaches?.map((approach, index) => (
                        <ApproachItem isWeight={isWeight} isMark={isMark}
                                      isBasket={isBasket} isEditMode={isEditMode}
                                      isDrawControlIcons={isDrawControlIcons} approach={approach}
                                      numeration={index + 1} deleteApproach={deleteApproach}
                                      exerciseId={exerciseId} programId={programId} updateApproach={updateApproach}
                                      diaryDate={diaryDate} diaryId={diaryId} diaryApproachId={approach.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Approach;