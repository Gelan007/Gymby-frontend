import React from 'react';
import UserAccountLeftPanel from "../leftPanel/UserAccountLeftPanel";
import s from "./Instruction.module.scss";
import UserAccountLeftPanelContainer from "../leftPanel/UserAccountLeftPanelContainer";
import notebook from "../../../assets/images/LandingPage/mainLandingPage/Macbook.svg";

const UserAccountInstruction = () => {
    return (
        <div className={s.instruction}>
            <UserAccountLeftPanelContainer isButtonGold={true}/>
            <div className={s.instruction__body}>
                <div className={s.video}>
                    <div className={s.iframeBlock}>
                        <iframe src="https://www.youtube.com/embed/8Jugz5prO7g"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <img src={notebook} alt="notebook"/>
                </div>
            </div>
        </div>
    );
};

export default UserAccountInstruction;