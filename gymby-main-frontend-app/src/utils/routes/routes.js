import MainPage from "../../pages/mainLandingPage/MainPage";
import {
    DIARY_ROUTE,
    HOME_ROUTE,
    MEASUREMENTS_CHEST_ROUTE,
    MEASUREMENTS_FAT_PERCENTAGE_ROUTE,
    MEASUREMENTS_FOREARMS_ROUTE,
    MEASUREMENTS_HAND_ROUTE,
    MEASUREMENTS_NECK_ROUTE, MEASUREMENTS_PHOTOS_ROUTE,
    MEASUREMENTS_ROUTE,
    MEASUREMENTS_SHOULDERS_ROUTE,
    MEASUREMENTS_THIGH_ROUTE,
    MEASUREMENTS_WAIST_ROUTE, MEASUREMENTS_WEIGHT_ROUTE,
    PROGRAMS_FAVORITES_ROUTE,
    PROGRAMS_FREE_ROUTE,
    PROGRAMS_PERSONAL_ROUTE,
    PROGRAMS_PROGRAM_PROFILE_ROUTE,
    PROGRAMS_ROUTE,
    PROGRAMS_TRAINER_BASED_ROUTE,
    STATISTICS_ROUTE,
    USER_ACCOUNT_COACHING_ROUTE,
    USER_ACCOUNT_FRIENDS_LIST_ROUTE,
    USER_ACCOUNT_INSTRUCTION_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE,
    USER_ACCOUNT_PROFILE_ROUTE,
    USER_ACCOUNT_ROUTE,
    USER_ACCOUNT_SEARCH_ROUTE,
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
import ProgramsPersonalContainer from "../../components/programs/personal/ProgramsPersonalContainer";
import ProgramsFavoritesContainer from "../../components/programs/favorites/ProgramsFavoritesContainer";
import ProgramsTrainerBasedContainer from "../../components/programs/trainerBased/ProgramsTrainerBasedContainer";
import ProgramsProgramProfile from "../../components/programs/programProfile/ProgramsProgramProfile";
import ProgramsProgramProfileContainer from "../../components/programs/programProfile/ProgramsProgramProfileContainer";
import StatisticsContainer from "../../components/statistics/main/StatisticsContainer";
import UserAccountProfileContainer from "../../components/userAccount/profiles/UserAccountProfileContainer";
import MeasurementWaistContainer from "../../components/measurements/waist/MeasurementWaistContainer";
import MeasurementThighContainer from "../../components/measurements/thigh/MeasurementThighContainer";
import MeasurementChestContainer from "../../components/measurements/chest/MeasurementChestContainer";
import MeasurementFatPercentageContainer
    from "../../components/measurements/fatPercentage/MeasurementFatPercentageContainer";
import MeasurementForearmsContainer from "../../components/measurements/forearms/MeasurementForearmsContainer";
import MeasurementNeckContainer from "../../components/measurements/neck/MeasurementNeckContainer";
import MeasurementShouldersContainer from "../../components/measurements/shoulders/MeasurementShouldersContainer";
import MeasurementWeightContainer from "../../components/measurements/weight/MeasurementWeightContainer";
import MeasurementPhotosContainer from "../../components/measurements/photos/MeasurementPhotosContainer";

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
        Component: <UserAccountProfileContainer/>
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
        path: MEASUREMENTS_WAIST_ROUTE,
        Component: <MeasurementWaistContainer/>
    },
    {
        path: MEASUREMENTS_THIGH_ROUTE,
        Component: <MeasurementThighContainer/>
    },
    {
        path: MEASUREMENTS_CHEST_ROUTE,
        Component: <MeasurementChestContainer/>
    },
    {
        path: MEASUREMENTS_FAT_PERCENTAGE_ROUTE,
        Component: <MeasurementFatPercentageContainer/>
    },
    {
        path: MEASUREMENTS_FOREARMS_ROUTE,
        Component: <MeasurementForearmsContainer/>
    },
    {
        path: MEASUREMENTS_NECK_ROUTE,
        Component: <MeasurementNeckContainer/>
    },
    {
        path: MEASUREMENTS_SHOULDERS_ROUTE,
        Component: <MeasurementShouldersContainer/>
    },
    {
        path: MEASUREMENTS_WEIGHT_ROUTE,
        Component: <MeasurementWeightContainer/>
    },
    {
        path: MEASUREMENTS_PHOTOS_ROUTE,
        Component: <MeasurementPhotosContainer/>
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
    {
        path: PROGRAMS_PERSONAL_ROUTE,
        Component: <ProgramsPersonalContainer/>
    },
    {
        path: PROGRAMS_FAVORITES_ROUTE,
        Component: <ProgramsFavoritesContainer/>
    },
    {
        path: PROGRAMS_TRAINER_BASED_ROUTE,
        Component: <ProgramsTrainerBasedContainer/>
    },
    {
        path: PROGRAMS_PROGRAM_PROFILE_ROUTE,
        Component: <ProgramsProgramProfileContainer/>
    },

    {
        path: STATISTICS_ROUTE,
        Component: <StatisticsContainer/>
    }
]