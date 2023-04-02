import React from 'react';
import UserAccountLeftPanelList from "./UserAccountLeftPanelList";

const UserAccountLeftPanel = () => {
    return (
        <div>
            {/*вся панель с горизонтальной линией и кнопками выйти и стать тренером*/}
            <UserAccountLeftPanelList/>
        </div>
    );
};

export default UserAccountLeftPanel;