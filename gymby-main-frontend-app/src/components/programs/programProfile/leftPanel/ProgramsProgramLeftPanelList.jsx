import React, {useEffect, useState} from 'react';
import s from "./ProgramsProgramLeftPanelList.module.scss";
import dumbbellIcon from '../../../../assets/images/programs/dumbbell.svg'
import spellIcon from '../../../../assets/images/programs/spell.svg'
import plusIcon from '../../../../assets/images/general/icons/plus.svg'
import deleteIcon from '../../../../assets/images/general/icons/basketWhiteBackground2.svg'
import {useTranslation} from "react-i18next";
import InputGrey from "../../../UI/inputs/InputGrey";

const ProgramsProgramLeftPanelList = ({daysCount, programId, selectedDay, setSelectedDay, isProgramEditing,
                                          createProgramDay, getProgramById, deleteProgramDay, program, updateProgramDay}) => {
    
    const {t} = useTranslation()
    const [dayNames, setDayNames] = useState(program.programDays?.map((day) => day.name) || []);

    useEffect(() => {
        setDayNames(program.programDays?.map((day) => day.name) || [])
        return () => {
            setDayNames([])
        }
    }, [program])

    const handleInputChange = (index, value) => {
        const updatedDayNames = [...dayNames];
        updatedDayNames[index] = value;
        setDayNames(updatedDayNames);
    };

    const handleCreateProgramDay = () => {
        createProgramDay({programId, name: `${t("programs.programDescription.leftPanel.day")} ${daysCount + 1}`}).then(() => {
            getProgramById({programId})
        })

    }
    const handleDeleteProgramDay = (day) => {
        program.programDays?.forEach((programDay, index) => {
            if(index === day)
                deleteProgramDay({programDayId: programDay.programDayId, programId}).then(() => {
                    getProgramById({programId})
                })
                return
        })
    }
    const handleUpdateProgramDay = (day) => {
        program.programDays?.forEach((programDay, index) => {
            if(index === day)
                updateProgramDay({programDayId: programDay.programDayId, programId, name: dayNames[day]}).then(() => {
                    getProgramById({programId})
                })
            return
        })
    }

    return (
        <div className={s.navigation}>
            {isProgramEditing ?
                <div className={s.navigation__title}>
                    <h5 className={s.title}>{t("programs.programDescription.leftPanel.title")}</h5>
                    <div className={s.navigation__title__image}
                         onClick={() => handleCreateProgramDay()}
                    >
                        <img src={plusIcon} alt="add"/>
                    </div>
                </div>
                :
                <h5 className={s.title}>{t("programs.programDescription.leftPanel.title")}</h5>
            }

            <nav className={s.navigation__container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.icon} onClick={() => setSelectedDay(0)}><img src={spellIcon} alt="spellIcon"/></div>
                        <div className={selectedDay === 0 ? s.active : s.text}
                             style={{cursor: "pointer"}}
                             onClick={() => setSelectedDay(0)}
                        >
                            {t("programs.programDescription.leftPanel.description")}
                        </div>
                    </li>
                    {program.programDays?.map((day, index) => (
                        <li className={s.item} key={index}>
                            <div className={s.icon} onClick={() => setSelectedDay(index + 1)}><img src={dumbbellIcon} alt="dumbbellIcon"/></div>

                            {isProgramEditing ?
                                <div className={selectedDay === index + 1 ? s.active : s.text}
                                     onClick={() => setSelectedDay(index + 1)}
                                     style={{cursor: "pointer"}}
                                >
                                    <InputGrey type="text"
                                               value={dayNames[index]}
                                               onChange={(e) => handleInputChange(index, e.target.value)}
                                               onBlur={() => handleUpdateProgramDay(index)}
                                               style={{maxHeight: '40px', maxWidth: '160px'}}
                                    />
                                </div>
                                :
                                <div className={selectedDay === index + 1 ? s.active : s.text}
                                     onClick={() => setSelectedDay(index + 1)}
                                     style={{cursor: "pointer"}}
                                >
                                    {day.name}
                                </div>
                            }

                            {isProgramEditing ?
                                <div className={s.basketIcon} onClick={() => handleDeleteProgramDay(index)}><img src={deleteIcon} alt="deleteIcon"/></div>
                                :
                                <span></span>
                            }

                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ProgramsProgramLeftPanelList;