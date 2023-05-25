import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from "./Instruction.module.scss";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";

const UserAccountInstruction = () => {
    return (
        <div className={s.instruction}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.instruction__body}>
                Instruction block
            </div>
        </div>
    );
};

export default UserAccountInstruction;