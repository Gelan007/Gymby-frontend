import MainPage from "../../pages/mainLandingPage/MainPage";
import {HOME_ROUTE, USER_ACCOUNT_PERSONAL_DATA_ROUTE} from "./consts";
import UserAccountPersonalData from "../../components/userAccount/personalData/UserAccountPersonalData";

export const publicRoutes = [
   /* {
        path: LOGIN_ROUTE,
        Component: <Login/>
    },*/
    {
        path: HOME_ROUTE,
        Component: <MainPage/>
    },
]

export const authRoutes = [
    {
        path: USER_ACCOUNT_PERSONAL_DATA_ROUTE,
        Component: <UserAccountPersonalData/>
    },
]