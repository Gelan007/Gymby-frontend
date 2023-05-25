import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../utils/routes/routes";
import NotFound from "./notFound/NotFound";
import {connect} from "react-redux";

const AppRouter = ({isAuth}) => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}

            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {})(AppRouter);