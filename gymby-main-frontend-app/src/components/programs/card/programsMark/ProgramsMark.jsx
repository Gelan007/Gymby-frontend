import React, {useEffect} from 'react';
import s from './ProgramMark.module.scss'
import {useTranslation} from "react-i18next";

const ProgramsMark = ({text, isBlackTextColor = false}) => {
    const {t} = useTranslation()
    const systemDarkBlueMarks = ['ектоморф', 'набір маси', 'витривалість', 'WeightGain', 'Endurance', 'WeightLoss']
    const systemYellowMarks = ['середній', 'Intermediate']
    const systemRedMarks = ['просунутий', 'Advanced']
    const systemGreenMarks = ['початковий', 'Beginner']

    const isDarkBlueStyles = systemDarkBlueMarks.includes(text)
    const isYellowStyles = systemYellowMarks.includes(text)
    const isRedStyles =  systemRedMarks.includes(text)
    const isGreenStyles = systemGreenMarks.includes(text)
    
    const textMap = {
        Beginner: t("programs.marks.beginner"),
        Advanced: t("programs.marks.advanced"),
        Intermediate: t("programs.marks.intermediate"),
        WeightGain: t("programs.marks.weightGain"),
        Endurance: t("programs.marks.endurance"),
        WeightLoss: t("programs.marks.weightLoss"),
    };

    return (
        <div className={isDarkBlueStyles && s.darkBlue
            || isYellowStyles && s.yellow
            || isRedStyles && s.red
            || isGreenStyles && s.green
            || s.defaultStyles
        }
             style={isBlackTextColor ? {color: '#000000'} : {color: '#FFFFFF'}}>
            {textMap[text]}
        </div>
    );
};

export default ProgramsMark;