import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from "./Instruction.module.scss";

const UserAccountInstruction = () => {
    return (
        <div className={s.instruction}>
            <UserAccountLeftPanel isButtonGold={true}/>
            <div className={s.instruction__body}>
                Instruction block
            </div>
        </div>
    );
};

export default UserAccountInstruction;