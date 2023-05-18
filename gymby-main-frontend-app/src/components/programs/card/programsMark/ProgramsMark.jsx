import React, {useEffect} from 'react';
import s from './ProgramMark.module.scss'

const ProgramsMark = ({text}) => {
    const systemDarkBlueMarks = ['ектоморф', 'набір маси', 'витривалість']
    const systemYellowMarks = ['середній']
    const systemRedMarks = ['просунутий']
    const systemGreenMarks = ['початковий']

    const isDarkBlueStyles = systemDarkBlueMarks.includes(text)
    const isYellowStyles = systemYellowMarks.includes(text)
    const isRedStyles =  systemRedMarks.includes(text)
    const isGreenStyles = systemGreenMarks.includes(text)

    return (
        <div className={isDarkBlueStyles && s.darkBlue
            || isYellowStyles && s.yellow
            || isRedStyles && s.red
            || isGreenStyles && s.green
            || s.defaultStyles
        }>
            {text}
        </div>
    );
};

export default ProgramsMark;