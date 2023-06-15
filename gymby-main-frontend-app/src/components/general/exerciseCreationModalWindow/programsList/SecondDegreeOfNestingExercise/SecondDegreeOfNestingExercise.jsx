import React, {useEffect} from 'react';
import s from './SecondDegreeOfNestingExercise.module.scss'
import plug from "../../../../../assets/images/measurements/biceps.svg";
import {useTranslation} from "react-i18next";

const SecondDegreeOfNestingExercise = ({name, setExerciseName, setSelectedExerciseId, selectedExerciseId, id}) => {
    const handleExerciseSelection = () => {
        setExerciseName(name)
        setSelectedExerciseId(id)
    }
    const {t} = useTranslation()
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
        <div className={id === selectedExerciseId ? `${s.secondDegreeOfNestingExercise} ${s.chosen}` : s.secondDegreeOfNestingExercise}
             onClick={() => handleExerciseSelection()}
        >
            <div className={s.mainBlock}>
                <div className={s.exerciseIcon}>
                    <img src={plug} alt="icon"/>
                </div>
                <div className={s.title}>{textMap[name] ? textMap[name] : name}</div>
            </div>
        </div>
    );
};

export default SecondDegreeOfNestingExercise;
