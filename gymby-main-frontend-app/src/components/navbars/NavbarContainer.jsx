import React, {useEffect, useRef, useState} from 'react';
import NavbarLanding from "./NavbarLanding";
import NavbarMain from "./NavbarMain";
import {connect} from "react-redux";
import {setIsActiveENGBtn, setIsActiveUABtn} from '../../redux/slices/language-slice'
import {useOidc, useOidcAccessToken, useOidcIdToken, useOidcUser} from "@axa-fr/react-oidc";
import {setAccessToken, setIsAuth} from "../../redux/reducers/auth-reducer";
import {useTranslation} from "react-i18next";

const NavbarContainer = (props) => {
    const [burgerMenuState, setBurgerMenuState] = useState(true);
    const menuBody = useRef(null);
    const { login, isAuthenticated } = useOidc();
    const { idToken, idTokenPayload } = useOidcIdToken();
    const {i18n} = useTranslation();
    const [oidcUser, setOidcUser] = useState(null);
    const { accessToken, accessTokenPayload } = useOidcAccessToken();

    useEffect(()  => {
        props.setIsAuth(isAuthenticated)
    }, [isAuthenticated])

    useEffect(() => {
        if(props.isActiveUABtn){
            i18n.changeLanguage('ua');
        }
        if(props.isActiveENGBtn){
            i18n.changeLanguage('eng');
        }
    }, [props.isActiveUABtn, props.isActiveENGBtn]);


   /* useEffect(() => {
        props.setAccessToken(idToken)
        console.log(accessToken)
    }, [props.isAuth])*/


    function UAButtonStateHandler (lang) {
        props.setIsActiveUABtn(true);
        props.setIsActiveENGBtn(false);
        i18n.changeLanguage(lang);
    }

    function ENGButtonStateHandler (lang) {
        props.setIsActiveENGBtn(true);
        props.setIsActiveUABtn(false);
        i18n.changeLanguage(lang);
    }

    function toggleBurgerMenu() {
        if(!burgerMenuState) {
            menuBody.current.style.top = '-100%';
            setBurgerMenuState(true);
        } else {
            menuBody.current.style.top = '0';
            setBurgerMenuState(false);
        }
    }

    return (
        <div>
            {props.isAuth ?
                <NavbarMain toggleBurgerMenu={toggleBurgerMenu}
                            menuBody={menuBody}
                            isActiveUABtn={props.isActiveUABtn}
                            isActiveENGBtn={props.isActiveENGBtn}
                            UAButtonStateHandler={UAButtonStateHandler}
                            ENGButtonStateHandler={ENGButtonStateHandler}
            />

                :
                <NavbarLanding toggleBurgerMenu={toggleBurgerMenu}
                               menuBody={menuBody}
                               login={login}
                               isActiveUABtn={props.isActiveUABtn}
                               isActiveENGBtn={props.isActiveENGBtn}
                               UAButtonStateHandler={UAButtonStateHandler}
                               ENGButtonStateHandler={ENGButtonStateHandler}
                />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isActiveUABtn: state.language.isActiveUABtn,
        isActiveENGBtn: state.language.isActiveENGBtn,
        setIsAuth: state.auth.setIsAuth,
        isAuth: state.auth.isAuth,
        accessToken: state.auth.accessToken
    }
}

export default connect(mapStateToProps,
    {setIsActiveUABtn, setIsActiveENGBtn, setIsAuth, setAccessToken})(NavbarContainer);