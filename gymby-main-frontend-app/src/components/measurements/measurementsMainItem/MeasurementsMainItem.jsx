import React, {useState} from 'react';
import s from "./MainItem.module.scss";
import MeasurementsLeftPanel from "../leftPanel/MeasurementsLeftPanel";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import MeasurementsItem from "../item/MeasurementsItem";
import biceps from "../../../assets/images/measurements/biceps.svg";

const MeasurementsMainItem = () => {

    const LIST = 'list';
    const CHART = 'chart';
    const [selectedOption, setSelectedOption] = useState(LIST);
    const listOptionHandle = () => setSelectedOption(LIST);
    const chartOptionHandle = () => setSelectedOption(CHART);

    return (
        <div className={s.measurementsMainItem}>
            <MeasurementsLeftPanel/>
            <div className={s.measurementsMainItem__body}>
                <div className={s.navBlock}>
                    <div className={s.navBlock__title}>Рука</div>
                    <div className={s.navBlock__options}>
                        <span className={selectedOption === LIST ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={listOptionHandle}>Список</span>

                        <span className={selectedOption === CHART ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={chartOptionHandle}>Графік</span>
                    </div>
                    <div className={s.navBlock__button}>
                        <ButtonGreen>Додати</ButtonGreen>
                    </div>
                </div>
                <div className={s.itemsList}>
                    <MeasurementsItem icon={biceps} measurements={'34 см'} changesValue={'+1,2 см'} date={'16.09.2022'} days={'31 днів тому'}/>
                    <MeasurementsItem icon={biceps} measurements={'34 см'} changesValue={'+1,2 см'} date={'16.09.2022'} days={'31 днів тому'}/>
                </div>
            </div>
        </div>
    );
};

export default MeasurementsMainItem;