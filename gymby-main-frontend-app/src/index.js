import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {OidcProvider} from "@axa-fr/react-oidc";
import {configuration} from "./api/oidc/axa-auth";
/*import store from "./redux/store";*/
import './utils/i18next/i18next';
import {CircularProgress} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Loading = () => <div><CircularProgress /></div>
/*const SessionLost = () => <p>Session Lost</p>;*/
/*sessionLostComponent={SessionLost}*/

root.render(
    <React.StrictMode>
        <OidcProvider configuration={configuration} loadingComponent={Loading}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </OidcProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
