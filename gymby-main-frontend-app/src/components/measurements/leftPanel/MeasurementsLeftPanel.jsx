import React from 'react';
import s from "./MeasurementsLeftPanel.module.scss";
import MeasurementsLeftPanelList from "./MeasurementsLeftPanelList";

const MeasurementsLeftPanel = () => {
    return (
        <div className={s.leftPanel__container}>
            <div className={s.leftPanelList}>
                <MeasurementsLeftPanelList/>
            </div>
        </div>
    );
};

export default MeasurementsLeftPanel;