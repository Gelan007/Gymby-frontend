import MainPage from "../../pages/mainLandingPage/MainPage";
import {
    DIARY_ROUTE,
    HOME_ROUTE, MEASUREMENTS_HAND_ROUTE, MEASUREMENTS_ROUTE, PROGRAMS_FREE_ROUTE, PROGRAMS_ROUTE,
    USER_ACCOUNT_COACHING_ROUTE, USER_ACCOUNT_FRIENDS_LIST_ROUTE, USER_ACCOUNT_INSTRUCTION_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE, USER_ACCOUNT_PROFILE_ROUTE, USER_ACCOUNT_ROUTE, USER_ACCOUNT_SEARCH_ROUTE,
    USER_ACCOUNT_SUBSCRIBES_ROUTE
} from "./consts";
import UserAccountPersonalData from "../../components/userAccount/personalData/UserAccountPersonalData";
import UserAccountSubscriptions from "../../components/userAccount/subscriptions/UserAccountSubscriptions";
import UserAccountPersonalDataContainer
    from "../../components/userAccount/personalData/UserAccountPersonalDataContainer";
import UserAccountCoaching from "../../components/userAccount/coaching/UserAccountCoaching";
import UserAccountPage from "../../pages/userAccount/UserAccountPage";
import UserAccountSearch from "../../components/userAccount/search/UserAccountSearch";
import UserAccountSearchContainer from "../../components/userAccount/search/UserAccountSearchContainer";
import UserAccountFriendsListContainer from "../../components/userAccount/friendsList/UserAccountFriendsListContainer";
import UserAccountInstruction from "../../components/userAccount/instruction/UserAccountInstruction";
import UserAccountProfile from "../../components/userAccount/profiles/UserAccountProfile";
import MeasurementsPage from "../../pages/measurements/MeasurementsPage";
import MeasurementsHandContainer from "../../components/measurements/hand/MeasurementsHandContainer";
import Diary from "../../components/diary/Diary";
import ProgramsFreeContainer from "../../components/programs/free/ProgramsFreeContainer";
import ProgramsPage from "../../pages/programs/ProgramsPage";

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
        path: USER_ACCOUNT_ROUTE,
        Component: <UserAccountPage/>
    },
    {
        path: USER_ACCOUNT_PERSONAL_DATA_ROUTE,
        Component: <UserAccountPersonalDataContainer/>
    },
    {
        path: USER_ACCOUNT_SUBSCRIBES_ROUTE,
        Component: <UserAccountSubscriptions/>
    },
    {
        path: USER_ACCOUNT_COACHING_ROUTE,
        Component: <UserAccountCoaching/>
    },
    {
        path: USER_ACCOUNT_SEARCH_ROUTE,
        Component: <UserAccountSearchContainer/>
    },
    {
        path: USER_ACCOUNT_FRIENDS_LIST_ROUTE,
        Component: <UserAccountFriendsListContainer/>
    },
    {
        path: USER_ACCOUNT_INSTRUCTION_ROUTE,
        Component: <UserAccountInstruction/>
    },
    {
        path: USER_ACCOUNT_PROFILE_ROUTE,
        Component: <UserAccountProfile/>
    },

    {
        path: MEASUREMENTS_ROUTE,
        Component: <MeasurementsPage/>
    },
    {
        path: MEASUREMENTS_HAND_ROUTE,
        Component: <MeasurementsHandContainer/>
    },

    {
        path: DIARY_ROUTE,
        Component: <Diary/>
    },

    {
        path: PROGRAMS_ROUTE,
        Component: <ProgramsPage/>
    },
    {
        path: PROGRAMS_FREE_ROUTE,
        Component: <ProgramsFreeContainer/>
    },
]